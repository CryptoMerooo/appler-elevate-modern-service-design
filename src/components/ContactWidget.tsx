import { useState, useEffect, useRef } from "react";
import { Phone, MessageCircle, Mail, X, MessageSquare, Clock } from "lucide-react";
import { useBookingModal } from "@/contexts/BookingModalContext";

const ContactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);
  const { openModal } = useBookingModal();

  // Check if current Moscow time is between 10:00-21:00
  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date();
      const moscowTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Moscow" }));
      const hours = moscowTime.getHours();
      setIsOnline(hours >= 10 && hours < 21);
    };

    checkOnlineStatus();
    const interval = setInterval(checkOnlineStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleFormClick = () => {
    setIsOpen(false);
    openModal();
  };

  const contacts = [
    {
      icon: Phone,
      label: "Позвонить",
      href: "tel:+74951234567",
      color: "bg-green-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/74951234567",
      color: "bg-green-600",
    },
    {
      icon: MessageSquare,
      label: "Telegram",
      href: "https://t.me/mrappler",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:info@mrappler.ru",
      color: "bg-primary",
    },
  ];

  return (
    <div 
      ref={widgetRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8"
    >
      {/* Contact Options Panel */}
      <div
        className={`
          flex flex-col gap-2 p-4 bg-card rounded-2xl border border-border shadow-2xl
          transition-all duration-300 origin-bottom-right
          ${isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isOnline ? "bg-green-500 animate-pulse" : "bg-muted-foreground"}`} />
            <span className="text-sm font-medium text-foreground">
              {isOnline ? "Онлайн" : "Оффлайн"}
            </span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            <span>10:00–21:00</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-2 pt-2">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors group"
            >
              <div className={`p-2 rounded-lg ${contact.color} text-white`}>
                <contact.icon className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                {contact.label}
              </span>
            </a>
          ))}

          {/* Form Button */}
          <button
            onClick={handleFormClick}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-secondary transition-colors group w-full text-left"
          >
            <div className="p-2 rounded-lg bg-primary text-primary-foreground">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
              Оставить заявку
            </span>
          </button>
        </div>
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative p-4 rounded-full shadow-lg transition-all duration-300
          ${isOpen 
            ? "bg-secondary text-foreground rotate-90" 
            : "bg-primary text-primary-foreground hover:scale-110 hover:shadow-xl"
          }
        `}
        aria-label={isOpen ? "Закрыть меню связи" : "Открыть меню связи"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
        
        {/* Online Badge */}
        {!isOpen && isOnline && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-card"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ContactWidget;

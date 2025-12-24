import { useState } from "react";
import { X, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { useBookingModal } from "@/contexts/BookingModalContext";
import PhoneInput, { validatePhone, getPhoneError } from "./PhoneInput";

const BookingModal = () => {
  const { isOpen, closeModal } = useBookingModal();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    device: "",
    problem: "",
  });
  const [errors, setErrors] = useState<{ phone?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Валидация телефона
    const phoneError = getPhoneError(formData.phone);
    if (phoneError) {
      setErrors({ phone: phoneError });
      return;
    }
    
    setErrors({});
    setIsSubmitted(true);
    toast.success("Заявка отправлена! Мы перезвоним в течение 10 минут.");
    setFormData({ name: "", phone: "", device: "", problem: "" });
    setTimeout(() => {
      setIsSubmitted(false);
      closeModal();
    }, 2000);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
    if (errors.phone && validatePhone(value)) {
      setErrors({});
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-lg bg-card rounded-3xl border border-border shadow-2xl animate-scale-in overflow-hidden">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Header */}
        <div className="px-8 pt-8 pb-4">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
            Бесплатная диагностика
          </span>
          <h3 className="font-display font-bold text-2xl text-foreground">
            Заявка на ремонт
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Перезвоним в течение 10 минут
          </p>
        </div>

        {/* Form Content */}
        <div className="px-8 pb-8">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="font-display font-bold text-xl mb-2 text-foreground">
                Заявка отправлена!
              </h4>
              <p className="text-muted-foreground">
                Мы перезвоним вам в течение 10 минут
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Как к вам обращаться?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Телефон
                </label>
                <PhoneInput
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  required
                  className={`w-full px-4 py-3 bg-secondary border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none transition-colors ${
                    errors.phone ? "border-destructive focus:border-destructive" : "border-border focus:border-primary/50"
                  }`}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Устройство
                </label>
                <select
                  value={formData.device}
                  onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option value="">Выберите устройство</option>
                  <option value="iphone">iPhone</option>
                  <option value="macbook">MacBook</option>
                  <option value="ipad">iPad</option>
                  <option value="imac">iMac / Mac</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Опишите проблему
                </label>
                <textarea
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Что случилось с устройством?"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2 text-base py-4"
              >
                Отправить заявку
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

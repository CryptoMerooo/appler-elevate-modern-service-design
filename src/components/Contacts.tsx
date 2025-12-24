import { useState } from "react";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import PhoneInput, { validatePhone, getPhoneError } from "./PhoneInput";

const Contacts = () => {
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
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handlePhoneChange = (value: string) => {
    setFormData({ ...formData, phone: value });
    if (errors.phone && validatePhone(value)) {
      setErrors({});
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Адрес",
      value: "Москва, ул. Тверская, 12",
      subvalue: "м. Тверская, 5 мин пешком",
    },
    {
      icon: Phone,
      title: "Телефон",
      value: "+7 (495) 123-45-67",
      subvalue: "Звоните с 9:00 до 21:00",
      href: "tel:+74951234567",
    },
    {
      icon: Clock,
      title: "Режим работы",
      value: "Ежедневно 9:00 — 21:00",
      subvalue: "Без выходных и праздников",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@mr-appler.ru",
      subvalue: "Ответим в течение часа",
      href: "mailto:info@mr-appler.ru",
    },
  ];

  return (
    <section id="contacts" className="section-padding bg-dark text-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
            Контакты
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-6 text-cream">
            Оставьте заявку на
            <span className="text-primary"> бесплатную диагностику</span>
          </h2>
          <p className="text-lg text-cream/70">
            Перезвоним в течение 10 минут и проконсультируем по любому вопросу
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Form */}
          <div className="bg-dark-soft rounded-3xl border border-cream/10 p-8 lg:p-10">
            <h3 className="font-display font-bold text-2xl mb-6 text-cream">
              Заявка на ремонт
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="font-display font-bold text-xl mb-2 text-cream">
                  Заявка отправлена!
                </h4>
                <p className="text-cream/60">
                  Мы перезвоним вам в течение 10 минут
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-cream/80 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-dark border border-cream/10 rounded-xl text-cream placeholder:text-cream/40 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Как к вам обращаться?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-cream/80 mb-2">
                    Телефон
                  </label>
                  <PhoneInput
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                    className={`w-full px-4 py-3 bg-dark border rounded-xl text-cream placeholder:text-cream/40 focus:outline-none transition-colors ${
                      errors.phone ? "border-destructive focus:border-destructive" : "border-cream/10 focus:border-primary/50"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-cream/80 mb-2">
                    Устройство
                  </label>
                  <select
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    className="w-full px-4 py-3 bg-dark border border-cream/10 rounded-xl text-cream focus:outline-none focus:border-primary/50 transition-colors"
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
                  <label className="block text-sm font-medium text-cream/80 mb-2">
                    Опишите проблему
                  </label>
                  <textarea
                    value={formData.problem}
                    onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-dark border border-cream/10 rounded-xl text-cream placeholder:text-cream/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Что случилось с устройством?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
                >
                  Отправить заявку
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-xs text-cream/40 text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className={`block group p-6 bg-dark-soft rounded-2xl border border-cream/10 transition-all duration-300 hover:border-primary/30 ${
                  info.href ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-cream/50 mb-1">{info.title}</div>
                    <div className="font-semibold text-lg text-cream mb-1">
                      {info.value}
                    </div>
                    <div className="text-sm text-cream/50">{info.subvalue}</div>
                  </div>
                </div>
              </a>
            ))}

            {/* Map Placeholder */}
            <div className="relative h-48 bg-dark-soft rounded-2xl border border-cream/10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <span className="text-sm text-cream/60">
                    Москва, ул. Тверская, 12
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;

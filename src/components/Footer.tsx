const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      { label: "Ремонт iPhone", href: "#services" },
      { label: "Ремонт MacBook", href: "#services" },
      { label: "Ремонт iPad", href: "#services" },
      { label: "Ремонт iMac", href: "#services" },
    ],
    company: [
      { label: "О компании", href: "#advantages" },
      { label: "Отзывы", href: "#reviews" },
      { label: "Вопросы", href: "#faq" },
      { label: "Контакты", href: "#contacts" },
    ],
  };

  return (
    <footer className="bg-dark border-t border-cream/10">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg"></span>
              </div>
              <span className="font-display font-bold text-xl text-cream">
                Mr.<span className="text-primary">Appler</span>
              </span>
            </a>
            <p className="text-cream/60 text-sm leading-relaxed mb-4">
              Премиальный сервисный центр Apple в Москве. 
              Профессиональный ремонт с гарантией до 1 года.
            </p>
            <div className="flex gap-3">
              {["telegram", "whatsapp", "vk"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-cream/5 flex items-center justify-center text-cream/60 hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <span className="text-xs uppercase font-bold">
                    {social.slice(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-bold text-cream mb-4">Услуги</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-bold text-cream mb-4">Компания</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-cream mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+74951234567"
                  className="text-cream hover:text-primary transition-colors font-semibold"
                >
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="text-cream/60">Ежедневно 9:00 — 21:00</li>
              <li className="text-cream/60">Москва, ул. Тверская, 12</li>
              <li>
                <a
                  href="mailto:info@mr-appler.ru"
                  className="text-cream/60 hover:text-primary transition-colors"
                >
                  info@mr-appler.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream/40">
            © {currentYear} Mr.Appler. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs text-cream/40 hover:text-cream/60 transition-colors">
              Пользовательское соглашение
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

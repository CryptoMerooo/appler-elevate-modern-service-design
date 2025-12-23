import { Shield, Clock, Award, Wrench, MapPin, CreditCard } from "lucide-react";

const Advantages = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Быстрый ремонт",
      description: "80% ремонтов выполняем за 30-60 минут. Сложные случаи — в течение дня.",
      highlight: "от 30 мин",
    },
    {
      icon: Shield,
      title: "Гарантия до 1 года",
      description: "Даём официальную гарантию на все работы и установленные комплектующие.",
      highlight: "12 месяцев",
    },
    {
      icon: Award,
      title: "Оригинальные запчасти",
      description: "Используем оригинальные компоненты Apple и сертифицированные аналоги.",
      highlight: "100% качество",
    },
    {
      icon: Wrench,
      title: "Бесплатная диагностика",
      description: "Точно определим неисправность и озвучим стоимость до начала ремонта.",
      highlight: "0 ₽",
    },
    {
      icon: MapPin,
      title: "Выезд мастера",
      description: "Приедем к вам домой или в офис. Простой ремонт сделаем на месте.",
      highlight: "по Москве",
    },
    {
      icon: CreditCard,
      title: "Удобная оплата",
      description: "Оплата наличными, картой или переводом. Рассрочка на крупный ремонт.",
      highlight: "любой способ",
    },
  ];

  return (
    <section id="advantages" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Почему мы
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl">
              6 причин выбрать
              <span className="text-primary"> Mr.Appler</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground lg:text-right">
            Мы не просто ремонтируем технику — мы заботимся о каждом клиенте 
            и стремимся превзойти ожидания
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl border border-border p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/20"
            >
              {/* Highlight Badge */}
              <span className="absolute top-6 right-6 px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                {advantage.highlight}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                <advantage.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: "10+", label: "лет на рынке" },
            { value: "50 000+", label: "успешных ремонтов" },
            { value: "98%", label: "довольных клиентов" },
            { value: "4.9", label: "рейтинг на Яндексе" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-secondary/50 rounded-2xl"
            >
              <div className="font-display font-bold text-3xl sm:text-4xl text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

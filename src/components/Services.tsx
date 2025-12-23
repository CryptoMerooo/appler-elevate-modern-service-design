import { Smartphone, Laptop, Tablet, Monitor, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "iPhone",
      models: ["iPhone 15/14/13 Pro", "iPhone 12/11", "iPhone SE", "iPhone X/XS/XR"],
      repairs: [
        { name: "Замена экрана", price: "от 3 990 ₽" },
        { name: "Замена батареи", price: "от 1 990 ₽" },
        { name: "Ремонт после воды", price: "от 2 990 ₽" },
      ],
      popular: true,
    },
    {
      icon: Laptop,
      title: "MacBook",
      models: ["MacBook Pro M3/M2/M1", "MacBook Air", "MacBook Retina"],
      repairs: [
        { name: "Замена матрицы", price: "от 12 990 ₽" },
        { name: "Замена клавиатуры", price: "от 5 990 ₽" },
        { name: "Чистка + термопаста", price: "от 3 490 ₽" },
      ],
    },
    {
      icon: Tablet,
      title: "iPad",
      models: ["iPad Pro", "iPad Air", "iPad mini", "iPad 10/9/8"],
      repairs: [
        { name: "Замена стекла", price: "от 4 990 ₽" },
        { name: "Замена дисплея", price: "от 7 990 ₽" },
        { name: "Замена батареи", price: "от 2 990 ₽" },
      ],
    },
    {
      icon: Monitor,
      title: "iMac & Mac",
      models: ["iMac 24\" M3/M1", "Mac mini", "Mac Pro", "Mac Studio"],
      repairs: [
        { name: "Замена SSD", price: "от 6 990 ₽" },
        { name: "Апгрейд RAM", price: "от 4 990 ₽" },
        { name: "Ремонт платы", price: "от 8 990 ₽" },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Наши услуги
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-6">
            Ремонтируем всю линейку 
            <span className="text-primary"> Apple</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Профессиональный ремонт любой сложности с использованием оригинальных 
            и сертифицированных комплектующих
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                service.popular ? "ring-2 ring-primary/20" : ""
              }`}
            >
              {service.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                  Популярное
                </span>
              )}

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mb-3">{service.title}</h3>

              {/* Models */}
              <div className="flex flex-wrap gap-1 mb-5">
                {service.models.map((model, i) => (
                  <span
                    key={i}
                    className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-md"
                  >
                    {model}
                  </span>
                ))}
              </div>

              {/* Repairs */}
              <ul className="space-y-3 mb-6">
                {service.repairs.map((repair, i) => (
                  <li key={i} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{repair.name}</span>
                    <span className="font-semibold text-foreground">{repair.price}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacts"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
              >
                Подробнее
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Не нашли вашу модель? Позвоните нам — ремонтируем всё!
          </p>
          <a href="#contacts" className="btn-primary inline-flex items-center gap-2">
            Бесплатная консультация
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

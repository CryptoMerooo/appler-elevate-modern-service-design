import { Phone, Search, Wrench, CheckCircle, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Оставьте заявку",
      description: "Позвоните или оставьте заявку на сайте. Опишите проблему — мы сразу подскажем примерную стоимость.",
    },
    {
      icon: Search,
      number: "02",
      title: "Бесплатная диагностика",
      description: "Привезите устройство к нам или вызовите мастера. Проведём диагностику и озвучим точную цену.",
    },
    {
      icon: Wrench,
      number: "03",
      title: "Ремонт устройства",
      description: "После вашего согласия приступаем к ремонту. Большинство работ занимает от 30 минут до 2 часов.",
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Получение и гарантия",
      description: "Проверьте устройство при нас. Получите гарантийный талон и рекомендации по уходу.",
    },
  ];

  return (
    <section id="process" className="section-padding bg-dark text-cream">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary text-sm font-semibold rounded-full mb-4">
            Процесс работы
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-6 text-cream">
            4 простых шага до 
            <span className="text-primary"> исправного устройства</span>
          </h2>
          <p className="text-lg text-cream/70">
            Прозрачный процесс без скрытых платежей и неприятных сюрпризов
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="relative bg-dark-soft rounded-2xl border border-cream/10 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-dark-soft/80">
                  {/* Number */}
                  <span className="absolute -top-4 -right-2 font-display font-bold text-6xl text-cream/5 group-hover:text-primary/10 transition-colors">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-xl mb-3 text-cream">
                    {step.title}
                  </h3>
                  <p className="text-cream/60 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-24 -right-4 z-10 w-8 h-8 bg-dark rounded-full border border-cream/10 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="#contacts" className="btn-primary inline-flex items-center gap-2 text-lg">
            Начать с бесплатной диагностики
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;

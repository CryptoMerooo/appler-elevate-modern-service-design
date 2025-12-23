import { ArrowRight, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  const badges = [
    { icon: Shield, text: "Гарантия 1 год" },
    { icon: Clock, text: "Ремонт от 30 мин" },
    { icon: Award, text: "Оригинальные запчасти" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(24_100%_50%_/_0.08)_0%,_transparent_50%)]" />
      <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Status Badge */}
            <div className="fade-in-up inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Работаем сейчас • до 21:00
              </span>
            </div>

            {/* Headline */}
            <h1 className="fade-in-up fade-in-up-delay-1 heading-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
              Премиальный ремонт
              <span className="block text-primary">техники Apple</span>
            </h1>

            {/* Subheadline */}
            <p className="fade-in-up fade-in-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Профессиональный сервис iPhone, MacBook, iPad и Mac. 
              Диагностика бесплатно, ремонт от 30 минут с гарантией до года.
            </p>

            {/* CTA Buttons */}
            <div className="fade-in-up fade-in-up-delay-3 flex flex-wrap gap-4">
              <a href="#services" className="btn-primary inline-flex items-center gap-2 text-base">
                Узнать стоимость
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#process" className="btn-secondary inline-flex items-center gap-2 text-base">
                Как мы работаем
              </a>
            </div>

            {/* Trust Badges */}
            <div className="fade-in-up fade-in-up-delay-4 flex flex-wrap gap-4 pt-4">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl border border-border"
                >
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative fade-in-up fade-in-up-delay-2">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse-glow" />
              <div className="absolute inset-8 rounded-full bg-card border border-border shadow-lg" />
              
              {/* Device mockups */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* iPhone */}
                  <div className="w-48 h-96 bg-dark rounded-[3rem] border-4 border-dark-soft shadow-2xl animate-float">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-dark-soft rounded-full" />
                    <div className="absolute inset-2 rounded-[2.5rem] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/20 flex items-center justify-center mb-3">
                          <span className="text-2xl"></span>
                        </div>
                        <span className="text-xs text-slate-400">Mr.Appler</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* MacBook hint */}
                  <div className="absolute -bottom-8 -right-16 w-32 h-20 bg-dark/80 rounded-t-lg border-t-2 border-x-2 border-dark-soft shadow-xl transform rotate-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-xs font-medium text-muted-foreground">Листайте вниз</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

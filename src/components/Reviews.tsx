import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Александр М.",
      device: "iPhone 14 Pro",
      rating: 5,
      text: "Разбил экран iPhone, думал придётся менять телефон. В Mr.Appler заменили за час, выглядит как новый. Цена адекватная, гарантия год — рекомендую!",
      date: "2 недели назад",
    },
    {
      name: "Елена К.",
      device: "MacBook Pro 16\"",
      rating: 5,
      text: "MacBook перестал заряжаться. Диагностика бесплатная, оказалось нужно менять разъём. Сделали за день, работает отлично уже 3 месяца.",
      date: "1 месяц назад",
    },
    {
      name: "Дмитрий В.",
      device: "iPad Pro 12.9\"",
      rating: 5,
      text: "Залил iPad кофе. Был уверен, что всё — конец. Ребята почистили, заменили пару деталей. Работает! Спасибо огромное за спасение данных и устройства.",
      date: "3 недели назад",
    },
    {
      name: "Анна С.",
      device: "iPhone 13",
      rating: 5,
      text: "Меняла батарею, так как держала полдня. Теперь iPhone как новый, держит 1.5-2 дня активного использования. Сервис на высоте!",
      date: "1 неделю назад",
    },
    {
      name: "Михаил Р.",
      device: "iMac 27\"",
      rating: 5,
      text: "Апгрейдил iMac: добавили SSD и память. Компьютер просто летает теперь! Работа заняла пару часов, всё аккуратно и профессионально.",
      date: "2 месяца назад",
    },
    {
      name: "Ольга Н.",
      device: "MacBook Air M1",
      rating: 5,
      text: "Сломалась клавиатура, несколько клавиш не работали. Заменили быстро, стоило дешевле, чем я ожидала. Очень довольна обслуживанием.",
      date: "1 месяц назад",
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            Отзывы клиентов
          </span>
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-6">
            Нам доверяют
            <span className="text-primary"> тысячи клиентов</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Реальные отзывы наших клиентов — лучшая рекомендация нашей работы
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              {/* Review Text */}
              <p className="text-foreground leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.device}</div>
                </div>
                <div className="text-xs text-muted-foreground">{review.date}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Yandex Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-card rounded-2xl border border-border shadow-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-2xl text-foreground">4.9</div>
              <div className="text-xs text-muted-foreground">на Яндекс Картах</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Сколько времени занимает ремонт?",
      answer: "Время ремонта зависит от сложности. Замена экрана или батареи занимает 30-60 минут. Ремонт после залития или сложная диагностика — от 2 часов до 2-3 дней. Мы всегда сообщаем точные сроки после диагностики.",
    },
    {
      question: "Какие запчасти вы используете?",
      answer: "Мы используем оригинальные комплектующие Apple и высококачественные сертифицированные аналоги. Перед ремонтом обсуждаем с клиентом варианты и разницу в стоимости. Все запчасти проходят проверку качества.",
    },
    {
      question: "Что входит в гарантию?",
      answer: "Гарантия до 1 года распространяется на все выполненные работы и установленные комплектующие. Если в течение гарантийного срока возникнут проблемы — бесплатно устраним. Гарантия не распространяется на механические повреждения и залитие.",
    },
    {
      question: "Диагностика действительно бесплатная?",
      answer: "Да, диагностика полностью бесплатная и ни к чему не обязывает. Мы определяем неисправность, называем точную стоимость и сроки ремонта. Вы решаете — делать ремонт или нет. При отказе от ремонта просто забираете устройство.",
    },
    {
      question: "Выезжаете ли вы на дом?",
      answer: "Да, мастер может приехать к вам домой или в офис по Москве и ближайшему Подмосковью. На выезде делаем простые ремонты: замену экрана, батареи, чистку ноутбука. Сложный ремонт выполняем в сервисном центре.",
    },
    {
      question: "Сохраняются ли мои данные после ремонта?",
      answer: "В 99% случаев все данные сохраняются. Мы не трогаем программную часть без необходимости. Если есть риск потери данных (например, при ремонте после залития), обязательно предупредим и поможем сделать резервную копию.",
    },
  ];

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Header */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
              Частые вопросы
            </span>
            <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-6">
              Ответы на 
              <span className="text-primary"> популярные вопросы</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Собрали ответы на вопросы, которые чаще всего задают наши клиенты. 
              Не нашли ответ? Звоните — расскажем всё подробно!
            </p>
            <a
              href="tel:+74951234567"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Задать вопрос по телефону
            </a>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:border-primary/20"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

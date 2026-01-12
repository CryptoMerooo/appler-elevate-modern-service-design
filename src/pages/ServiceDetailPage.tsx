import { useParams, Link, Navigate } from "react-router-dom";
import { Smartphone, Laptop, Tablet, Monitor, Watch, Headphones, ArrowRight, ArrowLeft, Check, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { BookingModalProvider, useBookingModal } from "@/contexts/BookingModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import servicesData from "@/data/services.json";

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  laptop: Laptop,
  tablet: Tablet,
  monitor: Monitor,
  watch: Watch,
  headphones: Headphones,
};

const ServiceDetailContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useBookingModal();
  
  const service = servicesData.services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const IconComponent = iconMap[service.icon] || Smartphone;

  return (
    <>
      <Helmet>
        <title>{service.title} | Mr.Appler — Сервисный центр Apple</title>
        <meta
          name="description"
          content={`${service.shortDescription}. Цены ${service.priceFrom}. Гарантия, оригинальные запчасти, быстрый ремонт.`}
        />
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Breadcrumb */}
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-primary transition-colors">
              Услуги
            </Link>
            <span>/</span>
            <span className="text-foreground">{service.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Все услуги
                </Link>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  {service.popular && (
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Популярное
                    </span>
                  )}
                </div>

                <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-4">
                  {service.title}
                </h1>

                <p className="text-xl text-muted-foreground mb-4">
                  {service.subtitle}
                </p>

                <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl" style={{ lineHeight: "1.8" }}>
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button onClick={openModal} className="btn-primary inline-flex items-center gap-2">
                    Записаться на ремонт
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href="tel:+74951234567" className="btn-secondary inline-flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </div>
              </div>

              {/* Models List */}
              <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                <h3 className="font-display font-bold text-lg mb-4">Поддерживаемые модели</h3>
                <div className="flex flex-wrap gap-2">
                  {service.models.map((model, i) => (
                    <span
                      key={i}
                      className="text-sm text-muted-foreground px-3 py-1.5 bg-secondary rounded-lg"
                    >
                      {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-muted-foreground">
                Преимущества ремонта {service.title.toLowerCase()} в нашем сервисе
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Прайс-лист
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Стоимость ремонта
              </h2>
              <p className="text-muted-foreground">
                Актуальные цены на {service.title.toLowerCase()}. Точная стоимость определяется после диагностики.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="divide-y divide-border">
                  {service.repairs.map((repair, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-5 hover:bg-secondary/50 transition-colors"
                    >
                      <span className="text-foreground font-medium" style={{ lineHeight: "1.6" }}>
                        {repair.name}
                      </span>
                      <span className="font-display font-bold text-primary text-lg whitespace-nowrap ml-4">
                        {repair.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  * Цены указаны ориентировочно. Точная стоимость зависит от модели устройства и сложности ремонта.
                </p>
                <button onClick={openModal} className="btn-primary inline-flex items-center gap-2">
                  Узнать точную стоимость
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                FAQ
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Частые вопросы
              </h2>
              <p className="text-muted-foreground">
                Ответы на популярные вопросы о ремонте {service.title.toLowerCase()}
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {service.faq.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-display font-semibold py-5 hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed" style={{ lineHeight: "1.8" }}>
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Готовы отремонтировать ваш{" "}
                <span className="text-primary">{service.title.replace("Ремонт ", "")}</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку и мы свяжемся с вами в течение 15 минут для уточнения деталей
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={openModal} className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                  Записаться на ремонт
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Бесплатная диагностика • Гарантия до 1 года • Цены {service.priceFrom}
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
    </>
  );
};

const ServiceDetailPage = () => {
  return (
    <BookingModalProvider>
      <ServiceDetailContent />
    </BookingModalProvider>
  );
};

export default ServiceDetailPage;

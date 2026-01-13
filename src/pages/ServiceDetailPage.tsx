import { useParams, Link, Navigate } from "react-router-dom";
import { Smartphone, Laptop, Tablet, Monitor, Watch, Headphones, ArrowRight, ArrowLeft, Check, Phone, AlertCircle } from "lucide-react";
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
  const popularServices = servicesData.popularServices.filter((s) => s.slug !== slug);

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
        <section className="relative py-16 lg:py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="container-custom relative z-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Все услуги
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  {service.popular && (
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      Популярное
                    </span>
                  )}
                </div>

                <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>

                <p className="text-xl lg:text-2xl text-muted-foreground">
                  {service.subtitle}
                </p>

                <p className="text-lg font-display font-bold text-primary">
                  Цены {service.priceFrom}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button onClick={openModal} className="btn-primary inline-flex items-center gap-2 text-base px-6 py-3">
                    Записаться на ремонт
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a href="tel:+74951234567" className="btn-secondary inline-flex items-center gap-2 text-base px-6 py-3">
                    <Phone className="w-4 h-4" />
                    Позвонить
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden">
                  <img 
                    src={service.heroImage} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-12 lg:py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <p 
                className="text-lg text-muted-foreground leading-relaxed"
                style={{ lineHeight: "1.9", maxWidth: "65ch" }}
              >
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-12 lg:py-20 bg-secondary/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Проблемы
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Проблемы, которые мы решаем
              </h2>
              <p className="text-muted-foreground">
                С какими неисправностями {service.title.toLowerCase().replace("ремонт ", "")} вы можете обратиться к нам
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {service.problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <AlertCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground" style={{ lineHeight: "1.6" }}>
                    {problem}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-12 lg:py-20">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Как мы работаем
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Этапы ремонта
              </h2>
              <p className="text-muted-foreground">
                Простой и прозрачный процесс от обращения до получения устройства
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {service.steps.map((step, index) => (
                <div
                  key={index}
                  className="relative bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-md"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ lineHeight: "1.7" }}>
                    {step.description}
                  </p>
                  
                  {/* Connector line */}
                  {index < service.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-6 h-0.5 bg-border -translate-y-1/2 z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services Section */}
        <section className="py-12 lg:py-20 bg-secondary/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Другие услуги
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Популярные услуги
              </h2>
              <p className="text-muted-foreground">
                Посмотрите другие услуги нашего сервисного центра
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {popularServices.map((item, index) => {
                const fullService = servicesData.services.find(s => s.slug === item.slug);
                const ItemIcon = fullService ? iconMap[fullService.icon] || Smartphone : Smartphone;
                
                return (
                  <Link
                    key={index}
                    to={`/services/${item.slug}`}
                    className="group bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-md hover:border-primary/30"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <ItemIcon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-primary font-semibold">{item.priceFrom}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      <span>Подробнее</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-20">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                FAQ
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Вопросы и ответы
              </h2>
              <p className="text-muted-foreground">
                Ответы на частые вопросы о {service.title.toLowerCase()}
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
                    <AccordionContent 
                      className="text-muted-foreground pb-5" 
                      style={{ lineHeight: "1.8", maxWidth: "60ch" }}
                    >
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl mb-6">
                Готовы отремонтировать ваш{" "}
                <span className="text-primary">{service.title.replace("Ремонт ", "")}</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8" style={{ lineHeight: "1.8" }}>
                Оставьте заявку и мы свяжемся с вами в течение 15 минут для уточнения деталей. 
                Бесплатная диагностика, гарантия до 1 года.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={openModal} className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                  Записаться на ремонт
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a href="tel:+74951234567" className="btn-secondary inline-flex items-center gap-2 text-lg px-8 py-4">
                  <Phone className="w-5 h-5" />
                  +7 (495) 123-45-67
                </a>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Цены {service.priceFrom} • Ремонт от 30 минут • Гарантия до 1 года
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

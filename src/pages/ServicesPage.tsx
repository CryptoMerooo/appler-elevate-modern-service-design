import { Link } from "react-router-dom";
import { Smartphone, Laptop, Tablet, Monitor, Watch, Headphones, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingModal from "@/components/BookingModal";
import { BookingModalProvider, useBookingModal } from "@/contexts/BookingModalContext";
import servicesData from "@/data/services.json";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  laptop: Laptop,
  tablet: Tablet,
  monitor: Monitor,
  watch: Watch,
  headphones: Headphones,
};

const ServicesContent = () => {
  const { openModal } = useBookingModal();
  const { services } = servicesData;

  const breadcrumbItems = [
    { label: "Услуги" }
  ];

  return (
    <>
      <Helmet>
        <title>Услуги ремонта Apple | Mr.Appler — iPhone, MacBook, iPad, iMac</title>
        <meta
          name="description"
          content="Полный спектр услуг по ремонту техники Apple: iPhone, MacBook, iPad, iMac, Apple Watch и AirPods. Гарантия, оригинальные запчасти, быстрый ремонт."
        />
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4 fade-in-up">
                Все услуги
              </span>
              <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6 fade-in-up fade-in-up-delay-1">
                Ремонт техники{" "}
                <span className="text-primary">Apple</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed fade-in-up fade-in-up-delay-2">
                Профессиональный сервис с гарантией качества. Ремонтируем iPhone, MacBook, 
                iPad, iMac, Apple Watch и AirPods любой сложности.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => {
                const IconComponent = iconMap[service.icon] || Smartphone;
                return (
                  <article
                    key={service.id}
                    className={`group relative bg-card rounded-2xl border border-border p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                      service.popular ? "ring-2 ring-primary/20" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {service.popular && (
                      <span className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                        Популярное
                      </span>
                    )}

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-bold text-2xl mb-3">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                      {service.shortDescription}
                    </p>

                    {/* Models Preview */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {service.models.slice(0, 3).map((model, i) => (
                        <span
                          key={i}
                          className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-md"
                        >
                          {model}
                        </span>
                      ))}
                      {service.models.length > 3 && (
                        <span className="text-xs text-muted-foreground px-2 py-1 bg-secondary rounded-md">
                          +{service.models.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-5 border-t border-border">
                      <div>
                        <span className="text-sm text-muted-foreground">Цена</span>
                        <p className="font-display font-bold text-xl text-primary">
                          {service.priceFrom}
                        </p>
                      </div>
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                      >
                        Подробнее
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        {/* Full Price Table Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Полный прайс-лист
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Все услуги и цены в одной таблице. Точная стоимость зависит от модели устройства.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-secondary/50">
                      <TableHead className="font-display font-bold text-foreground py-4 px-6 w-[200px]">
                        Устройство
                      </TableHead>
                      <TableHead className="font-display font-bold text-foreground py-4 px-6">
                        Услуга
                      </TableHead>
                      <TableHead className="font-display font-bold text-foreground py-4 px-6 text-right w-[150px]">
                        Цена
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => {
                      const IconComponent = iconMap[service.icon] || Smartphone;
                      return service.repairs.map((repair, repairIndex) => (
                        <TableRow 
                          key={`${service.id}-${repairIndex}`}
                          className="hover:bg-secondary/20 transition-colors"
                        >
                          {repairIndex === 0 ? (
                            <TableCell 
                              className="py-4 px-6 align-top border-r border-border/50"
                              rowSpan={service.repairs.length}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <IconComponent className="w-5 h-5 text-primary" />
                                </div>
                                <div>
                                  <Link 
                                    to={`/services/${service.slug}`}
                                    className="font-semibold text-foreground hover:text-primary transition-colors"
                                  >
                                    {service.title}
                                  </Link>
                                  <p className="text-xs text-muted-foreground mt-0.5">
                                    {service.priceFrom}
                                  </p>
                                </div>
                              </div>
                            </TableCell>
                          ) : null}
                          <TableCell className="py-3 px-6 text-foreground">
                            {repair.name}
                          </TableCell>
                          <TableCell className="py-3 px-6 text-right font-semibold text-primary whitespace-nowrap">
                            {repair.price}
                          </TableCell>
                        </TableRow>
                      ));
                    })}
                  </TableBody>
                </Table>
              </div>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-6">
              * Указаны минимальные цены. Точная стоимость определяется после бесплатной диагностики.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center">
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 max-w-2xl mx-auto">
                <h3 className="heading-display text-2xl lg:text-3xl mb-4">
                  Не нашли нужную услугу?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Свяжитесь с нами — ремонтируем любую технику Apple, даже редкие модели
                </p>
                <button onClick={openModal} className="btn-primary inline-flex items-center gap-2">
                  Бесплатная консультация
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
    </>
  );
};

const ServicesPage = () => {
  return (
    <BookingModalProvider>
      <ServicesContent />
    </BookingModalProvider>
  );
};

export default ServicesPage;

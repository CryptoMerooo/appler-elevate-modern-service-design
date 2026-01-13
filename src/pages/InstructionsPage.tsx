import { Link } from "react-router-dom";
import { Smartphone, Laptop, Tablet, Monitor, Watch, Headphones, ArrowRight, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingModal from "@/components/BookingModal";
import { BookingModalProvider, useBookingModal } from "@/contexts/BookingModalContext";
import instructionsData from "@/data/instructions.json";

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  laptop: Laptop,
  tablet: Tablet,
  monitor: Monitor,
  watch: Watch,
  headphones: Headphones,
};

const InstructionsContent = () => {
  const { openModal } = useBookingModal();
  const { instructions } = instructionsData;

  const breadcrumbItems = [
    { label: "Инструкции" }
  ];

  return (
    <>
      <Helmet>
        <title>Инструкции по ремонту Apple | Mr.Appler — Полезные советы</title>
        <meta
          name="description"
          content="Полезные инструкции по использованию и обслуживанию техники Apple: iPhone, MacBook, iPad. Hard Reset, проверка батареи, резервные копии и многое другое."
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
                База знаний
              </span>
              <h1 className="heading-display text-4xl sm:text-5xl lg:text-6xl mb-6 fade-in-up fade-in-up-delay-1">
                Инструкции по{" "}
                <span className="text-primary">Apple</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed fade-in-up fade-in-up-delay-2">
                Полезные руководства по использованию и обслуживанию техники Apple. 
                Решайте простые проблемы самостоятельно или узнайте, когда пора обратиться к специалистам.
              </p>
            </div>
          </div>
        </section>

        {/* Instructions Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {instructions.map((instruction, index) => {
                const IconComponent = iconMap[instruction.icon] || BookOpen;
                return (
                  <article
                    key={instruction.id}
                    className="group relative bg-card rounded-2xl border border-border p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>

                    {/* Title */}
                    <h2 className="font-display font-bold text-xl mb-3 line-clamp-2">
                      {instruction.title}
                    </h2>

                    {/* Description */}
                    <p 
                      className="text-muted-foreground leading-relaxed mb-5 line-clamp-3"
                      style={{ lineHeight: "1.7" }}
                    >
                      {instruction.shortDescription}
                    </p>

                    {/* Steps count */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5">
                      <BookOpen className="w-4 h-4" />
                      <span>{instruction.steps.length} шага</span>
                    </div>

                    {/* Link */}
                    <Link
                      to={`/instructions/${instruction.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
                    >
                      Читать инструкцию
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <div className="text-center">
              <div className="bg-card rounded-2xl border border-border p-8 lg:p-12 max-w-2xl mx-auto">
                <h3 className="heading-display text-2xl lg:text-3xl mb-4">
                  Не нашли решение?
                </h3>
                <p className="text-muted-foreground mb-6" style={{ lineHeight: "1.7" }}>
                  Если инструкции не помогли — обратитесь к нашим специалистам. 
                  Диагностика бесплатно!
                </p>
                <button onClick={openModal} className="btn-primary inline-flex items-center gap-2">
                  Записаться на диагностику
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

const InstructionsPage = () => {
  return (
    <BookingModalProvider>
      <InstructionsContent />
    </BookingModalProvider>
  );
};

export default InstructionsPage;

import { useParams, Link, Navigate } from "react-router-dom";
import { Smartphone, Laptop, Tablet, Monitor, Watch, Headphones, ArrowRight, ArrowLeft, Phone, BookOpen } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import BookingModal from "@/components/BookingModal";
import { BookingModalProvider, useBookingModal } from "@/contexts/BookingModalContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import instructionsData from "@/data/instructions.json";

const iconMap: Record<string, React.ElementType> = {
  smartphone: Smartphone,
  laptop: Laptop,
  tablet: Tablet,
  monitor: Monitor,
  watch: Watch,
  headphones: Headphones,
};

const InstructionDetailContent = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useBookingModal();
  
  const instruction = instructionsData.instructions.find((i) => i.slug === slug);
  const otherInstructions = instructionsData.instructions.filter((i) => i.slug !== slug).slice(0, 3);

  if (!instruction) {
    return <Navigate to="/instructions" replace />;
  }

  const IconComponent = iconMap[instruction.icon] || BookOpen;

  const breadcrumbItems = [
    { label: "Инструкции", href: "/instructions" },
    { label: instruction.title }
  ];

  return (
    <>
      <Helmet>
        <title>{instruction.title} | Mr.Appler — Инструкции</title>
        <meta
          name="description"
          content={instruction.shortDescription}
        />
      </Helmet>

      <Header />

      <main className="pt-24">
        {/* Breadcrumbs */}
        <div className="container-custom">
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        {/* Hero Section */}
        <section className="relative py-12 lg:py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
          
          <div className="container-custom relative z-10">
            <Link
              to="/instructions"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Все инструкции
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <span className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4" />
                    {instruction.steps.length} шага
                  </span>
                </div>

                <h1 className="heading-display text-3xl sm:text-4xl lg:text-5xl">
                  {instruction.title}
                </h1>

                <p className="text-xl text-muted-foreground">
                  {instruction.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <a href="#steps" className="btn-primary inline-flex items-center gap-2 text-base px-6 py-3">
                    Читать инструкцию
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button onClick={openModal} className="btn-secondary inline-flex items-center gap-2 text-base px-6 py-3">
                    <Phone className="w-4 h-4" />
                    Нужна помощь?
                  </button>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden">
                  <img 
                    src={instruction.heroImage} 
                    alt={instruction.title}
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
                className="text-lg text-muted-foreground"
                style={{ lineHeight: "1.9", maxWidth: "65ch" }}
              >
                {instruction.description}
              </p>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section id="steps" className="py-12 lg:py-20 bg-secondary/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Пошаговая инструкция
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Как это сделать
              </h2>
              <p className="text-muted-foreground">
                Следуйте этим шагам для достижения результата
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {instruction.steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl border border-border p-6 lg:p-8"
                >
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-xl">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="font-display font-bold text-xl mb-3">
                        {step.title}
                      </h3>
                      <p 
                        className="text-muted-foreground"
                        style={{ lineHeight: "1.8", maxWidth: "55ch" }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Instructions Section */}
        <section className="py-12 lg:py-20">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                Читайте также
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Другие инструкции
              </h2>
              <p className="text-muted-foreground">
                Полезные руководства по технике Apple
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {otherInstructions.map((item, index) => {
                const ItemIcon = iconMap[item.icon] || BookOpen;
                
                return (
                  <Link
                    key={index}
                    to={`/instructions/${item.slug}`}
                    className="group bg-card rounded-2xl border border-border p-6 transition-all duration-300 hover:shadow-md hover:border-primary/30"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <ItemIcon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {item.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <span>Читать</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 lg:py-20 bg-secondary/30">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
                FAQ
              </span>
              <h2 className="heading-display text-3xl sm:text-4xl mb-4">
                Частые вопросы
              </h2>
              <p className="text-muted-foreground">
                Ответы на популярные вопросы по этой теме
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {instruction.faq.map((item, index) => (
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
                Не получается{" "}
                <span className="text-primary">самостоятельно</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8" style={{ lineHeight: "1.8" }}>
                Если инструкция не помогла решить проблему — обратитесь к нашим специалистам. 
                Бесплатная диагностика и гарантия на все работы.
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal />
    </>
  );
};

const InstructionDetailPage = () => {
  return (
    <BookingModalProvider>
      <InstructionDetailContent />
    </BookingModalProvider>
  );
};

export default InstructionDetailPage;

import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Advantages from "@/components/Advantages";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { BookingModalProvider } from "@/contexts/BookingModalContext";

const Index = () => {
  return (
    <BookingModalProvider>
      <Helmet>
        <title>Mr.Appler — Премиальный ремонт техники Apple в Москве</title>
        <meta
          name="description"
          content="Профессиональный ремонт iPhone, MacBook, iPad и iMac в Москве. Бесплатная диагностика, гарантия до 1 года, оригинальные запчасти. Ремонт от 30 минут."
        />
        <meta
          name="keywords"
          content="ремонт iPhone, ремонт MacBook, ремонт iPad, ремонт iMac, сервис Apple Москва, Mr.Appler"
        />
        <link rel="canonical" href="https://mr-appler.ru" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Services />
          <Advantages />
          <Process />
          <Reviews />
          <FAQ />
          <Contacts />
        </main>
        <Footer />
        <BookingModal />
      </div>
    </BookingModalProvider>
  );
};

export default Index;

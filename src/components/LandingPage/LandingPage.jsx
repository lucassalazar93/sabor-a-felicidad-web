// src/components/LandingPage/LandingPage.jsx
import Navbar from "../Navbar";
import HeroSection from "../../pages/HeroSection";
import QuienesSomos from "../QuienesSomos";
import Ofrecemos from "../../pages/Ofrecemos";
import PorQueElegirnos from "../../pages/PorQueElegirnos";
import Testimonios from "../Testimonios";
import CelebracionesEspeciales from "../CelebracionesEspeciales"; // ✅ NUEVA SECCIÓN
import SeccionCotizar from "../../pages/SeccionCotizar";
import WhatsappAvatar from "../WhatsappAvatar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <QuienesSomos />
      <Ofrecemos />
      <CelebracionesEspeciales />
      <PorQueElegirnos />
      <Testimonios />
      <SeccionCotizar />
      <WhatsappAvatar />
    </>
  );
};

export default LandingPage;

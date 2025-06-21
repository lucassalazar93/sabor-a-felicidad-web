// src/components/LandingPage/LandingPage.jsx
import Navbar from "../Navbar";
import HeroSection from "../../pages/HeroSection";
import QuienesSomos from "../QuienesSomos";
import Ofrecemos from "../../pages/Ofrecemos";
import PorQueElegirnos from "../../pages/PorQueElegirnos";
import Testimonios from "../Testimonios";
import CelebracionesEspeciales from "../CelebracionesEspeciales"; // ✅ NUEVA SECCIÓN
import SobreNosotros from "@/components/SobreNosotros";

import WhatsappAvatar from "../WhatsappAvatar";
import FormularioCotizacion from "@/components/FormularioCotizacion";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <QuienesSomos />
      <SobreNosotros />
      <Ofrecemos />
      <CelebracionesEspeciales />
      <PorQueElegirnos />
      <Testimonios />
      <WhatsappAvatar />
      <FormularioCotizacion />
    </>
  );
};

export default LandingPage;

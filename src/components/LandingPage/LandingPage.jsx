// src/components/LandingPage/LandingPage.jsx
import HeroSection from "../../pages/Hero/HeroSection";
import Ofrecemos from "../../pages/Ofrecemos/Ofrecemos";
import PorQueElegirnos from "../../pages/PorQueElegirnos/PorQueElegirnos";
import Testimonios from "../../sections/Testimonios/Testimonios";
import CelebracionesEspeciales from "../../sections/Celebraciones/CelebracionesEspeciales";
import SobreNosotros from "../../sections/SobreNosotros/SobreNosotros";
import GaleriaDestacada from "../../sections/GaleriaDestacada/GaleriaDestacada";

import WhatsappAvatar from "../ui/WhatsappButton/WhatsappAvatar";
import FormularioCotizacion from "../formularios/FormularioCotizacion";

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <GaleriaDestacada />
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

// src/App.jsx
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Componentes principales
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import WhatsappAvatar from "./components/ui/WhatsappButton/WhatsappAvatar";
import SplashScreen from "./components/SplashScreen/SplashScreen";

// Páginas
import TerminosCondiciones from "./pages/TerminosCondiciones/TerminosCondiciones";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad/PoliticaPrivacidad";
import CategoriasPage from "./pages/Categorias/CategoriasPage";

// 🔽 Manejo de navegación con scroll suave
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Espera a que el DOM esté listo
      }
    }
  }, [location]);

  return null;
};

function App() {
  const [loading, setLoading] = useState(true);

  // 👇 Forzar scroll al top después del splash
  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        // En móvil lo hacemos instantáneo, en desktop suave
        const isMobile = window.innerWidth <= 768;
        window.scrollTo({
          top: 0,
          behavior: isMobile ? "auto" : "smooth",
        });
      }, 50); // pequeño delay para que el DOM esté listo
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        // 👇 Pantalla inicial con logo animado
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <Router>
          <div className="app-container">
            {/* 🟢 Navbar persistente */}
            <Navbar />
            <ScrollToSection />

            {/* 📌 Rutas de la app */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/terminos" element={<TerminosCondiciones />} />
              <Route path="/privacidad" element={<PoliticaPrivacidad />} />
              <Route path="/categorias" element={<CategoriasPage />} />
            </Routes>

            {/* 🔻 Footer y botón de WhatsApp */}
            <Footer />
            <WhatsappAvatar />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;

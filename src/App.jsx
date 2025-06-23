// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import CategoriasPage from "./pages/CategoriasPage";
import WhatsappAvatar from "./components/WhatsappAvatar";

// Componente para manejar navegación y scroll suave desde otras páginas
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Espera a que se cargue el DOM
      }
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <ScrollToSection />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terminos" element={<TerminosCondiciones />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/categorias" element={<CategoriasPage />} />
        </Routes>

        <Footer />
        <WhatsappAvatar />
      </div>
    </Router>
  );
}

export default App;

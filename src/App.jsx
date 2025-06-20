import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import TerminosCondiciones from "./pages/TerminosCondiciones";
import PoliticaPrivacidad from "./pages/PoliticaPrivacidad";
import CategoriasPage from "./pages/CategoriasPage"; // ✅ nombre correcto

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/terminos" element={<TerminosCondiciones />} />
          <Route path="/privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/categorias" element={<CategoriasPage />} />{" "}
          {/* ✅ corregido */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

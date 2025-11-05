// App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Bitacora from "./pages/Bitacora";
import Integrantes from "./pages/Integrantes";
import Micaela from "./pages/portales/Micaela";
import Paula from "./pages/portales/Paula";
import Maria from "./pages/portales/Maria";
import Diagramas from "./pages/Diagramas";
import Musica from "./pages/Musica";
import MusicaPlayer from "./pages/MusicaPlayer";
import Peliculas from "./pages/Peliculas";
import { AudioProvider, GlobalMusicPlayer } from "./components/AudioPlayer";
import "./App.css";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  // ✅ Estado del tema: dark por defecto
  const [theme, setTheme] = useState("dark");

  // Detecta el tamaño de pantalla y ajusta la sidebar
  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // Función para alternar tema claro/oscuro
  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // Cambiar clase del body según tema
  useEffect(() => {
    document.body.className = ""; // elimina clases anteriores
    document.body.classList.add(theme + "-theme");
  }, [theme]);

  return (
    <AudioProvider>
      <div className={`app ${sidebarOpen ? "sidebar-open" : ""}`}>
        {/* ✅ Pasamos theme y toggleTheme al Sidebar */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          toggleSidebar={toggleSidebar}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main
          className="main-content"
          onClick={() => {
            // Cierra el menú al hacer clic fuera en móvil
            if (sidebarOpen && window.innerWidth <= 768) toggleSidebar();
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bitacora" element={<Bitacora />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/micaela" element={<Micaela />} />
            <Route path="/paula" element={<Paula />} />
            <Route path="/maria" element={<Maria />} />
            <Route path="/diagramas" element={<Diagramas />} />
            <Route path="/musica" element={<Musica />} />
            <Route path="/musica-player" element={<MusicaPlayer />} />
            <Route path="/peliculas" element={<Peliculas />} />
          </Routes>
        </main>

        {/* Player flotante global */}
        <GlobalMusicPlayer />
      </div>
    </AudioProvider>
  );
}

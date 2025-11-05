// Home.jsx - TP2 con efectos del TP1
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Chatbot from "../components/Chatbot";

export default function Home() {
  const [heroText, setHeroText] = useState("Hola");
  const palabras = ["Hola", "Hello", "Bonjour", "Ciao", "Olá"];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % palabras.length;
      setHeroText(palabras[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

 const tecnologias = [
  { img: "/img/logo-react.webp", alt: "React" },
  { img: "/img/logo-vite.webp", alt: "Vite" },
  { img: "/img/logo-javascript.webp", alt: "JavaScript" },
  { img: "/img/logo-css.webp", alt: "CSS" },
  { img: "/img/logo-github.webp", alt: "GitHub" },
  { img: "/img/logo-visual.webp", alt: "Visual Studio Code" },
];


  const integrantes = [
    { nombre: "Micaela", img: "/img/card-Micaela.webp", ruta: "/micaela" },
    { nombre: "Paula", img: "/img/card-Paula.webp", ruta: "/paula" },
    { nombre: "María", img: "/img/card-Maria.webp", ruta: "/maria" }
  ];

  return (
    <div className="home">
      {/* Hero con imagen de fondo (TP1) */}
      <section className="hero">
        <div className="hero__content">
          <h1>
            <span className="hero-saludo" key={heroText}>{heroText}</span>
            <span>Mundo</span>
          </h1>
        </div>
      </section>

      {/* Tecnologías con efectos hover del TP1 */}
      <section className="section-technologies">
        <h2 className="titulo-principal">Tecnologías</h2>
        <ul className="tech-list">
          {tecnologias.map((tech, i) => (
            <li key={i} className="tech-item">
              <img src={tech.img} alt={tech.alt} title={tech.alt} />
            </li>
          ))}
        </ul>

        <Chatbot />
        
      </section>
      

      {/* Intro con fondo */}
      <section className="section-intro">
        <div className="intro-box">
          <h3>¡Bienvenido a TechVerse!</h3>
          <p>
            En esta tercera entrega, nuestro proyecto evoluciona hacia una experiencia completamente interactiva
            donde incorporamos nuevas funcionalidades y mejoras, manteniendo el concepto original del multiverso digital.
            
          </p>
        </div>
      </section>

      {/* Estadísticas del TP3 */}
      <section className="stats-section">
        <h2 className="titulo-principal">Proyecto en números</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-icon">👥</span>
            <h3>3</h3>
            <p>Integrantes Activas</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🎬</span>
            <h3>20+</h3>
            <p>Películas en JSON</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🎵</span>
            <h3>2 APIs</h3>
            <p>Deezer + iTunes</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🎧</span>
            <h3>Player</h3>
            <p>Reproductor global</p>
          </div>
          <div className="stat-card">
            <span className="stat-icon">🧩</span>
            <h3>12+</h3>
            <p>Componentes React</p>
          </div>
        </div>
      </section>

      {/* Cards de miembros con efecto glow */}
      <section className="section-cards">
        <h2 className="titulo-principal">Portales de integrantes</h2>
        <div className="cards-grid">
          {integrantes.map((i, idx) => (
            <Link key={idx} to={i.ruta} className="card card-member">
              <img src={i.img} alt={`Portal ${i.nombre}`} />
              <span>{i.nombre}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Características TP3 */}
      <section className="features-section">
        <h2 className="titulo-principal">✨ Características del TP3</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">⚛️</span>
            <h4>Single Page Application</h4>
            <p>React Router para navegación sin recargas</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🧭</span>
            <h4>Sidebar Responsive</h4>
            <p>Menú fijo en desktop, hamburguesa en móvil</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📄</span>
            <h4>Datos desde JSON</h4>
            <p>20+ películas renderizadas dinámicamente</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌐</span>
            <h4>API Pública</h4>
            <p>Integración con Deezer API (música)</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">📊</span>
            <h4>Diagramas Técnicos</h4>
            <p>Árbol de componentes + estructura carpetas</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎨</span>
            <h4>Temas Personalizados</h4>
            <p>CSS Variables para cada integrante</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🎧</span>
            <h4>Reproductor Integrado</h4>
            <p>Player global con previews de 30s desde iTunes API</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🌗</span>
            <h4>Temas adaptables</h4>
            <p>Modo claro/oscuro adaptado a cada necesidad</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🤖</span>
            <h4>Chatbot</h4>
            <p>Asistente que responde preguntas sobre el proyecto</p>
          </div>
        </div>
        
      </section>

      {/* Proyecto */}
      <section className="section-project">
        <h2 className="titulo-principal">Sobre el Proyecto</h2>
        <div className="project-panel">
          <p>
            <strong>TechVerse</strong> es la evolución del TP1 a una arquitectura React moderna. 
            Implementamos una <strong>Single Page Application</strong> con componentes reutilizables, 
            React Router para navegación fluida, y consumo de datos dinámicos desde JSON local y 
            APIs públicas.
          </p>
          <p>
            Cada integrante mantiene su portal individual con diseño único, demostrando la flexibilidad 
            de React para gestionar múltiples estilos dentro de un mismo proyecto. El sidebar responsive 
            se adapta a todos los dispositivos con menú hamburguesa en móviles.
          </p>
          <div className="cta-buttons">
            <Link to="/bitacora" className="btn btn-secondary">
              📋 Ver Bitácora
            </Link>
            <Link to="/diagramas" className="btn btn-secondary">
              📊 Ver Diagramas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
// ===== DIAGRAMAS =====
// Diagramas.jsx - Con HeroSection
import HeroSection from "../components/ui/HeroSection";
import './Diagramas.css';

export default function Diagramas() {
  return (
    <div className="diagramas">
      <HeroSection
  title="📊 Diagramas del Proyecto"
  subtitle="Visualización de la arquitectura y organización del TP2 React SPA"
  accentColor="#4ade80"
/>

      <section className="diagramas-visuales">
        <h2>📊 Diagramas Visuales</h2>

        <div className="diagrama-card">
          <h3>🌳 Árbol de Renderizado (Jerarquía de Componentes)</h3>
          <img 
            src="/img/arbol-componentes.png" 
            alt="Árbol de componentes React" 
            className="diagrama-img"
          />
          <p>
            El siguiente diagrama representa la jerarquía de componentes renderizados de la aplicación desarrollada en <code>React</code>.
            Desde el componente raíz <code>App.jsx</code>, se renderizan el <code>AudioProvider</code> 
            (que provee el contexto global de audio mediante <code>AudioContext</code>) 
            y el <code>BrowserRouter</code>, encargado de la navegación interna de la SPA.
          </p>

          <p>
            Dentro del router se encuentran las rutas principales 
            (<code>Home</code>, <code>Bitácora</code>, <code>Integrantes</code>, 
            <code>Diagramas</code>, <code>Películas</code>, <code>Música</code> y <code>Portales</code>), 
            cada una compuesta por subcomponentes reutilizables como 
            <code>HeroSection</code>, <code>CardGrid</code>, <code>PeliculaCard</code> 
            y <code>MusicaCard</code>.
          </p>

          <p>
            También se incluyen líneas punteadas que indican las dependencias de estilo y contexto, 
            como los archivos <code>CSS</code> globales y el <code>AudioContext</code>.
          </p>

          <p>
            Este árbol ilustra cómo <code>React</code> compone la interfaz de usuario como una estructura jerárquica de componentes,
            optimizando la modularidad, la reutilización y el mantenimiento del proyecto.
          </p>
        </div>

        <div className="diagrama-card">
          <h3>📁 Estructura de Carpetas</h3>
          <img 
            src="/img/estructura-carpetas.png" 
            alt="Estructura de carpetas del proyecto" 
            className="diagrama-img"
          />
         <p>
          El diagrama muestra la <strong>organización real de archivos y carpetas</strong> del proyecto <code>TechVerse</code>.
          En la raíz se incluyen la configuración de build y deploy (<code>vite.config.js</code>, <code>vercel.json</code>),
          mientras que la aplicación se encuentra en <code>src/</code>.
        </p>
        <p>
          Dentro de <code>src/</code>, los <code>components/</code> se dividen en <code>cards/</code> (tarjetas reutilizables)
          y <code>ui/</code> (interfaz y elementos comunes como <code>Sidebar</code>, <code>TimelineItem</code> y
          <code>AudioPlayer</code>). Las <code>pages/</code> agrupan las vistas principales de la SPA
          (con la subcarpeta <code>portales/</code> para las páginas individuales del equipo).
          La carpeta <code>data/</code> contiene el JSON local de películas y <code>styles/</code>
          centraliza las hojas de estilo globales y modulares.
        </p>
        <p>
          Esta estructura por responsabilidades favorece la <strong>escalabilidad</strong>, el
          <strong>mantenimiento</strong> y la <strong>reutilización</strong>, dejando claro dónde vive cada parte
          del proyecto: lógica de UI, vistas, datos y estilos.
        </p>
        </div>
      </section>
    </div>
  );
}

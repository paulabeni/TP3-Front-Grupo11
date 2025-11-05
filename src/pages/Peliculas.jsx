// Peliculas.jsx - Con HeroSection y búsqueda/filtro agregados
import { useState } from "react";
import HeroSection from "../components/ui/HeroSection";
import PeliculaCard from "../components/cards/PeliculaCard";
import data from "../data/peliculas.json";
import "../styles/util.css";
import "../styles/MediaPages.css";

export default function Peliculas() {
  // Normaliza los datos del JSON
  const peliculas = (data.peliculas || []).map((p) => ({
    ...p,
    year: p.year ?? p.año, // Usa 'año' si no existe 'year'
  }));

  // ===== Estados para búsqueda y filtro =====
  const [busqueda, setBusqueda] = useState("");
  const [genero, setGenero] = useState("Todos");

  // ===== Generos únicos para el select =====
  const generos = ["Todos", ...new Set(peliculas.map((p) => p.genero))];

  // ===== Filtrado dinámico =====
  const peliculasFiltradas = peliculas.filter((p) => {
    const coincideTitulo =
      p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.director.toLowerCase().includes(busqueda.toLowerCase());
    const coincideGenero = genero === "Todos" || p.genero === genero;
    return coincideTitulo && coincideGenero;
  });

  return (
    <div className="media-page fade-in">
      <HeroSection
        title="🎬 Catálogo de Películas"
        subtitle="Datos obtenidos desde un archivo local JSON"
        accentColor="#00d4ff"
      />

      <section className="media-listado card">
        <h2>Listado dinámico</h2>
        <p className="api-indicator">
          Mostrando {peliculasFiltradas.length} películas
        </p>

        {/* ===== Buscador y filtro ===== */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar por título o director..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="search-input"
          />

          <select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            className="search-input"
            style={{ maxWidth: "150px" }}
          >
            {generos.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        {/* ===== Listado de películas ===== */}
        <div className="grid-media">
          {peliculasFiltradas.map((peli) => (
            <PeliculaCard
              key={peli.id || peli.titulo}
              poster={peli.poster}
              titulo={peli.titulo}
              year={peli.year}
              genero={peli.genero}
              director={peli.director}
              duracion={peli.duracion}
              rating={peli.rating}
              url={peli.url}
            />
          ))}
        </div>

        {/* Si no hay resultados */}
        {peliculasFiltradas.length === 0 && (
          <p style={{ textAlign: "center", marginTop: "1rem" }}>
            No se encontraron películas que coincidan.
          </p>
        )}
      </section>
    </div>
  );
}




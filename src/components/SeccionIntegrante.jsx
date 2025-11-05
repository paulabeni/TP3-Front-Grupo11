//  SeccionIntegrante.jsx
// Muestra las secciones interactivas: Habilidades, Películas y Música.
// Usa los subcomponentes PeliculaCard y MusicaCard para mayor limpieza.

import { useState } from 'react';
import './SeccionIntegrante.css';
import PeliculaCard from './cards/PeliculaCard';
import MusicaCard from './cards/MusicaCard';

export default function SeccionIntegrante({ habilidades = [], peliculas = [], musica = [] }) {
  const [seccionActiva, setSeccionActiva] = useState('habilidades'); // inicia abierta

  const toggleSeccion = (nombre) =>
    setSeccionActiva(seccionActiva === nombre ? null : nombre);

  return (
    <div className="secciones-integrante fade-in">

      {/* 🔘 Botones de navegación */}
      <div className="botones center">
        {['habilidades', 'peliculas', 'musica'].map((tipo) => (
          <button
            key={tipo}
            className={`btn-outline ${seccionActiva === tipo ? 'active' : ''}`}
            onClick={() => toggleSeccion(tipo)}
          >
            {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
          </button>
        ))}
      </div>

      {/* 💡 Habilidades */}
      {seccionActiva === 'habilidades' && (
        <div className="seccion card fade-in">
          <h2>💡 Habilidades</h2>
          <ul className="habilidades-lista">
            {habilidades.map((habilidad, i) => (
              <li key={i}>{habilidad}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 🎬 Películas */}
      {seccionActiva === 'peliculas' && (
        <div className="seccion fade-in">
          <h2>🎬 Películas Favoritas</h2>
          <div className="grid-auto">
            {peliculas.map((peli) => (
              <PeliculaCard
                key={peli.id || peli.titulo}
                poster={peli.poster}
                titulo={peli.titulo}
                year={peli.year ?? peli.año}
                director={peli.director}
                url={peli.url}
              />
            ))}
          </div>
        </div>
      )}

      {/* 🎵 Música */}
      {seccionActiva === 'musica' && (
        <div className="seccion fade-in">
          <h2>🎵 Música Favorita</h2>
          <div className="grid-auto grid-1-md">
            {musica.map((track) => (
              <MusicaCard
                key={track.id || track.artista}
                artista={track.artista}
                imagen={track.imagen}
                url={track.url}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


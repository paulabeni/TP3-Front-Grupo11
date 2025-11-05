// src/pages/MusicaPlayer.jsx
import { useState, useEffect } from "react";
import HeroSection from "../components/ui/HeroSection";
import { MusicaCardWithPlayer } from "../components/AudioPlayer";
import "../styles/util.css";
import "../styles/MediaPages.css";

export default function MusicaPlayer() {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('coldplay');

  const fetchiTunes = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=12`
      );
      const data = await response.json();
      setCanciones(data.results || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchiTunes(searchTerm);
  }, []);

  if (loading) return <div className="loading">🎵 Cargando...</div>;

  return (
    <div className="media-page fade-in">
      <HeroSection
        title="🎵 Reproductor de Música"
        subtitle="Busca y reproduce previews de 30 segundos"
        accentColor="#EC4899"
      />

      <section className="media-listado card">
        {/* Buscador reutiliza estilos de MediaPages.css */}
        <div className="search-container">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchiTunes(searchTerm)}
            placeholder="Buscar artista o canción..."
            className="search-input"
          />
          <button onClick={() => fetchiTunes(searchTerm)} className="btn-outline">
            🔍 Buscar
          </button>
        </div>

        <h2>Resultados</h2>
        <p className="api-indicator">{canciones.length} canciones • iTunes API</p>

        <div className="grid-media">
          {canciones.map(song => (
            <MusicaCardWithPlayer key={song.trackId} song={song} />
          ))}
        </div>
      </section>
    </div>
  );
}
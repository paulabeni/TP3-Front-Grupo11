// ===== MÚSICA =====
// Musica.jsx - Con HeroSection
import { useState, useEffect } from "react";
import HeroSection from "../components/ui/HeroSection";
import "../styles/util.css";
import "../styles/MediaPages.css";

export default function Musica() {
  const [canciones, setCanciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🆕 Estados para paginación
  const [page, setPage] = useState(0);
  const limit = 10;

  // 🆕 Cargar canciones con paginación
  const fetchDeezer = async (index) => {
    try {
      setLoading(true);
      setError(null);

      // ✅ Llamamos a nuestra API local (proxy), no directamente a Deezer
      const response = await fetch(`/api/deezer?index=${index}&limit=${limit}`);

      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.data && Array.isArray(data.data)) {
        setCanciones(data.data);
      } else {
        setError("No se encontraron canciones 😞");
      }
    } catch (err) {
      console.error("❌ Error al cargar datos de Deezer:", err);
      setError("Error al cargar datos de Deezer. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  // 🆕 Llamar a la API cuando cambia la página
  useEffect(() => {
    fetchDeezer(page * limit);
  }, [page]);

  if (loading)
    return (
      <div className="loading">
        <p>🎵 Cargando canciones del Top Global Deezer...</p>
      </div>
    );

  if (error)
    return (
      <div className="error">
        <p>{error}</p>
      </div>
    );

  return (
    <div className="media-page fade-in">
      <HeroSection
        title="🎶 Top Global — Deezer"
        subtitle="Canciones más escuchadas del momento 🌍"
        accentColor="#ff69b4"
      />

      <section className="media-listado card">
        <h2>Ranking mundial</h2>
        <p className="api-indicator">
          Mostrando {canciones.length} canciones (Página {page + 1})
        </p>

        <div className="grid-media">
          {canciones.map((song) => (
            <div key={song.id} className="card-media fade-in">
              <img
                src={song.album?.cover_medium || "/img/placeholder-artist.webp"}
                alt={song.title}
                loading="lazy"
                onError={(e) =>
                  (e.currentTarget.src = "/img/placeholder-artist.webp")
                }
              />
              <div className="media-info">
                <h3>{song.title}</h3>
                <p>
                  <strong>Artista:</strong> {song.artist?.name || "Desconocido"}
                </p>
                <p>
                  <strong>Álbum:</strong> {song.album?.title || "N/A"}
                </p>
                <a
                  href={song.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-deezer"
                >
                  Escuchar en Deezer
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🆕 Controles de paginación */}
        <div className="pagination" style={{ marginTop: "2rem", textAlign: "center" }}>
          <button
            className="btn"
            onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
            disabled={page === 0}
          >
            ⬅️ Anterior
          </button>
          <button
            className="btn"
            onClick={() => setPage((prev) => prev + 1)}
          >
            Siguiente ➡️
          </button>
        </div>

        {/* 💬 Créditos */}
        <p
          style={{
            marginTop: "2rem",
            textAlign: "center",
            fontSize: "0.9rem",
            color: "#bbb",
          }}
        >
          🎧 Datos obtenidos en tiempo real desde la{" "}
          <a
            href="https://developers.deezer.com/api"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#A238FF", textDecoration: "none" }}
          >
            API pública de Deezer
          </a>.
        </p>
      </section>
    </div>
  );
}

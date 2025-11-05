// MusicaCard.jsx - Tarjeta simple para artistas Deezer (usada en portales individuales)
export default function MusicaCard({ artista, url, imagen }) {
  return (
    <article className="card-media fade-in">
      <img
        src={imagen || "/img/placeholder-artist.webp"}
        alt={artista}
        loading="lazy"
        onError={(e) => (e.currentTarget.src = "/img/placeholder-artist.webp")}
      />

      <div className="media-info">
        <h3>{artista}</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-deezer"
        >
          Escuchar en Deezer
        </a>
      </div>
    </article>
  );
}


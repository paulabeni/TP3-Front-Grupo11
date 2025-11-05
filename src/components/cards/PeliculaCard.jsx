// PeliculaCard.jsx
// Props esperadas: { poster, titulo, year, director }
export default function PeliculaCard({
  poster,
  titulo,
  year,
  genero,
  director,
  duracion,
  rating,
  url
}) {
  return (
    <div className="card-media fade-in">
      <img
        loading="lazy"
        src={poster || '/img/placeholder-movie.webp'}
        alt={titulo}
        onError={(e) => (e.currentTarget.src = '/img/placeholder-movie.webp')}
      />

      <div className="media-info">
        <h3>{titulo}</h3>

        {year && <p><strong>Año:</strong> {year}</p>}
        {genero && <p><strong>Género:</strong> {genero}</p>}
        {director && <p><strong>Director:</strong> {director}</p>}
        {duracion && <p><strong>Duración:</strong> {duracion}</p>}
        {rating && <p><strong>Rating IMDb:</strong> {rating}</p>}

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-imdb"
          >
            Ver en IMDb
          </a>
        )}
      </div>
    </div>
  );
}


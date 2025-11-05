// PortalBase.jsx - Componente base reutilizable para todos los portales
import { useState, useEffect } from "react";
import SeccionIntegrante from "../components/SeccionIntegrante"; 
import { getDeezerArtists } from "../utils/getDeezerArtists";    
import data from "../data/peliculas.json";                     
import "../styles/IntegrantesBase.css";  
import SocialIcons from "../components/SocialIcons";



export default function PortalBase({
  nombre,
  rol,
  ubicacion,
  edad,
  avatar,
  avatarHover, // opcional para efecto hover (Micaela)
  habilidades,
  peliculasTitulos,
  artistasDeezer,
  themeClass, // 'micaela-theme', 'paula-theme', 'maria-theme'
  themeColors, // { primary, secondary }
}) {
  const [currentAvatar, setCurrentAvatar] = useState(avatar);
  const [peliculas, setPeliculas] = useState([]);
  const [musica, setMusica] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🎬 Películas favoritas desde JSON global
        const peliculasFavoritas = data.peliculas.filter((p) =>
          peliculasTitulos.some(
            (titulo) => p.titulo.toLowerCase() === titulo.toLowerCase()
          )
        );

        // 🎧 Artistas desde Deezer
        const musicaFavorita = await getDeezerArtists(artistasDeezer);

        setPeliculas(peliculasFavoritas);
        setMusica(musicaFavorita);
      } catch (error) {
        console.error("Error cargando datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [peliculasTitulos, artistasDeezer]);

  return (
    <div
      className={`integrante-page ${themeClass} fade-in`}
      style={{
        "--theme-primary": themeColors.primary,
        "--theme-secondary": themeColors.secondary,
      }}
    >
      <section className="tarjeta-integrante">
        {/* Avatar con efecto hover opcional */}
        <div
          className="avatar-container"
          onMouseEnter={() => avatarHover && setCurrentAvatar(avatarHover)}
          onMouseLeave={() => avatarHover && setCurrentAvatar(avatar)}
        >
          <img
            src={currentAvatar}
            alt={`Avatar de ${nombre}`}
            className="avatar-img"
            onError={(e) => (e.currentTarget.src = avatar)}
          />

        </div>

        <div className="contenido-integrante">
          <h1>{nombre}</h1>
          <p className="rol">{rol}</p>
          <SocialIcons />


          <div className="info-basica">
            <p>
              <strong>Ubicación:</strong> {ubicacion}
            </p>
            <p>
              <strong>Edad:</strong> {edad} años
            </p>
          </div>

          {loading ? (
            <div className="loading-section">⏳ Cargando información...</div>
          ) : (
            <SeccionIntegrante
              habilidades={habilidades}
              peliculas={peliculas}
              musica={musica}
            />
          )}
        </div>
      </section>
    </div>
  );
}
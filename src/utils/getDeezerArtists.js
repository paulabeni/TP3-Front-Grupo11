// getDeezerArtists.js - Obtiene artistas desde la API pública de Deezer (usa proxy si estás en local)

export async function getDeezerArtists(nombres = []) {
  const proxy =
    window.location.hostname === "localhost"
      ? "https://cors-anywhere.herokuapp.com/"
      : "";

  try {
    const artistas = await Promise.all(
      nombres.map(async (nombre) => {
        const res = await fetch(`/api/deezer?artist=${encodeURIComponent(nombre)}`);
        const data = await res.json();
        const artista = data.data?.[0]; // primer resultado relevante

        return artista
          ? {
              id: artista.id,
              artista: artista.name,
              url: artista.link,
              imagen: artista.picture_medium,
            }
          : null;
      })
    );

    return artistas.filter(Boolean);
  } catch (error) {
    console.error("❌ Error obteniendo artistas Deezer:", error);
    return [];
  }
}

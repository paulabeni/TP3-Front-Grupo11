// api/deezer.js
export default async function handler(req, res) {
  try {
    const { artist, index = 0, limit = 10 } = req.query;

    // 🎵 Si se pide un artista específico, buscarlo
    const url = artist
      ? `https://api.deezer.com/search/artist?q=${encodeURIComponent(artist)}`
      // 🎧 Si no, devolver el chart con paginación
      : `https://api.deezer.com/chart/0/tracks?index=${index}&limit=${limit}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error en la solicitud a la API de Deezer");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener datos de Deezer:", error);
    res.status(500).json({ error: "Error al obtener los datos de Deezer" });
  }
}

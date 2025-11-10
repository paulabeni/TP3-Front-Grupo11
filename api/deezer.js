// api/deezer.js
export default async function handler(req, res) {
  try {
    const { index = 0, limit = 10, artist } = req.query;

    // Si hay parámetro artist, buscar artistas. Si no, obtener chart
    const url = artist
      ? `https://api.deezer.com/search/artist?q=${encodeURIComponent(artist)}&limit=1`
      : `https://api.deezer.com/chart/0/tracks?index=${index}&limit=${limit}`;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error en la solicitud a la API de Deezer");
    }

    const data = await response.json();

    // Devolvemos los datos al frontend
    res.status(200).json(data);

  } catch (error) {
    console.error("Error al obtener datos de Deezer:", error);
    res.status(500).json({ error: "Error al obtener los datos de Deezer" });
  }
}

// /api/deezer.js
export default async function handler(request, response) {
  try {
    const { artist, page = 0, limit = 10 } = request.query; // ← agregamos paginación
    const index = page * limit; 

    // Si se busca un artista, se usa la API de búsqueda
    const url = artist
      ? `https://api.deezer.com/search/artist?q=${encodeURIComponent(artist)}&index=${index}&limit=${limit}`
      // Si no, se usa el top global con paginación
      : `https://api.deezer.com/chart/0/tracks?index=${index}&limit=${limit}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Error en la solicitud a la API de Deezer");

    const data = await res.json();
    response.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener datos de Deezer:", error);
    response.status(500).json({ error: "Error al obtener los datos de Deezer" });
  }
}

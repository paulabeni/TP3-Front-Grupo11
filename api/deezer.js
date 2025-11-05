// api/deezer.js
export default async function handler(request, response) {
  try {
    const { artist } = request.query;
    const url = artist
      ? `https://api.deezer.com/search/artist?q=${encodeURIComponent(artist)}`
      : "https://api.deezer.com/chart/0/tracks";

    const res = await fetch(url);
    if (!res.ok) throw new Error("Error en la solicitud a la API de Deezer");

    const data = await res.json();
    response.status(200).json(data);
  } catch (error) {
    console.error("Error al obtener datos de Deezer:", error);
    response.status(500).json({ error: "Error al obtener los datos de Deezer" });
  }
}

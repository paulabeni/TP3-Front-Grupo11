// api/deezer.js
export default async function handler(req, res) {
  try {
    // Tomamos los parámetros de paginación (por defecto: 0 y 10)
    const { index = 0, limit = 10 } = req.query;

    //  URL hacia la API pública 
    const url = `https://api.deezer.com/chart/0/tracks?index=${index}&limit=${limit}`;

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

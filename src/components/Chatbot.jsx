import { useState } from "react";
import "../components/Chatbot.css";
import Lottie from "lottie-react";
import robotAnimation from "../assets/RobotSaludando.json";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! Soy el asistente del Grupo 11 🏋️‍♀️. Preguntame lo que quieras sobre el trabajo." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    const response = getBotResponse(input.toLowerCase());
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: response }]);
    }, 600);
  };

  const getBotResponse = (msg) => {
    

  if (msg.includes("hola") || msg.includes("buenas"))
    return "¡Hola! 👋 Bienvenido a TechVerse. ¿Querés saber sobre el proyecto, las integrantes o los trabajos prácticos?";

  if (msg.includes("proyecto"))
    return "🌐 El proyecto se llama TechVerse, un espacio interactivo donde cada integrante tiene su propio portal. Representa la evolución del trabajo desde el TP1 hasta el TP3.";

  if (msg.includes("objetivo"))
    return "🎯 El objetivo es mostrar la migración del sitio original a una SPA moderna creada con React, con componentes reutilizables, interacción fluida y diseño adaptable.";

  if (msg.includes("tecnolog"))
    return "💻 Utilizamos React para el frontend, Lottie para las animaciones, y la API de Deezer para integrar música sin necesidad de backend.";

  if (msg.includes("integrante") || msg.includes("equipo"))
    return "👩‍💻 El equipo está formado por Paula, Micaela y María. Cada una tiene su propio portal dentro del multiverso.";

  // ---- Sección de trabajos prácticos ----
  if (msg.includes("tp1"))
    return "📘 El TP1 fue el inicio del proyecto. Se creó una web estática donde cada integrante tenía su perfil y se definió la idea base del Multiverso Digital.";

  if (msg.includes("tp2"))
    return "📗 En el TP2 migramos el sitio a React y lo convertimos en una SPA (Single Page Application) con navegación dinámica y componentes reutilizables.";

  if (msg.includes("tp3"))
    return "📙 En el tp3 se implementaron mejoras modernas como el chatbot interactivo 🤖, filtrado y buscador de películas, iconos animados en la sección de integrantes, tema claro/oscuro para mayor accesibilidad, y una interfaz más intuitiva.";

  if (msg.includes("deezer") || msg.includes("musica"))
    return "🎵 Se integró la API de Deezer para reproducir música en el sitio sin necesidad de un backend propio.";

  if (msg.includes("adios") || msg.includes("chau"))
    return "¡Hasta luego! 👋 Gracias por visitar el Multiverso Digital.";

  return "🤔 No entendí del todo. Podés preguntarme sobre el proyecto, las integrantes o los TP1, TP2 y TP3.";
};


  return (
     <div className="chatbot-container">
      {/* Botón flotante */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        <Lottie animationData={robotAnimation} loop={true} style={{ width: 120, height: 120 }} />
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-messages">
            {messages.map((m, i) => (
              <div key={i} className={`message ${m.from}`}>{m.text}</div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Escribí tu pregunta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}

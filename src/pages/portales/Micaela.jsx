// Micaela.jsx - Portal individual simplificado
import PortalBase from "../../components/PortalBase";

export default function Micaela() {
  return (
    <PortalBase
      nombre="Micaela"
      rol="Frontend Developer & Design Enthusiast"
      ubicacion="Buenos Aires, Argentina"
      edad={31}
      avatar="/img/avatar-mica1.webp"
      avatarHover="/img/avatar-mica2.webp" // ✨ Efecto hover único de Micaela
      habilidades={[
        "Impresión 3D",
        "Diseño Creativo",
        "Programación",
        "Hacer café ☕",
      ]}
      peliculasTitulos={["Twister", "Volver al Futuro", "Mulan"]}
      artistasDeezer={["BTS", "Miranda!", "5 Seconds of Summer"]}
      themeClass="micaela-theme"
      themeColors={{
        primary: "#F8B55F",
        secondary: "#C95792",
      }}
    />
  );
}

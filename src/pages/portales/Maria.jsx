// Maria.jsx - Portal individual simplificado
import PortalBase from "../../components/PortalBase";

export default function Maria() {
  return (
    <PortalBase
      nombre="María"
      rol="Creative Designer & Project Manager"
      ubicacion="Córdoba, Argentina"
      edad={44}
      avatar="/img/maria-pixel-1.png"
      habilidades={[
        "Organización",
        "Trabajo en equipo",
        "Resolución de problemas",
        "Comunicación",
      ]}
      peliculasTitulos={[
        "El Viaje de Chihiro",
        "Mi Vecino Totoro",
        "El Castillo Ambulante",
      ]}
      artistasDeezer={["Hoobastank", "Audioslave", "Keane"]}
      themeClass="maria-theme"
      themeColors={{
        primary: "#F8B55F",
        secondary: "#955ea0",
      }}
    />
  );
}
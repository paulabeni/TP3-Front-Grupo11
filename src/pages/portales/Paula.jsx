// Paula.jsx - Portal individual simplificado
import PortalBase from "../../components/PortalBase";

export default function Paula() {
  return (
    <PortalBase
      nombre="Paula"
      rol="Full Stack Developer"
      ubicacion="Berazategui, Buenos Aires"
      edad={32}
      avatar="/img/card-Paula2.webp"
      habilidades={["HTML", "CSS", "PHP", "JavaScript"]}
      peliculasTitulos={[
        "Fragmentado",
        "Harry Potter y la Piedra Filosofal",
        "Interstellar",
        "Inquebrantable",
      ]}
      artistasDeezer={[
        "Soda Stereo",
        "No Te Va Gustar",
        "Carlos Rivera",
        "Airbag",
      ]}
      themeClass="paula-theme"
      themeColors={{
        primary: "rgb(58, 213, 252)",
        secondary: "#4118b1",
      }}
    />
  );
}
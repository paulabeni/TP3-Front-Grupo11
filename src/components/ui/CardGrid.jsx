// CardGrid.jsx - Componente de cuadrícula de tarjetas para miembros o proyectos
import { Link } from "react-router-dom";
import "./ui.css";

export default function CardGrid({ items, type = "member" }) {
  return (
    <div className="card-grid">
      {items.map((item, i) => (
        <Link key={i} to={item.link} className={`card-item ${type}`}>
          <div className="card-image">
            <img src={item.image} alt={item.name} />
          </div>
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
  );
}


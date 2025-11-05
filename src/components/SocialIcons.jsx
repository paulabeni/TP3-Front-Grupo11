import { FaLinkedin, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import "./SocialIcons.css";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon" />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="icon" />
      </a>
    </div>
  );
}

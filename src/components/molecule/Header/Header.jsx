import { Link } from "react-router-dom";
import "./index.scss";
import Planet from "/planeta-terra.png";

export default function Header() {
  return (
    <>
      <header className="containerHeaderFirst">
        <nav className="containerHeaderFirst__box">
          <img
            src={Planet}
            alt="Logotipo Planeta"
            aria-label="Logotipo Planeta"
          />
          <Link to="/team">TEAM</Link>
        </nav>
      </header>
    </>
  );
}

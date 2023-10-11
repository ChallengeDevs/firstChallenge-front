import { Link } from "react-router-dom";
import "./index.scss";
import Planet from "/planeta-terra.png";

export default function HeaderTeam() {
  return (
    <>
      <header className="containerHeader">
        <nav className="containerHeader__box">
          <img
            src={Planet}
            alt="Logotipo Planeta"
            aria-label="Logotipo Planeta"
          />
          <Link to="/">BACK</Link>
        </nav>
      </header>
    </>
  );
}

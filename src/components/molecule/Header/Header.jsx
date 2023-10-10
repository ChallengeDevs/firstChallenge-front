import "./index.scss";
import Planet from "/planeta-terra.png";

export default function Header() {
  return (
    <>
      <header className="containerHeader">
        <nav className="containerHeader__box">
          <img
            src={Planet}
            alt="Logotipo Planeta"
            aria-label="Logotipo Planeta"
          />
          <button>TEAM</button>
        </nav>
      </header>
    </>
  );
}

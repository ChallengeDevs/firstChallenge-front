import "./index.scss";

export default function SectionTeam() {
  return (
    <>
      <section className="teamContainer">
        <h1 className="teamContainer__title">Team</h1>
        <main className="teamContainer__box">
          <div className="teamContainer__box--first">
            <img
              className="icon"
              src="/maclean.jpeg"
              alt="Lucas Maclean"
              aria-label="Lucas Maclean"
            />
            <h4>Lucas Maclean</h4>
            <p>
              Desenvolvedor Fullstack altamente qualificado com experiência em
              MERN. Possuo uma forte compreensão de Tailwind, SCSS, Bootstrap,
              além de diversas outras ferramentas. Minha paixão por UX, UI, bem
              como meu interesse em design, performance das aplicações e
              responsividade, me permitem entregar soluções excepcionais de
              desenvolvimento de front-end.
            </p>
            <div>
              <a
                href="https://github.com/osmaclean/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/github.png" alt="GitHub" aria-label="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/osmaclean"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/sinal-do-linkedin.png"
                  alt="LinkedIn"
                  aria-label="LinkedIn"
                />
              </a>
            </div>
          </div>
          <div className="teamContainer__box--second">
            <img
              className="icon"
              src="/caio.jpg"
              alt="Caio Rodrigures"
              aria-label="Caio Rodrigures"
            />
            <h4>Caio Rodrigures</h4>
            <p>
              Desenvolvedor iniciante com conhecimentos básico em Front-End,
              buscando aprimorar minhas habilidades cada vez mais. Buscando
              melhorar minha performance em tecnologia, e fazer grandes projetos
              de carreira para o meu processo, e assim conseguir ser conhecido
              na área da programação para fortificar cada vez mais os meus
              conhecimentos.
            </p>
            <div>
              <a
                href="https://github.com/Caio-DFS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/github.png" alt="GitHub" aria-label="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/caio-guilherme-rodrigues-b9a051231"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/sinal-do-linkedin.png"
                  alt="LinkedIn"
                  aria-label="LinkedIn"
                />
              </a>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

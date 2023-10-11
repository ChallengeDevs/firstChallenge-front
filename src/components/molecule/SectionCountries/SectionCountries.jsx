import CardCountries from "../../atom/CardCountries/CardCountries";
import "./index.scss";

export default function SectionCountries() {
  return (
    <>
      <section className="sectionContainer">
        <h1 className="sectionContainer__title">Countries</h1>
        <main className="sectionContainer__box">
          <CardCountries />
        </main>
      </section>
    </>
  );
}

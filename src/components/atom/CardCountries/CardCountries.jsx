import "./index.scss";

export default function CardCountries() {
  return (
    <div className="boxCard">
      <div className="boxCard__img">IMAGE</div>
      <div className="boxCard__boxing">
        <h2>Name</h2>
        <h3>Continent</h3>
        <h3>Capital</h3>
        <span>Population</span>
      </div>
    </div>
  );
}

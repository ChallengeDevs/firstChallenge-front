import "./index.scss";
import React, { useEffect, useState } from "react";
import Atropos from "atropos/react";
import axios from "axios";

export default function CardCountries() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://first-challenge-back.vercel.app/get-all"
        );
        if (response.status === 200) {
          const resAPI = response.data.response;
          console.log(resAPI);
          setCountriesData(resAPI);
        }
      } catch (error) {
        console.error("Error in request: ", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {countriesData.map((country, index) => (
        <Atropos key={index} className="my-atropos">
          <div className="boxCard">
            <img
              className="boxCard__img"
              src={country.flags.png}
              alt={`Flag of ${country.name}`}
            />

            <div className="boxCard__boxing">
              <h2>{country.name}</h2>
              <h3>{country.continents}</h3>
              <h3>
                <p>Capital: </p>
                {country.capital}
              </h3>
              <span>
                {country.population}
                <img
                  src="/pessoas.png"
                  alt="population"
                  aria-label="population"
                />
              </span>
            </div>
          </div>
        </Atropos>
      ))}
    </>
  );
}

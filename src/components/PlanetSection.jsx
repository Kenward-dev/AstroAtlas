import { useState, useEffect } from "react";
import "./PlanetSection.css";
import PlanetCard from "./PlanetCard";
import { fetchPlanets } from "../services/planetService";

import mercury from "../assets/mercury.jpeg";
import venus from "../assets/venus.jpeg";
import earth from "../assets/earth.jpeg";
import mars from "../assets/mars.jpeg";
import jupiter from "../assets/jupiter.png";
import saturn from "../assets/saturn.jpeg";
import uranus from "../assets/uranus.jpg";
import neptune from "../assets/neptune.jpeg";
import pluto from "../assets/pluto.jpg";

const planetImages = {
  Mercury: mercury,
  Venus: venus,
  Earth: earth,
  Mars: mars,
  Jupiter: jupiter,
  Saturn: saturn,
  Uranus: uranus,
  Neptune: neptune,
  Pluto: pluto,
};

export default function PlanetSection() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlanets()
      .then((data) => {
        setPlanets(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="planet-section__status">Loading planets...</p>;
  if (error)
    return (
      <p className="planet-section__status">Something went wrong: {error}</p>
    );

  return (
    <section className="planet-section" id="planets">
      <div className="planet-section__container">
        <div className="planet-section__header">
          <h2 className="planet-section__title">
            Visualizing the Differences Between Planets
          </h2>
          <p className="planet-section__subtitle">
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how vastly different terrestrial
            planets are from gas giants and ice giants.
          </p>
        </div>
        <div className="planet-section__grid">
          {planets.map((planet) => (
            <PlanetCard
              key={planet.planet}
              name={planet.planet}
              distance={`${planet.distanceFromSun} million km`}
              image={planetImages[planet.planet]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

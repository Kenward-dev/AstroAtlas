import { useState, useEffect } from "react";
import { fetchPlanets } from "../services/planetService";
import "./PlanetTable.css";

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

const planetStats = [
  {
    classification: "Terrestrial",
    planets: [
      { name: "Mercury", mass: "0.330", diameter: "4,879", density: "5427", gravity: "3.7" },
      { name: "Venus", mass: "4.87", diameter: "12,104", density: "5243", gravity: "8.9" },
      { name: "Earth", mass: "5.97", diameter: "12,756", density: "5514", gravity: "9.8" },
      { name: "Mars", mass: "0.642", diameter: "6,792", density: "3933", gravity: "3.7" },
    ],
  },
  {
    classification: "Jovian",
    planets: [
      { name: "Jupiter", mass: "1898", diameter: "142,984", density: "1326", gravity: "23.1" },
      { name: "Saturn", mass: "568", diameter: "120,536", density: "687", gravity: "9.0" },
      { name: "Uranus", mass: "86.8", diameter: "51,118", density: "1271", gravity: "8.7" },
      { name: "Neptune", mass: "102", diameter: "49,528", density: "1638", gravity: "11.0" },
    ],
  },
  {
    classification: "Dwarf",
    planets: [
      { name: "Pluto", mass: "0.0130", diameter: "2,376", density: "2095", gravity: "0.7" },
    ],
  },
];

export default function PlanetTable() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPlanets()
      .then((data) => setPlanets(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="planet-table__status">Loading planets...</p>;
  if (error) return <p className="planet-table__status">Something went wrong: {error}</p>;

  return (
    <div className="planet-table-container">
      <h2>Planetary Facts Table</h2>
      <table className="planet-table">
        <thead>
          <tr>
            <th>Classification</th>
            <th>Image</th>
            <th>Planet</th>
            <th>Mass (10²⁴ kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m³)</th>
            <th>Gravity (m/s²)</th>
            <th>Distance from Sun (million km)</th>
          </tr>
        </thead>
        <tbody>
          {planetStats.map((group) =>
            group.planets.map((planet, index) => {
              const apiPlanet = planets.find((p) => p.planet === planet.name);
              return (
                <tr key={planet.name}>
                  {index === 0 && (
                    <td rowSpan={group.planets.length} className="classification">
                      {group.classification}
                    </td>
                  )}
                  <td>
                    <img
                      src={planetImages[planet.name]}
                      alt={planet.name}
                      className="planet-table__img"
                    />
                  </td>
                  <td>{planet.name}</td>
                  <td>{planet.mass}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.density}</td>
                  <td>{planet.gravity}</td>
                  <td>{apiPlanet ? apiPlanet.distanceFromSun : "—"}</td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

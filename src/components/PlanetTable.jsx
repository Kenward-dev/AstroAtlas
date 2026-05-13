const planets = [
  {
    classification: "Terrestrial",
    planets: [
      {
        name: "Mercury",
        mass: "0.330",
        diameter: "4,879",
        density: "5427",
        gravity: "3.7",
      },
      {
        name: "Venus",
        mass: "4.87",
        diameter: "12,104",
        density: "5243",
        gravity: "8.9",
      },
      {
        name: "Earth",
        mass: "5.97",
        diameter: "12,756",
        density: "5514",
        gravity: "9.8",
      },
      {
        name: "Mars",
        mass: "0.642",
        diameter: "6,792",
        density: "3933",
        gravity: "3.7",
      },
    ],
  },
  {
    classification: "Jovian",
    planets: [
      {
        name: "Jupiter",
        mass: "1898",
        diameter: "142,984",
        density: "1326",
        gravity: "23.1",
      },
      {
        name: "Saturn",
        mass: "568",
        diameter: "120,536",
        density: "687",
        gravity: "9.0",
      },
      {
        name: "Uranus",
        mass: "86.8",
        diameter: "51,118",
        density: "1271",
        gravity: "8.7",
      },
      {
        name: "Neptune",
        mass: "102",
        diameter: "49,528",
        density: "1638",
        gravity: "11.0",
      },
    ],
  },
  {
    classification: "Dwarf",
    planets: [
      {
        name: "Pluto",
        mass: "0.0130",
        diameter: "2,376",
        density: "2095",
        gravity: "0.7",
      },
    ],
  },
];

function PlanetTable() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Planetary Facts Table</h2>
      <table
        border="1"
        cellPadding="8"
        cellSpacing="0"
        style={{ width: "100%", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Classification</th>
            <th>Planet</th>
            <th>Mass (10²⁴ kg)</th>
            <th>Diameter (km)</th>
            <th>Density (kg/m³)</th>
            <th>Gravity (m/s²)</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((group) =>
            group.planets.map((planet, index) => (
              <tr key={planet.name}>
                {index === 0 && (
                  <td
                    rowSpan={group.planets.length}
                    style={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {group.classification}
                  </td>
                )}
                <td>{planet.name}</td>
                <td>{planet.mass}</td>
                <td>{planet.diameter}</td>
                <td>{planet.density}</td>
                <td>{planet.gravity}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PlanetTable;

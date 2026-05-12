import "./Planet.css";
import PropTypes from "prop-types";

export default function PlanetCard({ name, distance, image }) {
  return (
    <section className="planetCard">
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
        <p>{distance}</p>
      </figure>
    </section>
  );
}

PlanetCard.propTypes = {
  name: PropTypes.string.isRequired,
  distance: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

import "./Planet.css";
import PropTypes from "prop-types";

export default function PlanetCard({ name, distance, image }) {
  return (
    <figure className="planetCard">
      <img src={image} alt={name} />
      <figcaption>
        <p>{name}</p>
        <p>{distance}</p>
      </figcaption>
    </figure>
  );
}

PlanetCard.propTypes = {
  name: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

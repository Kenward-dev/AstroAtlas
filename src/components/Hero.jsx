import "./Hero.css";

function Hero() {
  function handleExploreClick() {
    document.getElementById("planets").scrollIntoView({ behavior: "smooth" });
  }

  function handleContactClick() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Explore Our Solar System Through Data</h1>
          <p className="hero__subtitle">
            Understand the planets not just by name, but by measurable facts.
            From size and mass to gravity and density, this page breaks down the
            solar system in a clear, data-driven way.
          </p>
          <div className="hero__actions">
            <button
              className="hero__btn hero__btn--primary"
              onClick={handleExploreClick}
            >
              Explore the Data
            </button>
            <button
              className="hero__btn hero__btn--secondary"
              onClick={handleContactClick}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="hero__image">
          <img src="/planet-hero.png" alt="Planet earth from space" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

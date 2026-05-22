import "./VideoSection.css";

export default function VideoSection() {
  return (
    <section className="video-section" id="video">
      <div className="video-section__container">
        <div className="video-section__player">
          <video autoPlay muted loop playsInline>
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="video-section__content">
          <h2 className="video-section__title">
            How Planetary Data Helps Us Understand Space
          </h2>
          <p className="video-section__text">
            Planetary science goes beyond images. Comparing{" "}
            <strong>mass</strong>, <strong>diameter</strong>,{" "}
            <strong>gravity</strong>, and <strong>density</strong>, we gain
            insight into how planets form, behave, and interact within the solar
            system.
          </p>
        </div>
      </div>
    </section>
  );
}

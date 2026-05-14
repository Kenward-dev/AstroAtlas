import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__about">
        <h3 className="footer__title">About the Team</h3>
        <p className="footer__description">
          AstroAtlas is built by a passionate team of developers from TS Academy
          — Victor, Chinemerem, Doxi, Duke, Josh, Kenward, Marie & Tobi.
        </p>
      </div>

      <div className="footer__links">
        <a
          href="https://tsacademyonline.com/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          TS Academy
        </a>
        <a
          href="https://github.com/Kenward-dev/AstroAtlas"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          GitHub Repo
        </a>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} AstroAtlas · TS Academy
      </p>
    </footer>
  );
}

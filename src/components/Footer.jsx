import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__about">
          <h3 className="footer__title">About</h3>

          <p className="footer__description">
            Micah, Victor, Chinemerem, Doxi, Duke, Josh, Kenward, Marie & Tobi
          </p>
        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            ©2026 Design by Amaka & Ifeoma A.
            <br />
            Built by TS Academy Capstone Project Group 19.
            <br />
            All rights reserved
          </p>

          <div className="footer__links">
            <a
              href="https://github.com/Kenward-dev/AstroAtlas"
              target="_blank"
              rel="noreferrer"
              className="footer__icon-link"
              aria-label="GitHub Repository"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="footer__icon"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.66-.22.66-.48 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.59.67.48A10.02 10.02 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>

            <a
              href="https://tsacademyonline.com/"
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              TSAcademy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

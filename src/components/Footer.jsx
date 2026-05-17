import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__about">
        <h3 className="footer__title">About</h3>
        <p className="footer__description">
          Victor, Chinemerem, Doxi, Duke, Josh, Kenward, Marie & Tobi
        </p>
      </div>
      <hr className="footer__divider" />
      <div className="footer__bottom">
        <p className="footer__copyright">
          ©2026 Design by Amaka & Ifeoma A. <br />
          Built by GroupName. All rights reserved
        </p>
        <a
          href="https://tsacademyonline.com/"
          target="_blank"
          rel="noreferrer"
          className="footer__link"
        >
          TSAcademy
        </a>
      </div>
    </footer>
  );
}

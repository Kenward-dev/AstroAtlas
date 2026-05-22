import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img
            src="https://res.cloudinary.com/dzzl28aef/image/upload/v1770490245/planet_jhyuzs.png"
            alt="AstroAtlas logo"
          />
          <span>planet</span>
        </div>
      </div>
    </header>
  );
};

export default Header;

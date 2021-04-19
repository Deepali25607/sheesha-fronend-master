import Brand_logo from "../assets/img/Logo1.svg";

const logo = () => (
  <div className="brand">
    <a href="/" className="brand__link">
      <img
        src={Brand_logo}
        className="brand__logo desktop_logo"
        alt="Sheesha Logo"
        width="100px"
      />
    </a>
  </div>
);

export default logo;

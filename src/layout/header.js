import "../assets/style/scss/layout/_header.scss";
import BrandLogo from "../components/brand-logo.js";
import Navbar from "../components/navbar.js";
import WalletBtn from "../components/wallet-btn.js";
import SocialIcon from "../components/social-icons";
import twitter_icon from "../assets/img/icon/Twitter.svg";
import Medium from "../assets/img/icon/Medium.svg";
import TelegramIcon from "../assets/img/icon/Telegram.svg";
import GitBook from "../assets/img/icon/Gitbook.svg";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__content">
        <BrandLogo />
        {/* <Navbar /> */}
        <SocialIcon Icon1={twitter_icon} Icon2={Medium} Icon3={TelegramIcon} Icon4={GitBook} />
        <WalletBtn />
      </div>
    </div>
  </header>
);

export default Header;

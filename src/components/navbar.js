import "../assets/style/scss/layout/_navigation.scss";
import {
    Link
  } from "react-router-dom";
const Navbar = () => (
    <nav className="nav">
        <ul className="nav__bar">
            <li className="nav__item">
                <a href="#" className="nav__link">About</a>
            </li>
            <li className="nav__item">
                <a href="#" className="nav__link">FAQ</a>
            </li>
            <li className="nav__item">
                <a href="https://link.medium.com/nkO6p55vseb" className="nav__link" target="_blank">Team</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;
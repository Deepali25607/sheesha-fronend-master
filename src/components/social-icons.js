import "../assets/style/scss/modules/_socialIcon.scss";

const social_icon = (props) => (
  <div className="socialIcon">
    <ul className="socialIcon__list">
      <li className="socialIcon__item">
        <a
          href="https://t.me/sheeshafinance"
          className="socialIcon__link"
          target="_blank"
        >
          <img style={{ width: "30px" }} src={props.Icon1} alt="" />
        </a>
      </li>
      <li className="socialIcon__item">
        <a
          href="https://twitter.com/Sheeshafinance"
          target="_blank"
          className="socialIcon__link"
        >
          <img style={{ width: "30px" }} src={props.Icon2} alt="" />
        </a>
      </li>
      <li className="socialIcon__item">
        <a
          href="https://sheeshafinance.medium.com/"
          target="_blank"
          className="socialIcon__link"
        >
          <img style={{ width: "30px" }} src={props.Icon3} alt="" />
        </a>
      </li>
      <li className="socialIcon__item">
        <a
          href="https://app.gitbook.com/@sheeshafinance/s/sheesha-finance/"
          target="_blank"
          className="socialIcon__link"
        >
          <img style={{ width: "30px" }} src={props.Icon4} alt="" />
        </a>
      </li>
    </ul>
  </div>
);

export default social_icon;

const ContectCard = (props) => {
  return (
    <div className="contactCard">
      <div className="contactCard--body">
        <div className="contactCard--icon">
          <img src={props.iconUrl} alt="" />
        </div>
        <h4>{props.titleText}</h4>
        <p>
          <a href={props.linkFirst}>{props.linkFirst}</a>
        </p>
        <p>
          <a href={props.linkSecond}>{props.linkSecond}</a>
        </p>
      </div>
    </div>
  );
};

export default ContectCard;

const ServiceCard = (props) => {
  return (
    <div className="serviceCard">
      <div className="serviceCard--body">
        <img src={props.iconUrl} className="serviceCard--icon" alt="" />
        <h3 className="serviceCard--title">{props.titleText}</h3>
        <p className="serviceCard--text">{props.detailText}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

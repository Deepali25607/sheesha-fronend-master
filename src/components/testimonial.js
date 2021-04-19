import React, { Component } from "react";
import "../assets/style/scss/modules/_testimonial.scss";
import TesUser1 from "../assets/img/user1.jpg";
import TesUser2 from "../assets/img/user2.jpg";

class Testimonial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: [
        {
          id: 1,
          name: "Tiar Lyodr",
          image: TesUser1,
          des: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying graphic or web designs. ",
        },
        {
          id: 2,
          name: "David",
          image: TesUser2,
          des: "Lorem ipsum, or lipsum as it is sometimes known,",
        },
        {
          id: 3,
          name: "Tiar Lyodr",
          image: TesUser1,
          des: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in ",
        },
      ],
      currentT: {},
    };
  }
  componentDidMount() {
    let temp = this.state.testimonial[0];
    this.setState({ currentT: temp });
  }
  makeMeCurrent = (obj) => {
    this.setState({ currentT: obj });
  };
  render() {
    const { currentT } = this.state;
    return (
      <div className="testimonial">
        <div className="testimonial--icon">
          <svg width="60" height="56.262" viewBox="0 0 60 56.262">
            <path
              d="M13.924,25.956v4.749H25.99V56.262H0V30.706H0V25.956C0,16.312,2.822,9.151,8.388,4.671,12.238,1.571,17.111,0,22.873,0V13.69C19.746,13.69,13.924,13.69,13.924,25.956Z"
              fill="#1ec186"
            />
            <path
              d="M22.872,13.69V0C17.111,0,12.238,1.571,8.388,4.671,2.822,9.151,0,16.313,0,25.956V56.262H25.989V30.706H13.923V25.956C13.923,13.69,19.745,13.69,22.872,13.69Z"
              transform="translate(34.011)"
              fill="#1ec186"
            />
          </svg>
        </div>
        <div className="testimonial--content">
          <h3>{currentT.des}</h3>
        </div>
        <div className="testimonial--users">
          {this.state.testimonial.map((tes) => {
            return (
              <a
                className={`users--item ${
                  currentT.id == tes.id ? "active" : ""
                }`}
                onClick={(e) => this.makeMeCurrent(tes)}
                key={tes.id}
              >
                <div className="users--avatar">
                  <img
                    src={`${tes.image}`}
                    className="users--avatar-img"
                    alt=""
                  />
                </div>
              </a>
            );
          })}
        </div>
        <div className="testimonial--usersName">
          <h4>{currentT.name}</h4>
          <p>Head of Product</p>
        </div>
      </div>
    );
  }
}
export default Testimonial;

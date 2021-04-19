import React from 'react';
import AboutBanner from "../assets/img/icon/linkedin.png";

const Card = () => {

    const Data = [
        {
            name: "Name",
            Details: "Designation",
            UserImg: AboutBanner,
        },
        {
            name: "Name",
            Details: "Designation",
            UserImg: AboutBanner,
        },
        {
            name: "Name",
            Details: "Designation",
            UserImg: AboutBanner,
        },
    ]
    const imageStyle = {
        borderRedius:"50%",
        width:"100px",
        height:"100px",
        padding:"10px",
       };

    const Card = Data.map((item, index) =>(
        <div className="card">
            <div className="container">
            <img src={item.UserImg} alt="Linkedin" style={imageStyle} />
                <p key={index}><b>{item.name}</b></p>
                <h4 className="h4">{item.Details}</h4>
                <img src={item.UserImg} alt="Linkedin" />
                 <p style={{ "opacity": "0.2" }}> Linkedin </p> 
            </div>
        </div>

    ))

    return (
        <div>
            {Card}
        </div>
    );
}

export default Card;
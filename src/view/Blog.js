import React from 'react';
import AboutBanner from "../assets/img/about-banner.png";

const Card = () => {

    const Data = [
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
        {
            image: AboutBanner,
            Details: "Orci varius natoque penatibus",
            text: "Excepteur sint occaecat cupidatat non proident sunt iculpa qui officia deserunt",
            Name: "By John Doe",
            date: "13 Feb 2021",
        },
    ]
    const imageStyle = {
        width: "100%",
    };
    const spanStyle = {
        display: "flex",
        justifyContent: "space-between",
        color: "blue",
        opacity: "0.5",
        padding: "20px",
    };

    const Card = Data.map((item, index) => (
        <div className="row">
            <div className="column">
                <div className="card">
                    <div className="container">
                        <img src={item.image} alt="Linkedin" style={imageStyle} />
                        <p key={index}><b>{item.Details}</b></p>
                        <h4 className="h4">{item.text}</h4>
                        <div style={spanStyle}>
                            <span>
                                {item.Name}
                            </span>
                            <span>
                                {item.date}
                            </span>
                        </div>
                    </div>
                </div>
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
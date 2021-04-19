import ethereum_icon from "../assets/img/icon/ethereum-icon.svg"
import {
    Link
  } from "react-router-dom";
const ethereumCard = () => {
    
    return (
        <div className="shapeCard ethereum__card">
        <Link to="/ethereum">
            <div className="shapeCard__shape">
                <svg xmlns="http://www.w3.org/2000/svg" width="357.697" height="409.628" viewBox="0 0 357.697 409.628">
                    <path id="star-shape" d="M1146.163-931.044v8.056a3.377,3.377,0,0,1-.153,1.1,3.575,3.575,0,0,1-.45,1.028l.016.008a3.979,3.979,0,0,1-1.2,1.285,2.9,2.9,0,0,1-.257.177l-171.593,98.7a4.32,4.32,0,0,1-4.08,0l-171.007-98.7a3.47,3.47,0,0,1-1.462-1.462l.024-.016a3.9,3.9,0,0,1-.6-2.121l-.289-198a3.959,3.959,0,0,1,2.04-3.494l171.593-98.7a4.305,4.305,0,0,1,4.072,0l6.113,3.494v.185l164.806,95.126a3.949,3.949,0,0,1,2.032,3.494l.377,189.826Z" transform="translate(-792.067 1226.747)" fill="#fff" stroke="rgba(81,105,205,0.24)" stroke-width="6" />
                </svg>
            </div>
            <div className="shapeCard__content">
                <img src={ethereum_icon} alt="" />
                <h3>ethereum</h3>
            </div>
            </Link>
    </div>
);
   
}


export default ethereumCard;
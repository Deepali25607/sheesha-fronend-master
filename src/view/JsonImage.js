import React from 'react';
import Saeedimage from "../assets/img/icon/Saeedimage.png";
import Benjaminimage from "../assets/img/icon/Benjaminimage.png";
import Dominicimage from "../assets/img/icon/Dominicimage.png";
import Jamesimage from "../assets/img/icon/Jamesimage.png";
import Michaelimage from "../assets/img/icon/Michaelimage.png";
import Bradimage from "../assets/img/icon/Bradimage.png";
import James2image from "../assets/img/icon/James2image.png";
import Irinaimage from "../assets/img/icon/Irinaimage.png";
import Jeanimage from "../assets/img/icon/Jeanimage.png";
import Mohammedimage from "../assets/img/icon/Mohammedimage.png";
import Nabeelimage from "../assets/img/icon/Nabeelimage.png";
import Vineetimage from "../assets/img/icon/Vineetimage.png";
import Waqasimage from "../assets/img/icon/Waqasimage.png";
import Sushmaimage from "../assets/img/icon/Sushmaimage.png";
import Akashimage from "../assets/img/icon/Akashimage.png";
import Shobitimage from "../assets/img/icon/Shobitimage.png";
const JsonImage = () => {
    const Data = [
        {
            name: "Saeed Hareb Al Darmaki",
            image: Saeedimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Benjamin Leff",
            image: Benjaminimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Dominic Longman",
            image: Dominicimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "James Bowater",
            image: Jamesimage,
            designation: "Designation",
            Link: " "
        },

        {
            name: "Michael Terpin",
            image: Michaelimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Brad Yaser",
            image: Bradimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "James Duchenne",
            image: James2image,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Irina Heaver",
            image: Irinaimage,
            designation: "Designation",
            Link: " "
        },

        {
            name: "Jean-Paul Tarud-Kuborn",
            image: Jeanimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Mohammed Mahfoudh",
            image: Mohammedimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Nabeel Qadri",
            image: Nabeelimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Vineet Budki",
            image: Vineetimage,
            designation: "Designation",
            Link: " "
        },

        {
            name: "Waqas Nakhwa",
            image: Waqasimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Sushma Varadaiah",
            image: Sushmaimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Akash Kapadiya",
            image: Akashimage,
            designation: "Designation",
            Link: " "
        },
        {
            name: "Shobit Puri",
            image: Shobitimage,
            designation: "Designation",
            Link: " "
        },
    ]
    return(
        <div>
            <img src={Data[12].image} alt="Image" />
        </div>
    );
    
}
export default JsonImage;
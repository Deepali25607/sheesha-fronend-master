import React, { useState } from "react";
import Header from "../layout/header.js";
import AboutList from "../components/about-list";
import AboutBanner from "../assets/img/about-banner.svg";
import ServiceCard from "../components/service-card";
import ServiceBg from "../assets/img/service-bg1.png";
import ServiceBg2 from "../assets/img/service-bg2.png";
import FastIcon from "../assets/img/Fast.svg";
import EfficientIcon from "../assets/img/Efficient.svg";
import StrategyIcon from "../assets/img/Strategy.svg";
import ReliableIcon from "../assets/img/Reliable.svg";
import AboutBg from "../assets/img/hexagone-pattern.jpg";
import Testimonial from "../components/testimonial";
import ContectCard from "../components/contact-card";
import ContactForm from "../components/contact-form";
import PhoneIcon from "../assets/img/icon/Phone.svg";
import EmailIcon from "../assets/img/icon/email.svg";
import SocialIcon from "../components/social-icons";
import FacebookIcon from "../assets/img/icon/Facebook.svg";
import InstagramIcon from "../assets/img/icon/Instagram.svg";
import TwitterIcon from "../assets/img/icon/TwitterGrey.svg";
import GoogleIcon from "../assets/img/icon/Google.svg";


const AboutUs = () => {
  const bannerStyle = {
    width: "70%",
    textAlign: "center",
    margin: "0 auto",
    display: "flex",
  };
  const aboutUsBg = {
    backgroundImage: `url(${AboutBg})`,
    backgroundSize: "cover",
  };
  const testimonialbg = {
    backgroundColor: "#F4F8FF",
  };
  const FooterBg = {
    backgroundColor: "#37383E",
  };
  return (
    <>
      <Header />
      <section className="container__full aboutHero">
        <div className="grid__row">
          <div className="grid__col6">
            <h1 className="stroke_text">About Us</h1>
            <div className="aboutUsCard">
              <div classNames="aboutUsCard__body">
                <h2 className="aboutUsCard--title">
                  Welcome To Sheesha Finance, Where Only The Finest Defi
                  Solutions Are Provided!
                </h2>
                <AboutList />
              </div>
            </div>
          </div>
          <div className="grid__col6" style={bannerStyle}>
            <img src={AboutBanner} width="100%" />
          </div>
        </div>
      </section>
      <section className="container secviceSection">
        <div className="grid__row">
          <div className="grid__col4">
            <ServiceCard
              titleText="Fast"
              detailText="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying graphic or web designs. "
              iconUrl={FastIcon}
            />
          </div>
          <div className="grid__col4">
            <ServiceCard
              titleText="Efficient"
              detailText="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying graphic or web designs. "
              iconUrl={EfficientIcon}
            />
          </div>
          <div className="grid__col4">
            <img src={ServiceBg} alt="" />
          </div>
          <div className="grid__col4">
            <img src={ServiceBg2} alt="" />
          </div>
          <div className="grid__col4">
            <ServiceCard
              titleText="Strategy"
              detailText="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying graphic or web designs. "
              iconUrl={StrategyIcon}
            />
          </div>
          <div className="grid__col4">
            <ServiceCard
              titleText="Reliable"
              detailText="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying graphic or web designs. "
              iconUrl={ReliableIcon}
            />
          </div>
        </div>
      </section>

      <section className="container__full aboutUs" style={aboutUsBg}>
        <div className="container">
          <div className="grid__row">
           <div className="grid__col6">
              <h2>About US</h2>
              <p>
                We are a team of DeFi experts who believe that many projects in
                the space do not provide full transparency and may not have the
                highest integrity. The team at Sheesha Finance is inspired to
                bring a powerful DeFi platform to the industry, one that is
                trusted, well-funded, and heavily supported by a strong
                community. We are here for the long haul and, as such, will be
                rolling out our implementation in phases to ensure everything is
                correct and safe for our users!‌
              </p>
               <p>
                Participating in Sheesha Finance is a straightforward approach
                known as a liquidity generation event. This event allows anyone
                to participate by contributing ETH and receiving a portion of
                Liquidity Provision (LP) tokens in the process. These tokens can
                be staked and should be for a variety of benefits. There will be
                more about staking in a later article.
              </p>
            </div>
            </div>
            </div>
      </section>

      <section
        className="container__full testimonialSection"
        style={testimonialbg}
      >
        <div className="container">
          <Testimonial />
        </div>
      </section>

      <section className="container contactSection">
        <div className="grid__row">
          <div className="grid__col4">
            <ContectCard
              linkFirst="PH : +00 123 456"
              linkSecond="CS : +00 321 654"
              titleText="Call Us"
              iconUrl={PhoneIcon}
            />
          </div>

          <div className="grid__col8">
            <ContactForm />
          </div>
          <div className="grid__col4">
            <ContectCard
              linkFirst="info@sheeshafin.com"
              linkSecond="contact@sheeshafin.com"
              titleText="Mail"
              iconUrl={EmailIcon}
            />
          </div>
        </div>
      </section>
      <footer className="container__full footer" style={FooterBg}>
        <SocialIcon Icon1={FacebookIcon} Icon2={InstagramIcon} Icon3={TwitterIcon} Icon4={GoogleIcon} />
      </footer>
    </>
  );
};

export default AboutUs;

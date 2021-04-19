import React from "react";
import EthereumCard from "../components/ethereum-card.js";
import BinanceCard from "../components/binance-card.js";
import SheeshaCard from "../components/sheesha-card.js";
import Footer from "../layout/Footer";
import Header from "../layout/header.js";
const Dashboard = () => {
  return (
    <>
      <Header />
      <section className="container__full appBody">
        <div className="grid__row">
          <div className="grid__col4">
            <EthereumCard />
          </div>
          <div className="grid__col4">
            <SheeshaCard />
          </div>
          <div className="grid__col4">
            <BinanceCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;

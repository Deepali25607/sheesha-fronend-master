import React from "react";
import Ethereum from "./view/Ethereum";
import Dashboard from "./view/Dashboard";
import AboutUs from "./view/About";
import Faq from "./view/faq";
//import JsonImage from "./view/JsonImage";
import Blog from "./view/Blog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import binanceCard from "./components/binance-card";

const App = () => {
  return (
    
    <Router>
     
    
      <Switch>
      <Blog />
        <Route exact path="/" component={Dashboard} />
        <Route path="/ethereum" component={Ethereum} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/faq" component={Faq} />
        
      </Switch>
    </Router>
  );
};

export default App;

import "./App.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Services from "./components/Services/Services";
import Pricing from "./components/Pricing/Pricing";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";



function App() {

  return (
    <div className="App">

      <Router>
        <Banner />
        <Switch>
          <Route exact path={["/home", "/"]} component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>




    </div>
  );
}

export default App;

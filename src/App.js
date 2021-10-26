import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Footer from "./Footer/Footer";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
function App() {
  return (
    <div className="App">
       <Router>
          <Navbar />
          <Switch>  
              <Route path="/" exact><Home /></Route>
              <Route path="/work"><Work /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/contact"><Contact /></Route>
          </Switch>
          <Footer />
       </Router>
    </div>
  );
}

export default App;

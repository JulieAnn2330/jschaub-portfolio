import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import React from "react";
import { Portfolio } from './components/Portfolio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation } from './components/Navigation';
import { Contact } from './components/Contact';
import { About } from './components/About';
import { Home } from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
    <Router basename={process.env.PUBLIC_URL}>
      <Navigation />
      <Switch>
  <Route exact path="/" component={Home} />
  <Route  path="/about" component={About} />
  <Route  path="/portfolio" component={Portfolio} />
  <Route  path="/contact" component={Contact} />
 </Switch>
    <Footer />
    </Router>
  </React.Fragment>

  );
}             
export default App;
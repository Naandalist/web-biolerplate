import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <div className='container'>
            <Route exact path='/' component={Home} />
          </div>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Header from './Component/Header/Header';
import "./App.css";
import Home from "./Component/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

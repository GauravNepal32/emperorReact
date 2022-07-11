import React from "react";
import Footer from "./Footer";

import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Major from "./Major";
import Subject from "./subject";
import itImage from "./images/subject/IT.jpg";
import mbaImage from "./images/subject/MBA.jpg";
import useFetch from "./useFetch";
import Lost from "./Lost";

const App = () => {
  const {
    error,
    isPending,
    data: USA,
  } = useFetch("http://localhost:8000/mbaUSA");
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/majorUSA/:id'>
              <Major />
            </Route>
            <Route path='/subjectUSA/:id'>
              <Subject />
            </Route>
            <Route path='*'>
              <Lost />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

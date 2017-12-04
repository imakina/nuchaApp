import React, { Component } from "react";
import {
  HashRouter
} from "react-router-dom";

import Header from '../components/Header'
import Routes from '../components/Routes'

class Main extends Component {

  render() {

    return (
      <HashRouter>
        <div className="pageContent">
          <Header />
          <Routes />
        </div>
      </HashRouter>
    );
  }
}

export default Main;

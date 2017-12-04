import React from 'react';
import {
  Route
} from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";

const Routes = () => (
    <div>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/products" component={Products}/>
    </div>
)

export default Routes
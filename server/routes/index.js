import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const Artwork = require("../Models/Artwork");
const User = require("../Models/User");


ReactDOM.render(<AppRouter />, document.getElementById("root"));
 
module.exports = {
    Artwork,
    User
}
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import $ from "jquery";

// $(document).ready(function () {
//   $(".selectpicker").selectpicker("refresh");
// });

// $(".selectpicker").selectpicker({
//     "title": "Select Options"
// }).selectpicker("render");

// document.getElementsByClassName("selectpicker").selectpicker("refresh");

ReactDOM.render(<App />, document.getElementById("root"));

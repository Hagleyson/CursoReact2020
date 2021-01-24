import React from "react";
import "./styles.css";

function Botton(props) {
  return <button onClick={props.clicked}>{props.title}</button>;
}
export default Botton;

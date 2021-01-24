import React from "react";

function Order(props) {
  return (
    <div>
      <p>
        <strong>Comida: </strong>
        {props.food}
      </p>
      <p>
        <strong>Sabor: </strong>
        {props.flavor}
      </p>
    </div>
  );
}
export default Order;

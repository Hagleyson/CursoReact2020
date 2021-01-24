import React from "react";
import PropTypes from "prop-types";
function Congratulation(props) {
  return (
    <div>
      <h1>Parabéns, {props.name}!</h1>
      <h2> Você chegou na posição {props.standing}!</h2>
    </div>
  );
}
//valor default caso não passe uma das props
Congratulation.defaultProps = { name: "anônimo" };
//para não passar tipo errado ex name tem que ser string
// tem que adicionar o prop-types
Congratulation.propTypes = {
  name: PropTypes.string,
  //isRequired para dizer que é obrigatorio passar
  standing: PropTypes.string.isRequired
};
export default Congratulation;

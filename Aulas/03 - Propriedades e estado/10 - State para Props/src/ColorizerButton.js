import React from "react";
function ColorizerButton({ title, clicked }) {
  return <button onClick={clicked}>{title}</button>;
}
export default ColorizerButton;

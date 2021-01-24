import React from "react";

function ColorRedSquare({ color }) {
  const styles = {
    width: "100px",
    height: "100px",
    backgroundColor: color
  };
  return <div style={styles} />;
}

export default ColorRedSquare;

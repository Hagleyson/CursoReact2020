import React from "react";
function Input(props) {
  switch (props.category) {
    case "input":
      //usando desctructi para passar as props
      //props cega
      return <input {...props} />;
    case "textarea":
      return <textarea {...props} />;
    default:
      return <input {...props} />;
  }
}
export default Input;

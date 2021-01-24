import React, { useCallback } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    }
  });
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formik.getFieldProps);
    },
    [formik]
  );
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        autoComplete="off"
        {...formik.getFieldProps("email")}
      />
      <input
        type="password"
        autoComplete="off"
        {...formik.getFieldProps("password")}
      />
      <input type="submit" value="mostrar" />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

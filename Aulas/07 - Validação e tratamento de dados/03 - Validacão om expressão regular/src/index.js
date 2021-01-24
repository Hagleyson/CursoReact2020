import React, { useCallback } from "react";
import ReactDOM from "react-dom";
//tem que instalar o Formik e yup
import { useFormik } from "formik";
import * as yup from "yup";
function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .required("Preenchimento obrigatório")
        .email("Preencha com um e-mail válido "),
      password: yup
        .string()
        .required("Preecimento Obrigatório ")
        .matches(/(?=[a-zA-Z])/, "A senha deve conter ao menos uma letra")
        .matches(/(?=[0-9])/, "A senha deve conter ao menos um número ")
        .min(8, "A senha deve possuir pelo menos 8 caracteres")
    })
  });
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formik.values);
    },
    [formik]
  );
  /*<span>{formik.errors.email}</span> mostrar os 
  erros em  email
  <span>{formik.errors.password}</span>
  mostrar os   erros no password*/
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          autoComplete="off"
          {...formik.getFieldProps("email")}
        />

        <span>{formik.errors.email}</span>
      </div>
      <br />
      <div>
        <input
          type="password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
        />
        <span>{formik.errors.password}</span>
      </div>
      <br />
      <input type="submit" value="mostrar" />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

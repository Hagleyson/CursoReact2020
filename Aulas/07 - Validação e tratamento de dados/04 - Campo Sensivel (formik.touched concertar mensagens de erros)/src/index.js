import React, { useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
// OLHAR formik.touched PRINCIPAL DESSA AULA
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
  //onBlur quando sair do input
  useEffect(() => {
    console.log(formik.touched);
  }, [formik.touched]);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          autoComplete="off"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <span>{formik.errors.email}</span>
        ) : null}
      </div>
      <br />
      <div>
        <input
          type="password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <span>{formik.errors.password}</span>
        ) : null}
      </div>
      <input
        type="text"
        onBlur={() => {
          console.log("ok");
        }}
      />
      <br />
      <input type="submit" value="mostrar" />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

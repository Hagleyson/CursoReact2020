import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import MaskedInput from "react-text-mask";
//olhar onSubmit e o botão de enviar
//olhar esses valores abaixo
//getFieldProps, touched, erros, isValid, handleSubmit

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      phone: ""
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
        .min(8, "A senha deve possuir pelo menos 8 caracteres"),
      phone: yup
        .string()
        .required("O preencimento é obrigatorio")
        .min(15, "O telefone deve possuir 11 números")
    }),
    onSubmit: (values) => {
      const registData = {
        //para transformar em minúsculo
        email: values.email.toLowerCase(),
        password: values.password,
        phone: values.phone
          .replace("(", "")
          .replace(")", "")
          .replace(" ", "")
          .replace("-", "")
      };
      console.log(registData);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
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
      <br />
      <div>
        <MaskedInput
          autoComplete="off"
          // mascara
          mask={[
            "(",
            /[0-9]/,
            /[0-9]/,
            ")",
            " ",
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            "-",
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            /[0-9]/
          ]}
          //para não aparecer os guias tipo os traços mostrando o que falta
          guide={false}
          {...formik.getFieldProps("phone")}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <span>{formik.errors.phone}</span>
        ) : null}
      </div>
      <br />
      <input type="submit" value="mostrar" disabled={!formik.isValid} />
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

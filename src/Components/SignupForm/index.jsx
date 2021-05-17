import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { backendURL } from "../../Services/api";
import { Redirect } from "react-router-dom";

const SignupForm = () => {
  const [token] = useState(localStorage.getItem("loginToken"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const signup = () => {
    if (confirmPassword !== password)
      return alert("Confirmação de senha falhou");
    axios
      .post(
        `${backendURL}/user`,
        {
          name: name,
          email: email,
          password: password,
        },
        { headers: { "x-access-token": `${token}` } }
      )
      .then((res) => {
        alert("Cadastro realizado com sucesso. Realize o login");
        setRedirectToLogin(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <S.Container>
      <h1>SignUp</h1>
      <S.InputDiv>
        {redirectToLogin ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <>
            <S.Textfield
              InputProps={{ className: "inputProps" }}
              InputLabelProps={{ className: "inputLabelProps" }}
              label="Nome"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <S.Textfield
              InputProps={{ className: "inputProps" }}
              InputLabelProps={{ className: "inputLabelProps" }}
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <S.Textfield
              InputProps={{ className: "inputProps" }}
              InputLabelProps={{ className: "inputLabelProps" }}
              label="Senha"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <S.Textfield
              InputProps={{ className: "inputProps" }}
              InputLabelProps={{ className: "inputLabelProps" }}
              label="Confirmar senha"
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </>
        )}
      </S.InputDiv>
      <S.ButtonDiv>
        <S.SignuButton onClick={() => signup()}>Registrar-se</S.SignuButton>
      </S.ButtonDiv>
    </S.Container>
  );
};

export default SignupForm;

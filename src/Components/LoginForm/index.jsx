import React, { useState } from "react";
import * as S from "./style";
import axios from 'axios';
// import Snackbar from "@material-ui/core/Snackbar";
import { backendURL } from '../../Services/api';

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log(email, password)
        axios.post(`${backendURL}/user/authenticate`, {
            email: email,
            password: password
        })
            .then(res => {
                let token = res.data.token
                localStorage.setItem("loginToken", token)
                window.location.reload();
            })
            .catch(err => {
                alert("Erro ao efetuar o login");
            })
    }

    return (
        <S.Container>
            <h1>Login</h1>
            <S.InputDiv>
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
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </S.InputDiv>
            <S.ButtonDiv >
                <S.LoginButton onClick={handleLogin}>Entrar</S.LoginButton>
            </S.ButtonDiv>
        </S.Container>
    );
};

export default LoginForm;

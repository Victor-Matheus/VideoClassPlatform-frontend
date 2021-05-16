import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { backendURL } from "../../Services/api";

const RegisterModuleForm = () => {

    const [token] = useState(localStorage.getItem("loginToken"));
    const [moduleTitle, setModuleTitle] = useState("");
    const [moduleDescription, setModuleDescription] = useState("");

    const handleNewClassModule = () => {
        axios.post(`${backendURL}/module`,
        {
            title: moduleTitle,
            description: moduleDescription
        },
         {headers : {"x-access-token" : `${token}`}})
         .then(res => {
            alert("Módulo cadastrado");
            window.location.reload();
         })
         .catch(err => {
            alert("Erro ao cadastrar módulo")
         })
    }

  return (
    <S.Container>
      <S.Content>
        <S.TitleDiv>
          <h2>Adicionar novo módulo</h2>
        </S.TitleDiv>
        <S.InputDiv>
          <S.Textfield
            label="Título"
            InputProps={{ className: "inputProps" }}
            InputLabelProps={{ className: "inputLabelProps" }}
            onChange={(e) => {setModuleTitle(e.target.value)}}
          />
          <S.Textfield
            label="Descrição"
            InputProps={{ className: "inputProps" }}
            InputLabelProps={{ className: "inputLabelProps" }}
            onChange={(e) => {setModuleDescription(e.target.value)}}
          />
        </S.InputDiv>
        <S.ButtonDiv>
          <S.RegisterButton onClick={() => handleNewClassModule()}>Adicionar</S.RegisterButton>
        </S.ButtonDiv>
      </S.Content>
    </S.Container>
  );
};

export default RegisterModuleForm;

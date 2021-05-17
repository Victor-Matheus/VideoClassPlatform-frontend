import React, { useState } from "react";
import * as S from "./style";
import axios from "axios";
import { backendURL } from "../../Services/api";

const RegisterLeassonForm = (props) => {
  const [token] = useState(localStorage.getItem("loginToken"));
  const [leassonTitle, setLeassonTitle] = useState("");
  const [leassonLink, setLeassonLink] = useState("");

  const handleNewLeasson = () => {
    axios
      .post(
        `${backendURL}/leasson`,
        {
          moduleId: props.moduleId,
          title: leassonTitle,
          link: leassonLink,
        },
        { headers: { "x-access-token": `${token}` } }
      )
      .then((res) => {
        alert("Novo vídeo adicionado");
        window.location.reload();
      })
      .catch((err) => {
        if (leassonLink === "") return alert("O vídeo deve ter um link");
        alert("Erro ao cadastrar novo vídeo");
      });
  };

  return (
    <S.Container>
      <S.Content>
        <S.TitleDiv>
          <h2>Adicionar novo vídeo</h2>
        </S.TitleDiv>
        <S.InputDiv>
          <S.Textfield
            label="Título"
            InputProps={{ className: "inputProps" }}
            InputLabelProps={{ className: "inputLabelProps" }}
            onChange={(e) => {
              setLeassonTitle(e.target.value);
            }}
          />
          <S.Textfield
            label="Youtube Link"
            InputProps={{ className: "inputProps" }}
            InputLabelProps={{ className: "inputLabelProps" }}
            onChange={(e) => {
              setLeassonLink(e.target.value);
            }}
          />
        </S.InputDiv>
        <S.ButtonDiv>
          <S.RegisterButton onClick={() => handleNewLeasson()}>
            Adicionar
          </S.RegisterButton>
        </S.ButtonDiv>
      </S.Content>
    </S.Container>
  );
};

export default RegisterLeassonForm;

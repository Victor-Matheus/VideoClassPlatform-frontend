import React from "react";
import * as S from "./style";

const HomePage = () => {
  return (
    <S.Container>
      <S.Content>
        <S.LeftSide />
        <S.RigthSide>
          <S.Title>
            <h1>Video Class Platform</h1>
          </S.Title>
          <S.RigthButtons>
            <a href="/login" style={{ textDecoration: "none" }}>
              <S.LoginButton>Login</S.LoginButton>
            </a>
            <a href="/signup" style={{ textDecoration: "none" }}>
              <S.RegisterButton>Cadastrar-se</S.RegisterButton>
            </a>
          </S.RigthButtons>
        </S.RigthSide>
      </S.Content>
    </S.Container>
  );
};

export default HomePage;

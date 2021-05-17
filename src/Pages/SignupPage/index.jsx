import React from "react";
import * as S from "./style";
import SignupForm from "../../Components/SignupForm";

const SignupPage = () => {
  return (
    <S.Container>
      <S.Content>
        <S.SignupDiv>
          <SignupForm />
        </S.SignupDiv>
      </S.Content>
    </S.Container>
  );
};

export default SignupPage;

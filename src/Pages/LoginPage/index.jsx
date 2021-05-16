import React from 'react'
import * as S from './style';
import LoginForm from '../../Components/LoginForm';

const LoginPage = () => {

    return(
        <S.Container>
            <S.Content>
                <S.FormDiv>
                    <LoginForm />
                </S.FormDiv>
            </S.Content>
        </S.Container>
    );
}

export default LoginPage;
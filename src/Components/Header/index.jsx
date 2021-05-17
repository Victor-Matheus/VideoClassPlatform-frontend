import React from 'react'
import * as S from './style';

const Header = () => {

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <S.Container>
            <S.Content>
                <span onClick={()=> logout()}>Logout</span>
            </S.Content>
        </S.Container>
    );
}

export default Header
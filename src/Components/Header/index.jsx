import React, {useState} from 'react'
import * as S from './style';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import decode from 'jwt-decode'

const Header = () => {

    const [name] = useState(decode(localStorage.getItem("loginToken")).name);
    const logout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <S.Container>
            <S.Content>
                <span><b>{name}</b></span>
                <hr />
                <span onClick={()=> logout()}>Sair <MeetingRoomIcon /></span>
            </S.Content>
        </S.Container>
    );
}

export default Header
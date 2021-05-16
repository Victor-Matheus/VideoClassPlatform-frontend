import React from 'react'
import * as S from './style';
import ControlPointIcon from '@material-ui/icons/ControlPoint';

const ClassModule = (props) => {
    return (
        <S.Container onClick={props.onClick}>
            <S.Content>
                {props.plusIcon
                    ?
                    <ControlPointIcon style={{color: "lightgray", marginRight: "1rem"}}/> 
                    :
                    undefined
                }
                <S.Title>
                    {props.title ?? `Módulo`}
                </S.Title>
            </S.Content>
        </S.Container>
    );
}

export default ClassModule
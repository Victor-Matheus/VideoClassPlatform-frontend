import React from 'react'
import * as S from './style';
import ClassModule from '../ClassModule';

const Sidebar = () => {
    return (
        <S.Container>
            <S.Content>
                <S.NewClassModuleDiv>
                    <ClassModule title="Adicionar novo módulo" plusIcon={true} />
                </S.NewClassModuleDiv>
                <S.ClassModuleDiv>
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                <ClassModule />
                </S.ClassModuleDiv>
            </S.Content>
        </S.Container>
    );
}

export default Sidebar;
import React from "react";
import * as S from "./style";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

const ModulePage = () => {
    return (
        <S.Container>
            <S.HeaderDiv>
                <Header />
            </S.HeaderDiv>
            <S.Content>
                <Sidebar />
                <S.ClassModuleDiv>
                    <S.ClassModuleDescription>
                        <h3>Title</h3>
                        <p>This is a description</p>
                    </S.ClassModuleDescription>
                </S.ClassModuleDiv>
            </S.Content>
        </S.Container>
    );
};

export default ModulePage;

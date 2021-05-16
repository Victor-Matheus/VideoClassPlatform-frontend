import React, { useState } from "react";
import * as S from "./style";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import VideoLeasson from "../../Components/VideoLeasson";

const ModulePage = () => {
  const [selectedModuleTitle, setSelectedModuleTitle] = useState("");
  const [selectedModuleDescription, setSelectedModuleDescription] =
    useState("");
  const [openRegisterModule, setOpenRegisterModule] = useState(false);
  return (
    <S.Container>
      <S.RegisterModuleModal open={openRegisterModule} onClose={() => setOpenRegisterModule(false)}>
          <VideoLeasson />
      </S.RegisterModuleModal>
      <S.HeaderDiv>
        <Header />
      </S.HeaderDiv>
      <S.Content>
        <Sidebar
          moduleTitle={setSelectedModuleTitle}
          moduleDescription={setSelectedModuleDescription}
          registerModule={setOpenRegisterModule}
        />
        <S.ClassModuleDiv>
          <S.ClassModuleDescription>
            <h3>{selectedModuleTitle}</h3>
            <p>{selectedModuleDescription}</p>
          </S.ClassModuleDescription>
          <hr />
          <S.VideoLessonsDiv>
            <VideoLeasson />
            <VideoLeasson />
            <VideoLeasson />
            <VideoLeasson />
            <VideoLeasson />
            <VideoLeasson />
            <VideoLeasson />
            <VideoLeasson />
            <VideoLeasson />
            <VideoLeasson />
            <VideoLeasson />
          </S.VideoLessonsDiv>
        </S.ClassModuleDiv>
      </S.Content>
    </S.Container>
  );
};

export default ModulePage;

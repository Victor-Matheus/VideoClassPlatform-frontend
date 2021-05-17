import React, { useState } from "react";
import * as S from "./style";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import VideoLeasson from "../../Components/VideoLeasson";
import RegisterLeassonForm from "../../Components/RegisterLeassonForm";
import RegisterModuleForm from "../../Components/RegisterModuleForm";
import axios from "axios";
import { backendURL } from "../../Services/api";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";

const ModulePage = () => {
  const [token] = useState(localStorage.getItem("loginToken"));
  const [selectedModuleId, setSelectedModuleId] = useState("");
  const [selectedModuleTitle, setSelectedModuleTitle] = useState("");
  const [selectedModuleDescription, setSelectedModuleDescription] =
    useState("");
  const [openRegisterModule, setOpenRegisterModule] = useState(false);
  const [openRegisterLeasson, setOpenRegisterLeasson] = useState(false);
  const [openDeleteClassAlert, setOpenDeleteClassAlert] = useState(false);
  const [leassons, setLeassons] = useState([]);

  const handleClassModule = (moduleId) => {
    axios
      .get(`${backendURL}/leasson/module/${moduleId}`, {
        headers: { "x-access-token": `${token}` },
      })
      .then((res) => {
        setLeassons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteClassModule = () => {
    axios
      .delete(`${backendURL}/module/${selectedModuleId}`, {
        headers: { "x-access-token": `${token}` },
      })
      .then((res) => {
        alert("módulo excluído");
        window.location.reload();
      })
      .catch((err) => {
        alert("Ocorreu um erro ao exluir o módulo");
        setOpenDeleteClassAlert(false);
      });
  };

  const handleYoutubeLink = (link) => {
    let isNormalLink = link?.includes("youtube.com");
    let isSharedLink = link?.includes("youtu.be");
    let videoID;
    if (isNormalLink) {
      videoID = link?.split("=").reverse();
      return videoID[0];
    } else if (isSharedLink) {
      videoID = link?.split("/").reverse();
      return videoID[0];
    } else return undefined;
  };

  return (
    <S.Container>
        <S.RegisterModuleModal
          open={openRegisterModule}
          onClose={() => setOpenRegisterModule(false)}
        >
          <RegisterModuleForm />
        </S.RegisterModuleModal>
        <S.RegisterModuleModal
          open={openRegisterLeasson}
          onClose={() => setOpenRegisterLeasson(false)}
        >
          <RegisterLeassonForm moduleId={selectedModuleId} />
        </S.RegisterModuleModal>
        <S.RegisterModuleModal
          open={openDeleteClassAlert}
          onClose={() => setOpenDeleteClassAlert(false)}
        >
          <DialogTitle>Remover módulo</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Tem certeza que deseja remover o módulo permanentemente?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={() => setOpenDeleteClassAlert(false)}>
              Não
            </Button>
            <Button autofocus color="secondary" onClick={() => deleteClassModule()}>
              Sim
            </Button>
          </DialogActions>
        </S.RegisterModuleModal>
      <S.HeaderDiv>
        <Header />
      </S.HeaderDiv>
      <S.Content>
        <Sidebar
          moduleTitle={setSelectedModuleTitle}
          moduleDescription={setSelectedModuleDescription}
          registerModule={setOpenRegisterModule}
          moduleId={setSelectedModuleId}
          handleModule={handleClassModule}
        />
        <S.ClassModuleDiv>
          <S.ClassModuleDescription>
            <S.ClassModuleDescriptionText>
              <h3>{selectedModuleTitle}</h3>
              <p>{selectedModuleDescription}</p>
            </S.ClassModuleDescriptionText>
            <S.DeleteButton onClick={() => setOpenDeleteClassAlert(true)}>
              <DeleteForeverIcon />
            </S.DeleteButton>
          </S.ClassModuleDescription>
          <hr />
          <S.NewLeassonDiv onClick={() => setOpenRegisterLeasson(true)}>
            <ControlPointIcon />
            Adicionar vídeo
          </S.NewLeassonDiv>
          <S.VideoLessonsDiv>
            {leassons.map((value) => {
              let videoID = handleYoutubeLink(value.link);
              return (
                <VideoLeasson
                  videoId={videoID}
                  title={value.title}
                  leassonId={value._id}
                />
              );
            })}
          </S.VideoLessonsDiv>
        </S.ClassModuleDiv>
      </S.Content>
    </S.Container>
  );
};

export default ModulePage;

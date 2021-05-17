import React, { useState } from "react";
import * as S from "./style";
import Youtube from "react-youtube";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from "axios";
import { backendURL } from "../../Services/api";

const VideoLeasson = (props) => {
  const [token] = useState(localStorage.getItem("loginToken"))
  const [videoOpen, setVideoOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleYoutubeVideo = () => {
    setVideoOpen(true);
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
  };

  const deleteVideo = () =>{
    console.log(props._id);
    axios.delete(`${backendURL}/leasson/${props.leassonId}`,
    {headers : {"x-access-token": `${token}`}})
    .then(res => {
      alert("Vídeo removido");
      window.location.reload();
    })
    .catch(err => {
      alert("Ocorreu um erro ao deletar o vídeo")
      setOpenAlert(false);
    })
  }

  return (
    <S.Container>
      <S.DeleteLeassonModal open={openAlert} onClose={() => setOpenAlert(false)}>
        <DialogTitle>Remover vídeo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tem certeza que deseja remover o vídeo permanentemente?
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setOpenAlert(false)} color="primary">Não</Button>
            <Button onClick={() => deleteVideo()} color="secondary">Sim</Button>
          </DialogActions>
        </DialogContent>
      </S.DeleteLeassonModal>
      <S.Content>
        <S.VideoModal open={videoOpen} onClose={handleVideoClose}>
          <Youtube videoId={props.videoId ?? "_p7Jyyp_nDM"} />
        </S.VideoModal>
        <S.TitleDiv>
          <h4>{props.title ?? "Vídeo"}</h4>
        </S.TitleDiv>
        <S.ButtonsDiv>
          <S.PlayButton onClick={handleYoutubeVideo}>
            <PlayCircleOutlineIcon />
          </S.PlayButton>
          <S.DeleteButton onClick={() => setOpenAlert(true)}>
            <DeleteForeverIcon />
          </S.DeleteButton>
        </S.ButtonsDiv>
      </S.Content>
    </S.Container>
  );
};

export default VideoLeasson;

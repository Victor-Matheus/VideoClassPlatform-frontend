import React, { useState } from "react";
import * as S from "./style";
import Youtube from "react-youtube";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const VideoLeasson = (props) => {
  const [videoOpen, setVideoOpen] = useState(false);

  const handleYoutubeVideo = () => {
    setVideoOpen(true);
  };

  const handleVideoClose = () => {
    setVideoOpen(false);
  };

  return (
    <S.Container>
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
          <S.DeleteButton>
            <DeleteForeverIcon />
          </S.DeleteButton>
        </S.ButtonsDiv>
      </S.Content>
    </S.Container>
  );
};

export default VideoLeasson;

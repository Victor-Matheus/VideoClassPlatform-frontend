import styled from "styled-components";
import { Dialog, Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  background: #1e1e26;
  display: flex;
  border-bottom: solid 1px #07d962;
  cursor: default;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const VideoModal = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    min-width: 40rem;
  }
`;

export const ButtonsDiv = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const TitleDiv = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
    >h4{
        color: lightgray;
        font-size: 1.4rem;
    }
`

export const PlayButton = styled(Button)`
  margin: 1rem;
  width: 5rem;
  height: 3rem;
  z-index:0;
  &.MuiButton-root {
    background: #07d962;
    :hover {
      background: lightpink;
    }
  }
`;

export const DeleteButton = styled(Button)`
  margin: 1rem;
  width: 5rem;
  height: 3rem;
  &.MuiButton-root {
    background: #e82d92;
    :hover {
      background: lightpink;
    }
  }
`;

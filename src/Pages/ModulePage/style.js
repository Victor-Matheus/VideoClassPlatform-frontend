import styled from "styled-components";
import { Dialog, Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #1e1e26;
  display: flex;
  flex-direction: column;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  height: 10%;
`;

export const Content = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`;

export const VideoLessonsDiv = styled.div`
  width: 100%;
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  background: red;
`;

export const ClassModuleDiv = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

export const ClassModuleDescription = styled.div`
  width: 80%;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #19181f;
  position: absolute;
  z-index: 1000;
  > h3 {
    color: lightgray;
    font-size: 1.5rem;
  }

  > p {
    color: gray;
    font-size: 1rem;
  }
`;

export const RegisterModuleModal = styled(Dialog)`
  .MuiDialog-paperWidthSm {
    min-width: 40rem;
  }
`

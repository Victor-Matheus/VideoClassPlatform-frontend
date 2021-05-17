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
  margin-top: 10.5rem;
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
  flex-direction: row-reverse;
  align-items: center;
  background: #19181f;
  position: absolute;
  z-index: 1000;
`;

export const ClassModuleDescriptionText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
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
`;
export const NewLeassonDiv = styled.div`
  width: 80%;
  margin-top: 7rem;
  height: 3.5rem;
  border-bottom: solid 1px #67159c;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #19181f;
  position: absolute;
  z-index: 1000;
  border-top: solid 1px black;
  :hover {
    background: #222525;
  }
  color: lightgray;
  cursor: pointer;
`;

export const DeleteButton = styled(Button)`
  right: 1.5rem;
  width: 1rem;
  height: 2.5rem;
  &.MuiButton-root {
    background: #e82d92;
    :hover {
      background: lightpink;
    }
  }
`;

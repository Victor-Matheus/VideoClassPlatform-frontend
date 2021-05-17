import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  height: 20rem;
  background: #1e1e26;
  display: flex;
  border-bottom: solid 1px #07d962;
  cursor: default;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputDiv = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .inputProps {
    color: #07d962;
    &::after {
      border-bottom-color: #07d962;
    }
  }
  .inputLabelProps {
    color: lightgray;
  }
`;

export const TitleDiv = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    > h2{
        color: lightgray;
        font-size: 1.3rem;
    }
`;

export const ButtonDiv = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Textfield = styled(TextField)`
width: 80%;
  &.MuiTextField-root {
    color: white;
    :hover {
      color: white;
    }
  }
`;

export const RegisterButton = styled(Button)`
  margin: 1rem;
  width: 20rem;
  height: 3rem;
  &.MuiButton-root {
    background: #e82d92;
    :hover {
      background: lightpink;
    }
  }
`;

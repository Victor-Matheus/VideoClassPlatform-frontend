import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > h1{
      color: lightgray;
  }
`;

export const InputDiv = styled.div`
  width: 70%;
  height: 40%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  
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

export const Textfield = styled(TextField)`
  color: gray;

`;

export const ButtonDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignuButton = styled(Button)`
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

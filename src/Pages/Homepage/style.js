import styled from "styled-components";
import image from "../../Assets/backgroundImage.svg";
import Button from "@material-ui/core/Button";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: #19181f; */
  background: #67159c;
`;

export const Content = styled.div`
  width: 90%;
  height: 90%;
  /* background: #67159c; */
  border-radius: 1.5rem;
  /* opacity: 80%; */
  display: flex;
  background: #1E1E26;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const RigthSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  border-right: solid 1px #67159c;
  background-image: url(${image});
  background-position: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 30%;
  border: solid 1px #e82d92;
  margin-bottom: 3rem;
  > h1 {
    color: #e82d92;
    font-size: 2rem;
  }
`;

export const LoginButton = styled(Button)`
  width: 20rem;
  height: 3rem;
  &.MuiButton-root {
    background: #07d962;
    :hover {
      background: lightgreen;
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

export const RigthButtons = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

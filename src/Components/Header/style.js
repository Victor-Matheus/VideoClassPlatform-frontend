import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #67159c;
`;

export const Content = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    >span{
        color: lightgray;
        font-size: 1.3rem;
        cursor: pointer;
        :hover{
            color: white;
        }
    }
`;
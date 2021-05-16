import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 5rem;
    background: #19181F;
    display: flex;
    border-bottom: solid 1px #67159c;
    :hover{
        background: #222525;
    }
cursor: pointer;
`

export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.p`
    color: lightgray;
    font-size: 1rem;
`;
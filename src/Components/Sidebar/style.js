import styled from "styled-components";

export const Container = styled.div`
  width: 20%;
  height: 100%;
  background: #19181f;
  display: flex;
  flex-direction: column;
  border-right: solid 2px #67159c;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.3rem;
  }
  ::-webkit-scrollbar-thumb {
    background: #67159c;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 90%;
`;

export const NewClassModuleDiv = styled.div`
  width: 20%;
  height: 5rem;
  border-bottom: solid 1px #67159c;
  position: fixed;
`;

export const ClassModuleDiv = styled.div`
  margin-top: 5rem;
`;

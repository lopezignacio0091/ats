import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  gap: 24px;
  height: 100%;
  background-color: white;
  position: absolute;
  top: 52px;
  overflow-y: auto;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  overflow-y: auto;
`;

export const Title = styled.div`
  color: ${({ theme }) => theme.blue};
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 10px;
  width: 100%;
  padding: 0 8px;
  & .MuiStepper-root {
    margin-top: 24px;
  }
  gap: 24px;
  min-height: 620px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  padding: 0 24px;
  & .MuiTextField-root {
    width: 100%;
    padding: 8px;
    & label {
      padding: 8px;
      margin-top: -20px;
      font-size: 12px;
    }
  }
  position: relative;
`;

export const SectionDescription = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
`;


export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
`;

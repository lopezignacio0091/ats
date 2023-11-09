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
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 10px;
  justify-content: center;
  flex: 1;
  align-items: center;
  gap: 24px;
  min-width: 90px;
  cursor: pointer;
  width: 100%;

  & .MuiTextField-root {
    width: 100%;
    padding: 8px;
    & label {
      padding: 8px;
      margin-top: -20px;
      font-size: 12px;
    }
  }
`;
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 16px;
`;

export const SeatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;


export const SectionDescription = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
`;

export const TicketInfo = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  color: #a09e9e;
  text-align: center;
  font-family: ${({theme})=> theme.fonts.family};
`;

export const Dot = styled.span<{ color: string }>`
  width: 8px;
  height: 12px;
  background-color: ${({ color }) => color};
  border-radius: 10%;
`;


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

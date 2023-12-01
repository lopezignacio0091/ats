import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
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

export const TicketInfo = styled.p`
  font-size: 12px;
  font-weight: 700;
  margin: 0;
  color: #a09e9e;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.family};
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


export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  width: calc(100% + 64px);
  margin-left: -32px;
  margin-top: 8px;
`;

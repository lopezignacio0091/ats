import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  overflow-y: auto;
`;


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 800;
  color: black;
`;


export const Subtitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 500;
  color: #9c9a9a;
`;

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid #9c9a9a;
  margin: 8px 0px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const SeatContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  color: #9c9a9a;
`;

export const SectionSeats = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

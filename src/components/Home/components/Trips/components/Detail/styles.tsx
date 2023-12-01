import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 320px;
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: 20px;
  color: ${({ theme }) => theme.blue};
  font-weight: 700;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const Label = styled.div`
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

export const Row = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${({ gap }) => (gap ? "flex-start" : "space-between")};
  gap: ${({ gap }) => gap || 0}px;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

import styled from "styled-components";


export const Header = styled.div`
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  max-height: 340px;
`;

export const Background = styled.div`
  height: 130px;
  border-radius: 25% 25% 39% 33% / 0% 0% 25% 25%;
  background-color: ${({ theme }) => theme.blue};
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const Content = styled.div`
  display: flex;
  padding: 24px;
  flex: 1;
  flex-direction: column;
  gap: 16px;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.blue};
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: 16px;
  font-weight: 700;
`;

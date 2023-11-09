import styled from "styled-components";

export const Label = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 400;
  color: ${({ theme }) => theme.blue};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.blue};
  border-radius: 10px;
  justify-content: center;
  flex: 1;
  align-items: center;
  gap: 8px;
  min-width: 90px;
  cursor: pointer;
  & :hover {
    ${Label} {
      color: ${({ theme }) => theme.hover};
    }
  }
`;

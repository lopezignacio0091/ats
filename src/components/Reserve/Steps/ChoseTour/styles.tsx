import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;
export const Label = styled.span`
  color: ${({ theme }) => theme.gray2D};
  font-family: ${({ theme }) => theme.fonts.family};
  font-size: 14px;
  font-weight: 500;
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

import styled, { css } from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 1px 12px rgba(45, 45, 45, 0.25);
  display: grid;
  min-width: 180px;
  box-sizing: border-box;
  padding: 16px;
  width: 60%;
  border-radius: 10px;
  border: 1px solid black;
  min-height: 280px;
  & :nth-child(3n) {
    border-left: 1px solid black;
    padding: 0 0px 0 24px;
    width: 48px;
  }
`;

export const SeatRow = styled.div`
  align-items: center;
  display: grid;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.family};
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  height: 24px;
  margin-top: 8px;
  column-gap: 8px;
  row-gap: 8px;
  text-align: center;
  place-items: center;
`;

export const Seat = styled.div<{ disabled: boolean; selected: boolean }>`
  color: ${({ theme, disabled, selected }) =>
    disabled ? theme.grayCC : selected ? theme.white : theme.blue};
  font-size: 16px;
  font-weight: 700;
  border: 1px solid white;
  border-radius: 3px;
  width: 32px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  ${({ disabled }) =>
    !disabled &&
    css`
      &:hover {
        border: 1px solid ${({ theme }) => theme.blue};
      }
    `}
  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${({ theme }) => theme.blue};
      background-color: ${({ theme }) => theme.blue};
    `}
`;

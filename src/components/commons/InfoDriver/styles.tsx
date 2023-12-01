import { Alert } from "@mui/material";
import styled, { css } from "styled-components";

const Ellipsis = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const Label = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 800;
  color: black;
  ${Ellipsis}
`;


export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Subtitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 500;
  color: #9c9a9a;
  ${Ellipsis}
`;

export const Row = styled.div<{ gap?: number }>`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${({ gap }) => (gap ? "flex-start" : "space-between")};
  gap: ${({ gap }) => gap || 0}px;
  align-items: center;
`;

export const AlertComponent = styled(Alert)`
  margin-top: 24px;
  border: 1px solid #eea846;
  border-radius: 8px;
`;

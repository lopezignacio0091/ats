import styled, { keyframes } from "styled-components";
import { Accordion } from "@mui/material";

const move = keyframes`
      40% {
        left: 50%;
        opacity: 1;
      }
      100% {
        left: 70%;
        opacity: 0;
      }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  flex: 1;
`;

export const StyledAccordion = styled(Accordion)`
  box-shadow: 3px 13px 10px 3px #dddddd !important;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  & #body {
    margin: 0 0 0 -10px;
  }
`;

export const ContainerSvg = styled.div`
  position: absolute;
  width: 30px;
  height: 25px;
  top: 73%;
  left: 30%;
  opacity: 0;
  transform: translate(-50%, -45%);
  animation: ${move} 3s infinite;
`;

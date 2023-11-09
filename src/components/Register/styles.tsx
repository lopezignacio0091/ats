import styled, { keyframes } from "styled-components";

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
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: start;
`;
export const Card = styled.div`
  height: 580px;
  width: 340px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 10px 25px 3px #00000019;
  border-radius: 0.5rem;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 32px 0px 32px;
  width: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
  width: 100%;
  gap: 32px;
  flex: 1;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 100%;
  gap: 16px;
`;

export const ContainerSvg = styled.div`
  position: absolute;
  width: 30px;
  height: 25px;
  top: 70%;
  left: 30%;
  opacity: 0;
  transform: translate(-50%, -45%);
  animation: ${move} 3s infinite;
  & > svg path:not([class$="not-color"]),
  & > svg circle:not([class$="not-color"]),
  & > svg rect:not([class$="not-color"]) {
    stroke: white;
    fill: white;
  }
`;

export const Image = styled.image`
  background-image: url("../../../resources/combi.png");
  border-radius: 8px;
  height: 350px;
  width: 400px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ButtonCreate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  & button {
    border-radius: 8px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fonts.fontSizeLarge};
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  margin: 0;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.family};
  white-space: pre-wrap;
`;

export const ContainerPass = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  text-align: end;
`;
export const Text = styled.label`
  font-size: ${({ theme }) => theme.fonts.fontSizeSmall};
  font-weight: 400;
  color: #ccc9c9;
  font-family: ${({ theme }) => theme.fonts.family};
`;


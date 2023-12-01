import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  gap: 8px;
  align-items: center;
  background-color: white;
  & button {
    margin-top: 20px;
    font-family: ${({theme}) => theme.fonts.family};
    font-weight: 700;
  }
`;

export const Title = styled.h3`
    font-family: ${({theme}) => theme.fonts.family};
    font-weight: 700;
    margin: 0;
    color: black;
`

export const Subtitle = styled.h5`
    font-family: ${({theme}) => theme.fonts.family};
    font-weight: 400;
    margin: 0;
    color: black;

`
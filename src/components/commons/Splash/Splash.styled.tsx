import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.blue};
  color: white;
  align-items: center;
`;


export const Image = styled.image`
  background-image: url("../../../assets/logo.jpeg");
  /* border-radius: 8px; */
  height: 350px;
  width: 400px;
  background-size: cover;
  /* background-position: center; */
  background-repeat: no-repeat;
  z-index: 1;
`;
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  box-sizing: border-box;
  padding: 24px;
  background: #022841;
  color: white;
  gap: 24px;
  border-radius: 8px;
  z-index: 1;
  margin-top: -38px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


export const Name = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 800;
  text-transform: uppercase;
`;


export const Title = styled.div`
  font-size: 20px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.fonts.family};
  font-weight: 800;
`;


export const Label = styled.div`
  font-size: 14px;
  line-height: 20px;
  font-family: ${({theme})=> theme.fonts.fonts};
  font-weight: 600;
`;

import styled from "styled-components";

export const EmptyStateContainer = styled.div<{ favoritesOnly?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  @media (max-height: 600px) {
    svg {
      display: none;
    }
    justify-content: center;
  }
`;

export const Title = styled.div<{ favoritesOnly?: boolean }>`
  font-size: ${(p) => `calc(${p.theme.fonts.fontSizeSmall} * 1.2)`};
  color: ${(p) => p.theme.blue};
  font-family: ${({ theme }) => theme.fonts.family};

  @media (max-height: 600px) {
    margin: 0;
  }
`;

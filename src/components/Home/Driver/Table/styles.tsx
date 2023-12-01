import styled from "styled-components";
import MUIDataTable from "mui-datatables";

export const CustomTable = styled(MUIDataTable)`
  thead {
    tr {
      th {
        font-family: ${({ theme }) => theme.fonts.family};
        color: ${({ theme }) => theme.blue};
        font-weight: 500;
        font-size: 16px;
        button {
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }
  tbody {
    tr {
      font-family: ${({ theme }) => theme.fonts.family};
    }
    tr:hover {
      background-color: #e0e0e0; // Color de fondo al hacer hover sobre una fila
    }
  }
  .tss-1t6h0i4-MUIDataTableToolbar-titleRoot {
    font-family: ${({ theme }) => theme.fonts.family};
    color: ${({ theme }) => theme.blue};
    h6 {
      font-weight: 700;
      font-size: 18px;
    }
  }
`;

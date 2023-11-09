import styled, { css } from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@mui/material/TextField";
export const Wrapper = styled(
  ({ onChange, open, rightAddOn , endIcon, ...rest }: any) => (
    <DatePicker
      open={open}
      {...rest}
      onChange={onChange}
      customInput={
        <TextField
          {...rest}
          onChange={onChange}
          variant="standard"
          InputProps={{
            startAdornment: rightAddOn,
            endAdornment:endIcon
          }}
          fullWidth
        />
      }
    />
  )
)``;

export const CalendarContainer = styled.div<{
  disabled?: boolean;
}>`
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  margin-right: 8px;
  & > * {
    cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & ${Wrapper} {
    width: 100%;
  }
`;

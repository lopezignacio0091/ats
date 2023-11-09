import React, { useState, useCallback } from "react";
import { Wrapper, CalendarContainer, Container } from "./styles";
import { DatePickerProps } from "./types";
import moment from "moment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseIcon from "@mui/icons-material/Close";

const DatePickerComponents: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  disabled = false,
}) => {
  const [open, setopen] = useState(false);

  const handleChange = (date: any) => {
    if (onChange) onChange(moment(date).format("L"));
    setopen(false);
  };

  const renderChevronIcon = useCallback(
    () => (
      <>
        <CalendarContainer
          about="chevron"
          onClick={() => setopen((val) => !val)}
          data-testid="chevron-icon-test"
          disabled={disabled}
        >
          <CalendarMonthIcon />
        </CalendarContainer>
      </>
    ),
    [disabled]
  );

  const handleClear = () => {
    if (onChange) onChange("");
    setopen(false);
  };

  return (
    <Container>
      <Wrapper
        label={label}
        value={value || new Date()}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        rightAddOn={renderChevronIcon()}
        open={open}
        onClear={handleClear}
        endIcon={<CloseIcon onClick={handleClear} />}
        disabled
      />
    </Container>
  );
};

export default DatePickerComponents;

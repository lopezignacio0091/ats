import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { MultiSelectProps } from "./types";
import { Container } from "./styles";

const MultiSelect = ({
  value,
  options,
  onChange,
  key = "id",
  display = "name",
  label,
}: MultiSelectProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    if (!event.target.value) onChange(null);
    onChange(event.target.value);
  };
  return (
    <Container>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          onChange={handleChange}
          label={label}
          value={value[key]}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options &&
            options?.map((option) => (
              <MenuItem key={option[key]} value={option[key]}>
                {option[display]}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Container>
  );
};

export default MultiSelect;

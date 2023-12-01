import MultiSelect from "../../../commons/MultiSelect/MultiSelect";
import { AlertTitle, TextField, Alert } from "@mui/material";
import DatePickerComponents from "../../../commons/DatePicker/DatePicker";
import useStore from "../../store/useStore";
import useTours from "../../../../hooks/query/useTours";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { AlertContainer, Container, Label } from "./styles";


const ChoseTour = () => {
  const { tour, date, checkDiff, alternativeDomicile } = useStore(
    (state) => state.data
  );
  const { setTour, setDate, setAlternativeDomicile, setcheckDiff } = useStore(
    (state) => state
  );
  const { data: tours } = useTours();

  const handleTour = async (tour: string) => {
    if (!tour) {
      setTour(null);
      return;
    }
    const tourSelect: any = tours?.find((op) => op.id === tour);
    setTour(tourSelect);
  };

  const info = <Label>Domicilio Alternativo</Label>;

  return (
    <Container>
      <MultiSelect
        options={tours || []}
        label="Seleccione un viaje"
        value={tour}
        onChange={handleTour}
        display="origin"
      />
      <TextField
        id="standard-basic"
        label="Destino"
        variant="standard"
        value={tours?.find((op) => op.id === tour?.id)?.destination}
        placeholder="Destination"
        disabled
      />
      <DatePickerComponents
        value={date}
        onChange={setDate}
        label="Select Date"
      />
      <FormControlLabel
        required
        control={<Checkbox onClick={setcheckDiff} />}
        label={info}
      />
      {checkDiff && (
        <TextField
          id="standard-basic"
          label="Retiro"
          variant="standard"
          value={alternativeDomicile}
          placeholder="Destination"
          onChange={(e) => setAlternativeDomicile(e.target.value)}
        />
      )}
      <AlertContainer>
        <Alert severity="info">
          <AlertTitle>
            <strong
              style={{ alignItems: "center", display: "flex", gap: "4px" }}
            >
              Recuerde
            </strong>
          </AlertTitle>
          Que al no seleccionar un domicilio alternativo , usted va hacer
          retirado por su domicilio.
        </Alert>
      </AlertContainer>
    </Container>
  );
};

export default ChoseTour;

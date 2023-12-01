import { Alert } from "@mui/material";
import useStore from "../../store/useStore";
import {
  Container,
  Row,
  SeatContainer,
  Section,
  SectionSeats,
  Subtitle,
  Title,
} from "./styles";
import AirlineSeatReclineExtraIcon from "@mui/icons-material/AirlineSeatReclineExtra";
const Details = () => {
  const { tour, date, van, seat, checkDiff, alternativeDomicile } = useStore(
    (state) => state.data
  );
  return (
    <Container>
      Details
      <Section>
        <Title>Origen</Title>
        <Subtitle>{alternativeDomicile || tour?.origin}</Subtitle>
      </Section>
      <Section>
        <Title>Destino</Title>
        <Subtitle>{tour?.destination}</Subtitle>
      </Section>
      <Row>
        <Section>
          <Title>Fecha</Title>
          <Subtitle>{date}</Subtitle>
        </Section>
        <Section>
          <Title>Cant de asientos</Title>
          <Subtitle>{seat.length}</Subtitle>
        </Section>
      </Row>
      <Section>
        <Title>Asientos seleccionados:</Title>
        <SectionSeats>
          {seat.map((seatSelect) => {
            return (
              <SeatContainer>
                <AirlineSeatReclineExtraIcon />
                {van.seats.find((seat) => seat.id === seatSelect)?.seatNumber}
              </SeatContainer>
            );
          })}
        </SectionSeats>
        <Alert
          severity="warning"
          style={{
            marginTop: "24px",
            border: "1px solid #eea846",
            borderRadius: "8px",
          }}
        >
          <Section>
            <Title>Info chofer</Title>
            <Subtitle>{tour?.name}</Subtitle>
            <Subtitle>{tour?.email}</Subtitle>
          </Section>
        </Alert>
      </Section>
    </Container>
  );
};

export default Details;

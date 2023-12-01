import Dialog from "@mui/material/Dialog";
import { DetailProps } from "./types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CloseIcon from "@mui/icons-material/Close";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PersonIcon from "@mui/icons-material/Person";
import {
  Body,
  Container,
  Header,
  Label,
  Row,
  Section,
  Subtitle,
  Title,
} from "./styles";
import MapContainer from "./Map/Map";
import useReservesByDriver from "../../../../hooks/query/useReservesByDriver";
import useStore from "../store/useStore";

const Detail = ({ open, onClose }: DetailProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const { data: reserves } = useReservesByDriver();
  const { reserveId } = useStore((state) => state);

  const reserveSelect = reserves?.find((reserve) => reserve.id === reserveId);

  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <Container>
        <Header>
          <Title>Detalles del viaje</Title>
          <CloseIcon onClick={onClose} />
        </Header>
        <Body>
          <Section>
            <Row gap={2}>
              <PersonIcon />
              <Label>Nombre</Label>
            </Row>
            <Subtitle>{reserveSelect?.name}</Subtitle>
          </Section>
          <Section>
            <Row gap={2}>
              <LocationOnIcon />
              <Label>Origen</Label>
            </Row>
            <Subtitle>
              {reserveSelect?.alternativeDomicile || reserveSelect?.origin}
            </Subtitle>
          </Section>
          <Section>
            <Row gap={2}>
              <LocationOnIcon />
              <Label>Destino</Label>
            </Row>
            <Subtitle>{reserveSelect?.destination}</Subtitle>
          </Section>
          <MapContainer
            origin={reserveSelect?.origin!}
            destination={reserveSelect?.destination!}
          />
        </Body>
      </Container>
    </Dialog>
  );
};

export default Detail;

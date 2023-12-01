import Dialog from "@mui/material/Dialog";
import { DetailProps } from "./types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
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
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoDriver from "../../../../../commons/InfoDriver/InfoDriver";
import useStore from "../../../../User/store/useStore";
import useTours from "../../../../../../hooks/query/useTours";

const Detail = ({ open, onClose }: DetailProps) => {
  const { selectReserve } = useStore((state) => state);
  const { data: tours } = useTours();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const findTour = tours?.find((tour) => tour.id === selectReserve.tourId);
  
  return (
    <Dialog open={open} onClose={onClose} fullScreen={fullScreen}>
      <Container>
        <Header>
          <Title>Detalles Compra</Title>
          <CloseIcon onClick={onClose} />
        </Header>
        <Body>
          <Section>
            <Row gap={2}>
              <LocationOnIcon />
              <Label>Origen</Label>
            </Row>
            <Subtitle>
              {selectReserve.alternativeDomicile || selectReserve.origin}
            </Subtitle>
          </Section>
          <Section>
            <Row gap={2}>
              <LocationOnIcon />
              <Label>Destino</Label>
            </Row>
            <Subtitle>{selectReserve.destination}</Subtitle>
          </Section>
          <Section>
            <Row gap={2}>
              <CalendarMonthIcon />
              <Label>Fecha</Label>
            </Row>
            <Subtitle>{selectReserve.created_at}</Subtitle>
          </Section>
        </Body>
        <InfoDriver name={findTour?.name!} email={findTour?.email!} />
      </Container>
    </Dialog>
  );
};

export default Detail;

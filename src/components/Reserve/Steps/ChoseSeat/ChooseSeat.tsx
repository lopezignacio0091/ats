import {
  Dot,
  Row,
  SeatsContainer,
  SectionContainer,
  TicketInfo,
  Container,
  AlertContainer
} from "./styles";
import Seats from "../../components/Seats/Seats";
import useVansById from "../../../../hooks/query/useVansId";
import { useEffect } from "react";
import useStore from "../../store/useStore";
import AlertComponent from "../../components/Alert/AlertComponent";
import PaymentIcon from '@mui/icons-material/Payment';
const ChooseSeat = () => {
  const { isLoading, data } = useVansById();
  const { setVan } = useStore((state) => state);
  useEffect(() => {
    if (data) setVan(data);
  }, [data]);

  if (isLoading) return "cargando....";

  return (
    <Container>
      <SectionContainer>
        <Row>
          <TicketInfo>Disponible : </TicketInfo> <Dot color="#0F4C75" />
        </Row>
        <Row>
          <TicketInfo>No disponible : </TicketInfo>
          <Dot color="#CCCCCC" />
        </Row>
      </SectionContainer>
      <SeatsContainer>
        <Seats />
      </SeatsContainer>
      <AlertContainer>

        <AlertComponent title="Recuerde" icon={<PaymentIcon />} message=" Para hacer la compra, la misma sera a traves de mercado pago"/>
      </AlertContainer>    
    </Container>
  );
};

export default ChooseSeat;

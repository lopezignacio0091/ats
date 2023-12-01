import React from "react";
import { Name, Row, Title, Container } from "./styles";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import useStore from "../../../Login/store/useStore";
import useReserveById from "../../../../hooks/query/useReserveById";
const Info = () => {
  const { name } = useStore((state) => state.user);
  const { data } = useReserveById();

  const total = data?.reduce((acc, curr) => acc + curr.price, 0) || "---";
  return (
    <Container>
      <Row>
        <Name>{name}</Name>
        <AirportShuttleIcon />
      </Row>
      <Row>
        <Name>Total</Name>
        <Title>$ {total}</Title>
      </Row>
    </Container>
  );
};

export default Info;

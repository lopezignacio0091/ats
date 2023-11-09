import React from "react";
import { Name, Row, Title, Container } from "./styles";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import useStore from "../../../Login/store/useStore";
const Info = () => {
  const { name } = useStore((state) => state.user);
  return (
    <Container>
      <Row>
        <Name>{name}</Name>
        <AirportShuttleIcon />
      </Row>
      <Row>
        <Name>Total</Name>
        <Title>$ 30000</Title>
      </Row>
    </Container>
  );
};

export default Info;

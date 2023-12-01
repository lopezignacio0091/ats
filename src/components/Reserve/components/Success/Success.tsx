import React, { useEffect } from "react";
import Succees from "../../../../assets/success.svg";
import { Container, Subtitle, Title } from "./styles";
import { Button } from "@mui/material";
import { useHistory, useLocation, useParams } from "react-router";
import { setStatusReserve } from "../../../../client/setStatusReserve";

const Success = () => {
  const history = useHistory();

  const handleHome = () => {
    localStorage.removeItem("reserveId");
    history.push("/home");
  };

  const setReserveStatus = async (id: string) => {
    await setStatusReserve(id);
    setTimeout(() => {
      handleHome();
    }, 3000);
  };

  useEffect(() => {
    const reserveId = localStorage.getItem("reserveId");
    if (reserveId) {
      setReserveStatus(reserveId);
    }
  }, []);

  return (
    <Container>
      <img src={Succees} alt="success" height={56} width={56} />
      <Title>Su compra se realizo con exito</Title>
      <Subtitle>Regrese a la home para poder seguir operando</Subtitle>
      <Button onClick={handleHome} variant="contained">
        Ir a la home
      </Button>
    </Container>
  );
};

export default Success;

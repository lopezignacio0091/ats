import React from "react";
import { Container, Row } from "./styles";
import Box from "./components/Box/Box";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { useHistory } from "react-router";
const Menu = () => {
  const history = useHistory();

  const handleRedirect = (destination: string) => {
    history.push(`/${destination}`);
  };
  return (
    <Container>
      <Row>
        <Box
          label="Comprar"
          icon={<CalendarMonthIcon style={{ color: "red" }} />}
          onClick={() => handleRedirect("reserve")}
        />
        <Box
          label="Historial"
          icon={<FormatListBulletedIcon style={{ color: "green" }} />}
          onClick={() => handleRedirect("reserve")}
        />
        <Box
          label="Contacto"
          icon={<AddIcCallIcon style={{ color: "blue" }} />}
          onClick={() => handleRedirect("reserve")}
        />
      </Row>
    </Container>
  );
};

export default Menu;

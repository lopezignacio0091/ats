import React, { useState } from "react";
import { ContainerSvg, Row, Section, StyledAccordion } from "./styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container } from "./styles";
import useReserveById from "../../../../hooks/query/useReserveById";
import { Chip } from "@mui/material";
import Detail from "./components/Detail/Detail";
import VisibilityIcon from "@mui/icons-material/Visibility";
import useStore from "../../User/store/useStore";
import { Reserve } from "../../../../types/Reserve";
const Trips = () => {
  const { data } = useReserveById();
  const [open, setOpen] = useState(false);
  const { setSelectReserve, setClearReserve } = useStore((state) => state);
  const handleModal = (e: any, reserve: Reserve) => {
    setOpen(true);
    e.stopPropagation();
    setSelectReserve(reserve);
  };

  return (
    <Container>
      {data &&
        data.map((trip) => {
          const colorChip = trip.status === "pending" ? "error" : "success";
          return (
            <StyledAccordion key={trip.id}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Row>
                  <Section>
                    <DateRangeIcon />
                    <Typography>{trip.created_at}</Typography>
                  </Section>
                  <VisibilityIcon onClick={(e) => handleModal(e, trip)} />
                  {/* <Chip
                    color={colorChip}
                    size="small"
                    label={trip.status.toUpperCase()}
                  /> */}
                </Row>
              </AccordionSummary>
              <AccordionDetails>
                <Row>
                  <Section>
                    <LocationOnIcon />
                    <Typography id="body">{trip.origin}</Typography>
                  </Section>
                  <ContainerSvg>
                    <AirportShuttleIcon />
                  </ContainerSvg>
                  <Section>
                    <LocationOnIcon />
                    <Typography id="body">{trip.destination}</Typography>
                  </Section>
                </Row>
              </AccordionDetails>
            </StyledAccordion>
          );
        })}
      <Detail open={open} onClose={() => setOpen(false)} />
    </Container>
  );
};

export default Trips;

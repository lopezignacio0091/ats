import React from "react";
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
const Trips = () => {
  const { data } = useReserveById();

  return (
    <Container>
      {data &&
        data.map((trip) => {
          const colorChip = trip.status === "pending" ? "error" : "success";
          return (
            <StyledAccordion>
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
                  <Chip
                    color={colorChip}
                    size="small"
                    label={trip.status.toUpperCase()}
                  />
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
    </Container>
  );
};

export default Trips;

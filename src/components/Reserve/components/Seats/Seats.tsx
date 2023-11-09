import { Container, SeatRow, Seat } from "./styles";
import useStore from "../../store/useStore";
import React from "react";

const Seats = () => {
  const { van, seat: seatSelect } = useStore((state) => state.data);
  const { setSeat } = useStore((state) => state);

  return (
    <Container>
      <SeatRow>
        {van.seats?.map((seat) => {
          const selected = seatSelect.includes(seat.id);
          return (
            <Seat
              disabled={seat.status === "reserved"}
              key={seat.id}
              onClick={() => setSeat(seat.id)}
              selected={selected}
            >
              <span></span>
              {seat.seatNumber}
            </Seat>
          );
        })}
      </SeatRow>
    </Container>
  );
};

export default Seats;

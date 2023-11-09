import { useEffect, useState } from "react";
import useVanById from "../../hooks/mutation/useVanById";
import DatePicker from "../commons/DatePicker/DatePicker";
import MultiSelect from "../commons/MultiSelect/MultiSelect";
import Seats from "./components/Seats/Seats";
import useStore from "./store/useStore";
import {
  Box,
  Container,
  Dot,
  Row,
  SeatsContainer,
  SectionContainer,
  TicketInfo,
  Title,
} from "./styles";
import TextField from "@mui/material/TextField";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import useTours from "../../hooks/query/useTours";
import { Button } from "@mui/material";
import { SectionContent } from "./styles";
import SnackbarAlert from "../commons/Snackbar/Snackbar";
import useReserve from "../../hooks/mutation/useCreateReserve";
import useStoreLogin from "../Login/store/useStore";
import { useHistory } from "react-router";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { createPreferenceClient } from "../../client/createPreference";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
initMercadoPago("TEST-77223100-ad89-4f69-8d1e-7608463dcd9d");

const Reserve = () => {
  const { user } = useStoreLogin((state) => state);
  const [loading, setLoading] = useState(false);
  const { tour, date, van, seat } = useStore((state) => state.data);
  const { setTour, setDate, setVan, setClearStore } = useStore(
    (state) => state
  );
  const { data: tours, isLoading } = useTours();
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [preferenceId, setPreferenceId] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const [loadingPreference, setLoadingPreference] = useState(false);

  const history = useHistory();
  const { mutateAsync } = useVanById();
  const {
    mutate: createReserve,
    isSuccess: isSuccesCreate,
    isError,
    isLoading: isLoadingReserve,
  } = useReserve();

  useEffect(() => {
    let timeoutId: any;
    if (isSuccesCreate) {
      timeoutId = setTimeout(() => {
        setClearStore();
        history.push("/home"), 5000;
      });
    }
    return () => timeoutId && clearTimeout(timeoutId);
  }, [isSuccesCreate]);

  const handleTour = async (tour: any) => {
    const tourSelect: any = tours && tours.find((op) => op.id === tour);
    try {
      setLoading(true);
      const van = await mutateAsync(tourSelect);
      setTour(tourSelect);
      setVan(van);
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return "Cargando Tours..";

  const handleSubmit = () => {
    createReserve(
      { userId: user.id, tourId: tour.id, seatId: seat, date },
      {
        onSuccess: ({ message }) => {
          setStatus("success");
          setMessage(message);
          setOpen(true);
        },
        onError: () => {
          setStatus("error");
          setMessage("Error al crear la reserva");
          setOpen(true);
        },
      }
    );
  };

  const handleOnReady = () => {
    setIsReady(true);
  };

  const payloadPreference = () => {
    return [
      {
        title: tour.origin,
        unit_price: 3500,
        quantity: 1,
        id: tour.id,
      },
    ];
  };

  const createPreference = async () => {
    try {
      setLoadingPreference(true);
      const id = await createPreferenceClient({
        data: payloadPreference(),
      });
      if (id) setPreferenceId(id);
    } catch (error) {
      console.log("error al llamar a mercado pago");
    } finally {
      setLoadingPreference(false);
    }
  };

  return (
    <Container>
      <SectionContent>
        <Box style={{ maxHeight: "400px" }}>
          <Title>Comprar</Title>
          <MultiSelect
            options={tours || []}
            label="Seleccione un viaje"
            value={tour}
            onChange={handleTour}
            display="origin"
          />
          <TextField
            id="standard-basic"
            label="Destino"
            variant="standard"
            value={tours?.find((op) => op.id === tour.id)?.destination}
            placeholder="Destination"
            disabled
          />
          <DatePicker value={date} onChange={setDate} label="Select Date" />
        </Box>
        {loading && " ----- Cargando -----"}
        {van.seats.length > 0 && (
          <>
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
            <SectionContainer>
              <Row>
                <Button
                  variant="contained"
                  size="small"
                  disabled={!van || !seat || !date || isLoading}
                  onClick={createPreference}
                  startIcon={
                    loadingPreference ? (
                      <HourglassBottomIcon />
                    ) : (
                      <EventSeatIcon />
                    )
                  }
                >
                  Reservar
                </Button>
              </Row>
              <Row>
                {preferenceId && (
                  <Wallet
                    onReady={handleOnReady}
                    initialization={{ preferenceId, redirectMode: "modal" }}
                  />
                )}
              </Row>
            </SectionContainer>
          </>
        )}
      </SectionContent>
      <SnackbarAlert
        message={message}
        status={status}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </Container>
  );
};

export default Reserve;

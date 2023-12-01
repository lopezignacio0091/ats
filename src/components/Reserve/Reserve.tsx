import { useState } from "react";
import useStore from "./store/useStore";
import {
  Body,
  Box,
  Container,
  Footer,
  Row,
  SectionContainer,
  Title,
} from "./styles";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import { Alert, AlertTitle, Button } from "@mui/material";
import { SectionContent } from "./styles";
import useReserve from "../../hooks/mutation/useCreateReserve";
import useStoreLogin from "../Login/store/useStore";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import { createPreferenceClient } from "../../client/createPreference";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ChoseTour from "./Steps/ChoseTour/ChoseTour";
import { StepType } from "../commons/Stepper/types";
import ChooseSeat from "./Steps/ChoseSeat/ChooseSeat";
import StepperComponent from "../commons/Stepper/Stepper";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Details from "./Steps/Details/Details";
import PaymentIcon from "@mui/icons-material/Payment";
import useSetSeat from "../../hooks/mutation/useSetSeat";
initMercadoPago("TEST-77223100-ad89-4f69-8d1e-7608463dcd9d");

const Reserve = () => {
  const { user } = useStoreLogin((state) => state);
  const { tour, date, van, seat, checkDiff, alternativeDomicile } = useStore(
    (state) => state.data
  );
  const [preferenceId, setPreferenceId] = useState(null);
  const [loadingPreference, setLoadingPreference] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const { mutate: createReserve } = useReserve();
  const { mutate: setSeatStatus } = useSetSeat();

  const validateStepOne = () => {
    let validationErrors: string[] = [];
    if (!tour || !date || !van || (checkDiff && !alternativeDomicile))
      validationErrors.push("Complete los campos");
    return validationErrors;
  };

  const validateStepTwo = () => {
    let validationErrors: string[] = [];
    if (seat.length === 0) validationErrors.push("Complete los campos");
    return validationErrors;
  };

  const steps: StepType[] = [
    {
      index: 0,
      component: <ChoseTour />,
      displayName: "Selecciona tu destino",
      validationErrors: validateStepOne(),
      completed: !(validateStepOne().length > 0),
    },
    {
      index: 1,
      component: <ChooseSeat />,
      displayName: "Selecciona tu asiento",
      validationErrors: validateStepTwo(),
      completed: activeStep > 0 && !(validateStepTwo().length > 0),
    },
    {
      index: 2,
      component: <Details />,
      displayName: "Detalles",
      validationErrors: [],
    },
  ];

  const handleSubmit = () => {
    createReserve(
      {
        userId: user.id,
        tourId: tour?.id,
        seatId: seat,
        date,
        alternativeDomicile: checkDiff ? alternativeDomicile : user.domicile,
      },
      {
        onSuccess: ({ id }) => {
          localStorage.setItem("reserveId", id);
          for (let i = 0; seat.length < i; i++) {
            setSeatStatus({ id: seat[i], status: "reserve" });
          }
        },
      }
    );
  };

  const payloadPreference = () => {
    return [
      {
        title: tour?.origin,
        unit_price: seat.length * tour?.price!,
        quantity: 1,
        id: tour?.id,
      },
    ];
  };

  const createPreference = async () => {
    try {
      handleSubmit();
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
  const nextStep = activeStep !== 2;
  const validationErrors = steps[activeStep].validationErrors;
  const enabledNextStep = validationErrors.length === 0;

  return (
    <Container>
      <Title>Comprar</Title>
      <SectionContent>
        <Box>
          <StepperComponent
            steps={steps}
            activeStep={activeStep}
            completed={activeStep === 2}
          />
          <Body>{steps[activeStep].component}</Body>
          <Footer>
            <SectionContainer>
              {!preferenceId ? (
                <>
                  <Row>
                    <Button
                      variant="outlined"
                      size="small"
                      disabled={activeStep === 0}
                      onClick={() => setActiveStep((step) => step - 1)}
                      startIcon={<ArrowBackIcon />}
                    >
                      Atrás
                    </Button>
                  </Row>
                  <Row>
                    <Button
                      variant="contained"
                      size="small"
                      disabled={!enabledNextStep}
                      onClick={() =>
                        nextStep
                          ? setActiveStep((step) => step + 1)
                          : createPreference()
                      }
                      startIcon={
                        loadingPreference ? (
                          <HourglassBottomIcon />
                        ) : nextStep ? (
                          <NavigateNextIcon />
                        ) : (
                          <EventSeatIcon />
                        )
                      }
                    >
                      {nextStep ? "Siguiente" : "Comprar"}
                    </Button>
                  </Row>
                </>
              ) : (
                <Row>
                  <Wallet
                    initialization={{ preferenceId, redirectMode: "self" }}
                  />
                </Row>
              )}
            </SectionContainer>
          </Footer>
        </Box>
      </SectionContent>
    </Container>
  );
};

export default Reserve;

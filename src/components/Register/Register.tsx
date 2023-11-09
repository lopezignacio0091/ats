import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  ContainerInfo,
  Title,
} from "./styles";
import { Button, TextField } from "@mui/material";
import { useHistory } from "react-router";
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoIcon from "@mui/icons-material/Info";
import ErrorIcon from "@mui/icons-material/Error";

import useRegister from "../../hooks/mutation/useRegister";
import useStore from "./store/useStore";
import { Status } from "./store/types";
import { orange } from "@mui/material/colors";
import Loading from "../commons/Loading/Loading";
import SnackbarAlert from "../commons/Snackbar/Snackbar";
const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const { setMessage, message, status } = useStore((state) => state);
  const [error, setError] = useState("");
  const [errorNotEquals, setErrorNotEquals] = useState("");
  const [open, setOpen] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const { mutate, isSuccess, isError, isLoading } = useRegister();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "password" || (name === "confirmPassword" && errorNotEquals)) {
      setErrorNotEquals("");
    }
    setUser({ ...user, [name]: value });
  };
  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const validate = () => {
    let isError = false;
    if (!isValidEmail(user.email)) {
      setError("Email es invalido");
      isError = true;
    }
    if(user.password.length <  8){
      setErrorNotEquals("La password tiene que ser mayor a 8");
      isError = true;
    }
    if (user.password !== user.confirmPassword) {
      setErrorNotEquals("Las password no coinciden");
      isError = true;
    }
    return isError;
  };

  const handleSubmit = () => {
    if (validate()) return;
    setShowLoading(true);
    mutate(user, {
      onSuccess: ({ message }) => {
         setShowLoading(false)
        setMessage(message, Status.SUCCCES);
        setOpen(true);
      },
      onError: () => {
        setShowLoading(false)
        setMessage("Error en el registro", Status.ERROR);
        setOpen(true);
      },
    });
  };

  const helperInfo = () => {
    return (
      <ContainerInfo>
        <InfoIcon sx={{ fontSize: 16, color: orange[400] }} />
        La password tiene que contener minimo 8 caracteres
      </ContainerInfo>
    );
  };

  const helperError = () => {
    if (!errorNotEquals) return null;
    return (
      <ContainerInfo>
        <ErrorIcon sx={{ fontSize: 16, color: error }} />
        {errorNotEquals}
      </ContainerInfo>
    );
  };

  useEffect(() => {
    let timeoutId: any;
    if (isSuccess) {
      timeoutId = setTimeout(() => history.push("/login"), 3200);
    }
    return () => timeoutId && clearTimeout(timeoutId);
  }, [isSuccess]);

  return (
    <Container>
      <Card>
        <CardHeader>
          <Title>REGISTRO</Title>
        </CardHeader>
        <CardBody>
          <div>
            <TextField
              label="Nombre"
              size="small"
              onChange={handleChange}
              name="name"
              fullWidth
              variant="standard"
            />
          </div>
          <div>
            <TextField
              label="Email"
              size="small"
              onChange={handleChange}
              name="email"
              fullWidth
              variant="standard"
              error={!!error}
              helperText={error}
            />
          </div>
          <div>
            <TextField
              label="Password"
              size="small"
              name="password"
              onChange={handleChange}
              fullWidth
              variant="standard"
              type="password"
              error={!!errorNotEquals}
              helperText={helperError() || helperInfo()}
            />
          </div>
          <div>
            <TextField
              label="Confirm Password"
              size="small"
              name="confirmPassword"
              onChange={handleChange}
              fullWidth
              variant="standard"
              type="password"
              error={!!errorNotEquals}
              helperText={helperError() || helperInfo()}
            />
          </div>
        </CardBody>
        {isLoading || showLoading && <Loading />}
        <CardFooter>
          <Button
            variant="contained"
            size="small"
            disabled={!user.email || !user.password || isLoading}
            onClick={handleSubmit}
            startIcon={<PersonIcon />}
          >
            Ingresar
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => history.push("/login")}
            color="primary"
            startIcon={<ArrowBackIcon />}
          >
            Atras
          </Button>
        </CardFooter>
      </Card>
      <SnackbarAlert
        message={message}
        status={status}
        open={open}
        handleClose={() => setOpen(false)}
      />
    </Container>
  );
};

export default Register;

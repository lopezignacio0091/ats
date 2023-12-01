import React, { useState } from "react";
import {
  Container,
  Card,
  CardHeader,
  Title,
  CardBody,
  CardFooter,
  ContainerSvg,
  Image,
  Text,
  ContainerPass,
  ContainerInfo,
} from "./styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useLogin from "../../hooks/mutation/useLogin";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router";
import ErrorIcon from "@mui/icons-material/Error";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const mutation = useLogin();
  const history = useHistory();

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    setError("");
    if (!isValidEmail(user.email)) {
      setError("Email is invalid");
      return;
    }
    mutation.mutate(user);
  };

  const handleError = () => {
    if (mutation.error instanceof Error)
      return "Datos incorrectos o el usuario no existe";
  };

  const TITLE = "ADVANCED \n TRAVEL";

  const helperError = () => {
    return (
      <ContainerInfo>
        <ErrorIcon sx={{ fontSize: 16, color: error }} />
        El usuario no existe o la contraseña es incorrecta.
      </ContainerInfo>
    );
  };

  return (
    <Container>
      <Image />
      <Card>
        <CardHeader>
          <Title>{TITLE}</Title>
        </CardHeader>
        <CardBody>
          <div>
            <TextField
              label="Email"
              size="small"
              onChange={handleChange}
              name="email"
              fullWidth
              variant="standard"
            />
          </div>
          {error && <span style={{ color: "red" }}>{error}</span>}
          <ContainerPass>
            <TextField
              label="Password"
              size="small"
              name="password"
              onChange={handleChange}
              fullWidth
              variant="standard"
              type="password"
            />
            <Text>Olvidé la contraseña</Text>
          </ContainerPass>
        </CardBody>

        {mutation.isLoading && (
          <ContainerSvg>
            <AirportShuttleIcon />
          </ContainerSvg>
        )}
        {mutation.isError && helperError()}
        <CardFooter>
          <Button
            variant="contained"
            size="small"
            disabled={!user.email || !user.password}
            onClick={() => handleSubmit()}
            startIcon={<LoginIcon />}
          >
            Ingresar
          </Button>
          <Button
            variant="outlined"
            size="small"
            onClick={() => history.push("/register")}
            color="primary"
            startIcon={<PersonIcon />}
          >
            Resgistrarme
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Login;

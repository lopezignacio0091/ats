import { BoxProps } from "./types";
import { Container, Label } from "./styles";

const Box = ({ label, icon , onClick }: BoxProps) => {
  return (
    <Container onClick={onClick}>
      {icon}
      <Label>{label}</Label>
    </Container>
  );
};

export default Box;

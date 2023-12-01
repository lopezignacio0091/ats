import NotData from "../../../assets/notData.jpg";
import { EmptyStateContainer, Title } from "./EmptyState.styled";

const EmptyState = () => {
  return (
    <EmptyStateContainer>
      <img src={NotData} alt="My Image" height={300} width={300}/>
      <Title>No hay compras disponibles...</Title>
    </EmptyStateContainer>
  );
};

export default EmptyState;

import MultiSelect from "../../../commons/MultiSelect/MultiSelect";
import useTours from "../../../../hooks/query/useTours";
import useStoreLogin from "../../../Login/store/useStore";
import { Container } from "./styles";

const Filter = () => {
  const { data: tours } = useTours();
  const { id } = useStoreLogin((state) => state.user);
  const myTours = tours?.filter((current) => current.driverId === id);

  return (
    <Container>
      <MultiSelect
        options={myTours || []}
        label="Mis recorridos"
        value={""}
        onChange={()=> console.log()}
        display="origin"
      />
    </Container>
  );
};

export default Filter;

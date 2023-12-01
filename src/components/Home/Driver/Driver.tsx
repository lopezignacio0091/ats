import Table from "./Table/Table";
import Filter from "./Filter/Filter";
import { Container } from "./styles";
import Detail from "./Detail/Detail";
import useStore from "./store/useStore";

const Driver = () => {
  const { open, setOpen } = useStore((state) => state);

  return (
    <Container>
      <Filter />
      <Table />
      {open && <Detail open={open} onClose={setOpen} />}
    </Container>
  );
};

export default Driver;

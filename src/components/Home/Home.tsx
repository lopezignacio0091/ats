import { Container } from "./styles";
import useReserveById from "../../hooks/query/useReserveById";
import useTours from "../../hooks/query/useTours";
import useStore from "../Login/store/useStore";
import User from "./User/User";
import Driver from "./Driver/Driver";
import useReservesByDriver from "../../hooks/query/useReservesByDriver";
const DRIVER = "driver";

const Home = () => {
  const { rol } = useStore((state) => state.user);
  const { isLoading: loadingReserves } =
    rol === DRIVER ? useReservesByDriver() : useReserveById();
    
  const { isLoading: loadingTours } = useTours();
  const isLoading = loadingReserves || loadingTours;
  if (isLoading) return "loading...";
  return <Container>{rol === DRIVER ? <Driver /> : <User />}</Container>;
};

export default Home;

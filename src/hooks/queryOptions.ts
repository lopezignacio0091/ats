import { getTours } from "../client/getTours";
import useStore from "../components/Login/store/useStore";
import { RESERVE_BY_ID, TOURS } from "./queryNames";
import { getReserveById } from "../client/getReserveById";

export const useToursOptions = () => {
  const queryKey = [TOURS];
  const queryFn = () => getTours();
  return { queryKey, queryFn };
};

export const useReserveByIdOptions = () => {
  const { user } = useStore((state) => state);
  const queryKey = [RESERVE_BY_ID];
  const queryFn = () => getReserveById(user.id);
  return { queryKey, queryFn };
};

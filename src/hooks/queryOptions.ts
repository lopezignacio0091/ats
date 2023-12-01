import { getTours } from "../client/getTours";
import useStore from "../components/Login/store/useStore";
import { RESERVE_BY_ID, TOURS, VAN_ID, RESERVES_DRIVER } from "./queryNames";
import { getReserveById } from "../client/getReserveById";
import reserveStore from "../components/Reserve/store/useStore";
import { getVansById } from "../client/getVansById";
import { getReserveByDriver } from "../client/getReserveByDriver";

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

export const useVansById = () => {
  const { tour } = reserveStore((state) => state.data);
  const queryKey = [VAN_ID, tour];
  const queryFn = () => getVansById(tour?.vanId || "");
  return { queryKey, queryFn };
};

export const useReservesDriverOptions = () => {
  const { id } = useStore((state) => state.user);
  const queryKey = [RESERVES_DRIVER];
  const queryFn = () => getReserveByDriver(id);
  return { queryKey, queryFn };
};

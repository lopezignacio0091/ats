import { useQuery } from "@tanstack/react-query";
import { useReservesDriverOptions } from "../queryOptions";
const CACHE_TIME = 60 * 1000; //1 min
const useReservesByDriver = () => {
  const options = useReservesDriverOptions();
  const reservesDriverQueryResult = useQuery({
    ...options,
    cacheTime: CACHE_TIME,
    refetchInterval: CACHE_TIME,
    refetchOnMount: false,
  });

  return reservesDriverQueryResult;
};

export default useReservesByDriver;

import { useQuery } from "@tanstack/react-query";
import { useReserveByIdOptions} from "../queryOptions";
const CACHE_TIME = 60 * 1000; //1 min
const useReserveById = () => {
  const options = useReserveByIdOptions();
  const reserveQueryResult = useQuery({
    ...options,
    cacheTime: CACHE_TIME,
    refetchInterval: CACHE_TIME,
    refetchOnMount: false,
  });

  return reserveQueryResult;
};

export default useReserveById;

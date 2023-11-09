import { useQuery } from "@tanstack/react-query";
import { useToursOptions } from "../queryOptions";
const CACHE_TIME = 60 * 1000; //1 min
const useTours = () => {
  const options = useToursOptions();
  const documentQueryResult = useQuery({
    ...options,
    cacheTime: CACHE_TIME,
    refetchInterval: CACHE_TIME,
    refetchOnMount: false,
  });

  return documentQueryResult;
};

export default useTours;

import { useQuery } from "@tanstack/react-query";
import { useVansById as queryOptions } from "../queryOptions";

const useVansById = () => {
  const options = queryOptions();
  const vansByIdQueryResult = useQuery({
    ...options,
    refetchOnMount: false,
  });

  return vansByIdQueryResult;
};

export default useVansById;

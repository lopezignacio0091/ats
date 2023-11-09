import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReserve } from "../../client/createReserve";
import { useReserveByIdOptions } from "../queryOptions";


const useCreateReserve = () => {
  const queryClient = useQueryClient();
  const { queryKey: reserveKey } = useReserveByIdOptions();

  const mutation = useMutation({
    mutationFn: createReserve,
    onSuccess: (data: any, variables, context) => {
      queryClient.refetchQueries(reserveKey);
    },
  });
  return mutation;
};

export default useCreateReserve;

import { useMutation } from "@tanstack/react-query";
import { setStatusSeat } from "../../client/setStatusSeat";

const useSetSeat = () => {
  const mutation = useMutation({
    mutationFn: setStatusSeat,
  });
  return mutation;
};

export default useSetSeat;

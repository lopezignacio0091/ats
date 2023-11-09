import { useMutation } from "@tanstack/react-query";
import api from "../../config/api";

type TourProps = {
  vanId: string;
};

const getVansById = async ({ vanId }: TourProps): Promise<User | null> => {
  const res = await api.get(`/vans/getAndSeatsById/${vanId}`);
  if (!res.data) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  return res.data;
};

const useVanById = () => {
  const mutation = useMutation({
    mutationFn: getVansById,
    onError: (error, variables, context) => {
      // An error happened!
      console.log(`rolling back optimistic update with id ${variables.vanId}`);
    },
    onSuccess: (data: any, variables, context) => {
      console.log(`onSucess ${data.id}`);
    },
  });
  return mutation;
};

export default useVanById;

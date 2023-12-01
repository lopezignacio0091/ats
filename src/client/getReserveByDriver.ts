import api from "../config/api";
import { ReserveByDriver } from "../types/ReserveByDriver";

export const getReserveByDriver = async (id: string): Promise<ReserveByDriver[]> => {
  const res = await api.get(`/driver/getTrips/${id}`);
  if (!res.data) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  return res.data;
};

import api from "../config/api";
import { Reserve } from "../types/Reserve";


export const getReserveById= async (id:string): Promise<Reserve[] | null> => {
    const res = await api.get(`/reserves/getById/${id}`);
    if (!res.data) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }
    return res.data;
  };
  
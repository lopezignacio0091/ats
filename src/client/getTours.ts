import api from "../config/api";
import { Tour } from "../types/Tours";

export const getTours= async (): Promise<Tour[] | null> => {
    const res = await api.get(`/tours/getAll`);
    if (!res.data) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }
    return res.data;
  };
  
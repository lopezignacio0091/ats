import api from "../config/api";

export const getVansById = async (vanId: string): Promise<any | null> => {
  const res = await api.get(`/vans/getAndSeatsById/${vanId}`);
  if (!res.data) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  return res.data;
};

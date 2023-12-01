import api from "../config/api";

export const setStatusReserve = async (id: string): Promise<any[] | null> => {
  const res = await api.put(`/reserves/setStatus/${id}`);
  if (!res.data) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  return res.data;
};

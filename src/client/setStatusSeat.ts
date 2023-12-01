import api from "../config/api";

export const setStatusSeat = async (data: any) => {
  const res = await api.put(`/seat/reserve:${data.id}`, data.status);
  if (!res.data) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  if (res.status !== 200) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  return res.data;
};

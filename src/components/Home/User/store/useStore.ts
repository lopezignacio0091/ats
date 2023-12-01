import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { Reserve } from "../../../../types/Reserve";
import { HomeStore } from "./types";

const INITIAL_RESERVE: Reserve = {
  id: "",
  userId: "",
  status: "",
  seatId: "",
  created_at: "",
  tourId: "",
  origin: "",
  destination: "",
  distance: "",
  rateId: "",
  vanId: "",
  price: 0,
};

const store = (set: any) => ({
  selectReserve: INITIAL_RESERVE,
  setSelectReserve: (reserve: Reserve) => {
    set((state: HomeStore) => {
      state.selectReserve = reserve;
    });
  },
  setClearReserve: () => {
    set((state: HomeStore) => {
      state.selectReserve = INITIAL_RESERVE;
    });
  },
});

const useStore = create<HomeStore>()(devtools(immer(store)));

export default useStore;

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { DataReserve, ReserveStore, Tour } from "./types";
import { Van } from "../../../types/Van";

const INITIAL_TOUR: Tour = {
  id: "",
  origin: "",
  destination: "",
  distance: "",
  rateId: "",
  vanId: "",
};

const INITIAL_VAN: Van = {
  id: "",
  name: "",
  patent: "",
  seats: [],
};

const INIITIAL_RESERVE: DataReserve = {
  tour: INITIAL_TOUR,
  seat: [],
  date: "",
  van: INITIAL_VAN,
};

const store = (set: any) => ({
  data: INIITIAL_RESERVE,
  setTour: (tour: Tour) => {
    set((state: ReserveStore) => {
      state.data.tour = tour;
    });
  },
  setDate: (date: string) => {
    set((state: ReserveStore) => {
      state.data.date = date;
    });
  },
  setSeat: (seatId: string) => {
    set((state: ReserveStore) => {
      state.data.seat = [...state.data.seat, seatId];
    });
  },
  setVan: (van: Van) => {
    set((state: ReserveStore) => {
      state.data.van = van;
    });
  },
  setClearStore: () => {
    set((state: ReserveStore) => {
      state.data = INIITIAL_RESERVE;
    });
  },
});

const useStore = create<ReserveStore>()(devtools(immer(store)));

export default useStore;

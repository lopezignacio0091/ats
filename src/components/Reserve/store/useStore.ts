import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { DataReserve, ReserveStore } from "./types";
import { Van } from "../../../types/Van";
import { Tour } from "../../../types/Tours";

const INITIAL_TOUR: Tour = {
  id: "",
  origin: "",
  destination: "",
  distance: "",
  rateId: "",
  vanId: "",
  driverId: "",
  name: "",
  email: "",
  price:0
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
  checkDiff: false,
  alternativeDomicile: "",
};

const store = (set: any) => ({
  data: INIITIAL_RESERVE,
  setTour: (tour: Tour | null) => {
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
      const isExist = state.data.seat.filter((seat) => seat === seatId);
      const newSeats = state.data.seat.filter(
        (seatSelect) => seatSelect !== seatId
      );
      state.data.seat =
        isExist.length > 0 ? newSeats : [...state.data.seat, seatId];
    });
  },
  setVan: (van: Van) => {
    set((state: ReserveStore) => {
      state.data.van = van;
    });
  },
  setAlternativeDomicile: (value: string) => {
    set((state: ReserveStore) => {
      state.data.alternativeDomicile = value;
    });
  },
  setcheckDiff: () => {
    set((state: ReserveStore) => {
      state.data.checkDiff = !state.data.checkDiff;
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

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { DriverStore } from "./types";

const store = (set: any) => ({
  open: false,
  openDetail: false,
  reserveId: "",
  setOpen: () => {
    set((state: DriverStore) => {
      state.open = !state.open;
    });
  },
  setReserveId: (id: string) => {
    set((state: DriverStore) => {
      state.reserveId = id;
      state.open = true;
    });
  },
  setOpenDetail: (status: boolean) => {
    set((state: DriverStore) => {
      state.openDetail = status;
    });
  },
});

const useStore = create<DriverStore>()(devtools(immer(store)));

export default useStore;

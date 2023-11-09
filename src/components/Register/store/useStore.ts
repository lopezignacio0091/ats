import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { RegisterStore, Status } from "./types";

const store = (set: any) => ({
  isMessage: false,
  message: "",
  status: Status.SUCCCES,
  setMessage: (message: string, status: Status) =>
    set((state: RegisterStore) => {
      set(() => {
        (state.isMessage = false),
          (state.message = message),
          (state.status = status);
      });
    }),
});

const useStore = create<RegisterStore>()(devtools(immer(store)));

export default useStore;

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const INITIAL_USER: User = {
  email: "",
  name: "",
  token: localStorage.getItem("token") || "",
  id: "",
  rol: "",
};
const store = (set: any) => ({
  auth: false,
  user: INITIAL_USER,
  setAuth: (user: User) => {
    set((state: LoginStore) => {
      (state.auth = true), (state.user = user);
    });
    localStorage.setItem("token", user.token);
  },
  logout: () =>
    set((state: LoginStore) => {
      set(() => {
        (state.auth = false), (state.user = INITIAL_USER);
      });
      localStorage.removeItem("token");
    }),
});

const useStore = create<LoginStore>()(devtools(immer(store)));

export default useStore;

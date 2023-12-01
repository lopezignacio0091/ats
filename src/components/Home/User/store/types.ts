import { Reserve } from "../../../../types/Reserve";

export interface HomeStore {
  selectReserve: Reserve;
  setSelectReserve: (reserve: Reserve) => void;
  setClearReserve: () => void;
}

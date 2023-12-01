import { Tour } from "../../../../types/Tours";

export interface DriverStore {
  open: boolean;
  openDetail:boolean;
  reserveId:string;
  setOpen: () => void;
  setReserveId: (id: string) => void;
  setOpenDetail: (status: boolean) => void;
}

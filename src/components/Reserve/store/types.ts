import { Seat } from "../../../types/Seat";
import { Van } from "../../../types/Van";

export interface Tour {
  id: string;
  origin: string;
  destination: string;
  distance: string;
  rateId: string;
  vanId: string;
}

export interface DataReserve {
  tour: Tour;
  seat: string[];
  date: string;
  van: Van;
}

export interface ReserveStore {
  data: DataReserve;
  setTour: (tour: Tour) => void;
  setDate: (date: string) => void;
  setSeat: (id: string) => void;
  setVan: (van: Van) => void;
  setClearStore:()=> void;
}

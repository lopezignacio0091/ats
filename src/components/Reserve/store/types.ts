import { Seat } from "../../../types/Seat";
import { Tour } from "../../../types/Tours";
import { Van } from "../../../types/Van";



export interface DataReserve {
  tour: Tour | null;
  seat: string[];
  date: string;
  van: Van;
  checkDiff:boolean;
  alternativeDomicile?:string;
}

export interface ReserveStore {
  data: DataReserve;
  setTour: (tour: Tour | null) => void;
  setDate: (date: string) => void;
  setSeat: (id: string) => void;
  setVan: (van: Van) => void;
  setAlternativeDomicile:(value:string)=> void; 
  setcheckDiff:()=> void; 
  setClearStore:()=> void;
}


export enum Status {
  ERROR = "error",
  SUCCCES = "success",
}


export interface RegisterStore {
    isMessage: boolean;
    message: string;
    setMessage: (msg: string , status:Status) => void;
    status: Status;
  }
  
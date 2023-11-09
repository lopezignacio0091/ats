import { Seat } from "./Seat";

export interface Van {
    id:string;
    name:string;
    patent:string;
    seats:Seat[]
}
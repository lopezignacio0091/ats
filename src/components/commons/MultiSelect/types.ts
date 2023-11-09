export interface MultiSelectProps {
    value: any;
    options:any[];
    onChange: (value: any) => void;
    key?:string;
    display?:string;
    label:string;
}
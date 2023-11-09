export interface SnackBarProps{
    message: string;
    status:any; 
    handleClose : ()=> void;
    open:boolean;
}
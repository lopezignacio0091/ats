export interface DatePickerProps {
  name?: string;
  label: string;
  value: Date | any;
  onChange?: (value: string) => void;
  disabled?:boolean
}

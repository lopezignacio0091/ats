type Status = 'success' | 'info' | 'warning' | 'error';

export interface AlertComponentProps {
  title: string;
  message: string;
  icon?: React.ReactNode;
  status?:Status;
}

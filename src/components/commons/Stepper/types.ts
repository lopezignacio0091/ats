export interface StepperProps {
  activeStep: number;
  steps: StepType[];
  completed:boolean;
}

export interface StepType {
    index: number;
    component: React.ReactNode;
    validationErrors: string[];
    displayName: string;
    completed?:boolean;
  }
import { StepperProps } from "./types";
import { Step, StepLabel, Stepper } from "@mui/material";

const StepperComponent = ({ steps, activeStep, completed }: StepperProps) => {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step) => {
        return (
          <Step key={step.index} completed={step.completed}>
            <StepLabel>{step.displayName}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default StepperComponent;

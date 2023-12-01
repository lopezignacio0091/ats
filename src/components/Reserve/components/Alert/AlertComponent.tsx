import { AlertTitle, Alert } from "@mui/material";
import { AlertComponentProps } from "./types";

const AlertComponent = ({
  title,
  message,
  icon,
  status = "info",
}: AlertComponentProps) => {
  return (
    <Alert severity={status}>
      <AlertTitle>
        <strong style={{ alignItems: "center", display: "flex", gap: "4px" }}>
          {title}
          {icon && icon}
        </strong>
      </AlertTitle>
      {message}
    </Alert>
  );
};

export default AlertComponent;

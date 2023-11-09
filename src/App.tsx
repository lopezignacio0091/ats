import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import MainRoute from "./routes/MainRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeContext } from "./theme/ThemeProvider";
import './theme/variables.css';
setupIonicReact();

const App = () => {
  const { actualTheme } = useContext(ThemeContext);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <ThemeProvider theme={actualTheme}>
        <IonApp>
          <IonReactRouter>
            <MainRoute />
          </IonReactRouter>
        </IonApp>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;

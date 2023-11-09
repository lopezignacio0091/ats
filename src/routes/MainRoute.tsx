import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/Login/Login";
import Nav from "../components/commons/Nav/Nav";
import useStore from "../components/Login/store/useStore";
import { useEffect } from "react";
import Home from "../components/Home/Home";
import Reserve from "../components/Reserve/Reserve";
import Register from "../components/Register/Register";
import Success from "../components/Reserve/components/Success/Success";

const MainRoute = () => {
  const { auth , user} = useStore((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (auth) {
      history.push("/home");
    } else {
      history.push("/login");
    }
  }, [auth]);

  // useEffect(() => {
  //   if (user.token && !user.email) {

  //   }
  // }, [user.token]);
  
  return (
    <>
      {auth && <Nav />}
          <IonSplitPane contentId="main">
            <IonRouterOutlet id="main">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <ProtectedRoute
                children={<Home />}
                isAuthenticated={auth}
                path="/home"
              />
              <ProtectedRoute
                children={<Reserve />}
                isAuthenticated={auth}
                path="/reserve"
              />
              <ProtectedRoute
                children={<Success />}
                isAuthenticated={auth}
                path="/reserve/success"
              />
              <Redirect exact from="/" to="/login" />
            </IonRouterOutlet>
          </IonSplitPane>
    </>
  );
};

export default MainRoute;

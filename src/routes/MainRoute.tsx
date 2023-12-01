import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route, useHistory } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/Login/Login";
import Nav from "../components/commons/Nav/Nav";
import useStore from "../components/Login/store/useStore";
import { useEffect, useState } from "react";
import Home from "../components/Home/Home";
import Reserve from "../components/Reserve/Reserve";
import Register from "../components/Register/Register";
import Success from "../components/Reserve/components/Success/Success";
import api from "../config/api";
import PublicRoute from "./PublicRoute";
import Splash from "../components/commons/Splash/Splash";

const MainRoute = () => {
  const { auth, user, setUser, logout } = useStore((state) => state);
  const [loading, setLoading] = useState(!auth ? false : true);

  useEffect(() => {
    if (user.token && !user.email) {
      getUserToken();
    }
  }, [user.email]);

  const getUserToken = async () => {
    try {
      setLoading(true);
      const res = await api.get("http://localhost:4000/api/users/user");
      if (res.status !== 200) throw new Error("Failed to fetch");
      setUser(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          {auth && <Nav />}
          <IonSplitPane contentId="main">
            <IonRouterOutlet id="main">
              <PublicRoute
                path="/login"
                children={<Login />}
                isAuthenticated={auth}
              />
              <PublicRoute
                path="/register"
                children={<Register />}
                isAuthenticated={auth}
              />
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
                isAuthenticated={true}
                path="/reserve/success"
              />
              <Redirect exact from="/" to="/login" />
            </IonRouterOutlet>
          </IonSplitPane>
        </>
      )}
    </>
  );
};

export default MainRoute;

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';




const MainRoute = () => {


  const login = () => <div> login</div>

  return (
    <>
      {/* {auth && <Menu />} */}
      <Router>
      <Switch>
        <Route path="/login" component={login} />
        <ProtectedRoute
          path="/"
          children={<div>home</div>}
          isAuthenticated={false}
        />
        {/* <Redirect from="/" to="/login" /> */}
      </Switch>
    </Router>
    </>
  );
};

export default MainRoute;

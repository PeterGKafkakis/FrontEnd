import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useState, useEffect } from "react";

import Register from "./components/home/auth/register/index";
import Login from "./components/home/auth/login/index";
import Dashboard from "./pages/dashboard";
import PrivateRoute from "./privateRoutes/authRoute";
import axios from "axios";

import { LoginContext } from "./contexts/LoginContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoaded] = useState(true);

  useEffect(() => {
    axios.get("/check").then(
      (response) => {
        setIsAuthenticated(true);
        setIsLoaded(false);
        console.log(response);
      },
      (error) => {
        setIsAuthenticated(false);
        setIsLoaded(false);
        console.log(error);
      }
    );
  }, []);

  return (
    <Router>
      <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Switch>
          <Route exact path='/' component={Register} />
          <Route
            exact
            path='/login'
            render={(props) =>
              !isAuthenticated ? (
                <Login {...props} />
              ) : (
                <Redirect to='/dashboard' />
              )
            }
          />
          <Route
            exact
            path='/register'
            render={(props) =>
              !isAuthenticated ? (
                <Register {...props} />
              ) : (
                <Redirect to='/login' />
              )
            }
          />

          <PrivateRoute
            authed={isAuthenticated}
            isLoading={isLoading}
            path='/dashboard'
            component={Dashboard}
          />
        </Switch>
      </LoginContext.Provider>
    </Router>
  );
}

export default App;

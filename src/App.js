import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { useState, useEffect } from "react";
import useSWR, { SWRConfig } from "swr";
import Register from "./components/home/auth/register/index";
import Login from "./components/home/auth/login/index";
import Dashboard from "./pages/dashboard";

import axios from "axios";
import DashboardHome from "./components/dashboard/dashboardHome";
import DashboardMotivation from "./components/dashboard/dashboardMotivation";
import { LoginContext } from "./contexts/LoginContext";

import SideBar from "./components/dashboard/sidebar";
import Display from "./components/dashboard/display";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get("/check").then(
      (response) => {
        setIsAuthenticated(true);
        setIsLoaded(true);
        console.log(response);
      },
      (error) => {
        setIsAuthenticated(false);
        setIsLoaded(true);
        console.log(error);
      }
    );
  }, []);

  return (
    <Router>
      <LoginContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Switch>
          <Route exact path='/' component={DashboardHome} />
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
        </Switch>

        <Dashboard />
      </LoginContext.Provider>
    </Router>
  );
}

export default App;

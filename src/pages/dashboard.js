import SideBar from "../components/dashboard/sidebar";
import Display from "../components/dashboard/display";
import DashboardHome from "../components/dashboard/dashboardHome";
import DashboardMotivation from "../components/dashboard/dashboardMotivation";
import { Switch, Route } from "react-router-dom";
const Dashboard = (props) => {
  return (
    <div>
      <SideBar />
      <Display>
        <Switch>
          <Route exact path='/dashboard' component={DashboardHome} />
          <Route
            path='/dashboard/motivational-videos'
            component={DashboardMotivation}
          />
        </Switch>
      </Display>
    </div>
  );
};

export default Dashboard;


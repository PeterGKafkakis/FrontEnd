import { Container } from "./styles/index";
import MotivationalMonday from "./dashboardMotivation";
import Display from "./display";
import DashboardSideNav from "./sidebar";



const DashboardBody = () => {
  return (
    <Container>
      <DashboardSideNav></DashboardSideNav>
      <Display></Display>
    </Container>
  );
};

export default DashboardBody;

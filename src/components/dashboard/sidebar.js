import {
  DashboardSideBar,
  LogoHeader,
  SideListContainer,
  SideListItems,
} from "./styles/sidebar";
import { LoginContext } from "../../contexts/LoginContext";
import axios from "axios";
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useContext } from "react";

const DashboardSideNav = () => {
  let history = useHistory();
  const { setIsAuthenticated } = useContext(LoginContext);

  const handleClick = async () => {
    axios.get("/logout").then(
      (response) => {
        setIsAuthenticated(false);
        console.log(response);
        history.push("/");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <DashboardSideBar>
      <LogoHeader>HEIGHT</LogoHeader>

      <SideListContainer>
        <SideListItems>Home</SideListItems>
        <SideListItems>Motivational Video Guides</SideListItems>
        <SideListItems>Onboarding Video Guides</SideListItems>
        <SideListItems>On Demand Library </SideListItems>
        <SideListItems>Monday Motivation </SideListItems>
        <SideListItems>Favorite Books </SideListItems>
        <SideListItems>Agent Only Tab </SideListItems>
        <button onClick={handleClick}>Logout</button>
      </SideListContainer>
    </DashboardSideBar>
  );
};

export default DashboardSideNav;

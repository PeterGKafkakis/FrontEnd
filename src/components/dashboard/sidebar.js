import {
  DashboardSideBar,
  LogoHeader,
  SideListContainer,
  SideListItems,
} from "./styles/sidebar";
import { LoginContext } from "../../contexts/LoginContext";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
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
        <SideListItems>
          <Link to='/dashboard'>Home</Link>
        </SideListItems>
        <SideListItems>
          <Link to='/dashboard/motivational-videos'>
            Motivational Video Guides
          </Link>
        </SideListItems>
        <SideListItems>
          <Link to='/dashboard/onboarding'>Onboarding Video Guides</Link>
        </SideListItems>
        <SideListItems>
          <Link to='/dashboard/library'>On Demand Library</Link>
        </SideListItems>
        <SideListItems>
          <Link to='/dashboard/monday-motivation'>Monday Motivation</Link>
        </SideListItems>
        <SideListItems>
          <Link to='/dashboard/favorite-books'>Favorite Books</Link>
        </SideListItems>
        <SideListItems>
          <Link to='/dashboard/agent-only-access'>Agent Only Access </Link>
        </SideListItems>

        <button onClick={handleClick}>Logout</button>
      </SideListContainer>
    </DashboardSideBar>
  );
};

export default DashboardSideNav;

import styled from "styled-components";

export const DashboardSideBar = styled.div`
  position: fixed;
  height: 100%;
  width: 15%;
  background-color: white;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;

export const LogoHeader = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  color: black;
  border-bottom: none;
`;

export const SideListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10vh;
  padding: 0;
  text-align: center;
  text-decoration: none;
  list-style: none;
`;

export const SideListItems = styled.li`
  font-size: 20px;
  margin-top: 2vh;
  line-height: normal;
  color: black;
`;

import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem
} from "cdbreact";
import { NavLink } from "react-router-dom";
// import Dashboard from "./dashboard"

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            WOW
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/WOW Users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">WOW Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Video Clips" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Video Clips</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/ Reported Content"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">
                Reported Content
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Category" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Category</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Info Page" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Info Page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/FAQ" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">FAQ</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact
              to="/Push Notification"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="user">
                Push Notification
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Internal User" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Internal User
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px"
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

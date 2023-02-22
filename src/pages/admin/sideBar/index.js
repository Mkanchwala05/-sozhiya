import React from "react";
import { Nav } from "react-bootstrap";
import "../../../assets/styles/sidebar.scss";
import { RxDashboard } from "react-icons/rx";
import { RiLogoutCircleLine } from "react-icons/ri";

const DashboardsideBar = () => {
    return(
        <>
        <Nav defaultActiveKey="/home" className="flex-column sidebra-ui">
            <Nav.Link href="/home"> <RxDashboard/> Dashboard</Nav.Link>
            <Nav.Link className="mt-auto mb-0" href="/">  <RiLogoutCircleLine/> Logout</Nav.Link>
        </Nav>
        </>
    );
}
export default DashboardsideBar;
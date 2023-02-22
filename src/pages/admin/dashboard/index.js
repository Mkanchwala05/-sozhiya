import { Col, Row } from "react-bootstrap";
import Header from "../../components/header";
import DashboardsideBar from "../sideBar";
import "../../../assets/styles/dashboard.scss"
import DashboardHome from "../dashboardHome";

const Dashboard = () => {
    return(
        <div className="dashboard-ui">
            <Col md="12">
                <Header/>
            </Col>
            <Row className="dashboard-body">                
                    <DashboardsideBar/>
                <Col className="px-0">
                    <DashboardHome/>
                </Col>
            </Row>

        </div>
    );
}

export default Dashboard;

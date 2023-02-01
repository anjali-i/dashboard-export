import "./styles.css";
import Sidebar from "./sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Col, Row } from "reactstrap";
import Dashboard from "./dashboard";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Container>
          <Row>
            <Col xs={3}>
              <Sidebar></Sidebar>
            </Col>
            <Col xs={9}>
              <Dashboard></Dashboard>
            </Col>
          </Row>
          {/* <Sidebar/ > */}
        </Container>
      </div>
    </Router>
  );
}

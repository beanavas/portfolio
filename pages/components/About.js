import Aboutcard from "./Aboutcard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import propic from "../../public/propic.png";
import "bootstrap/dist/css/bootstrap.min.css";


export default function About({ darkMode, toggleDarkMode }) {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            className="about-img d-flex justify-content-center align-items-center"
            style={{ paddingTop: "120px", paddingBottom: "50px", marginLeft: "-50px", marginTop: "280px"}}
        >
        <Image 
            src="/propic.png" 
            alt="about" 
            width={300} 
            height={300} 
            className="img-fluid rounded" 
        />
        </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

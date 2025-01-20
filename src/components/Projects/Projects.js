import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wuzzufDataset from "../../Assets/Projects/wuzzuf-dataset.png";
import titanic from "../../Assets/Projects/titanic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wuzzufDataset}
              title="Wuzzuf.net Job Postings Dataset"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              kaggleLink="https://www.kaggle.com/datasets/ahmedosamamath/wuzzuf-dataset"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={titanic}
              title="Titanic Survival Prediction"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              kaggleLink="https://www.kaggle.com/code/ahmedosamamath/titanic-survival-prediction"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

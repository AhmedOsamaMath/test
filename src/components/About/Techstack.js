import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaRProject } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import {
  DiPython,
  DiJavascript1,
  DiPhp,

  DiMongodb,
} from "react-icons/di";
import {
  SiMysql,
  SiPostgresql,

  SiPandas,
  SiNumpy,

  SiPlotly,
  SiTableau,

  SiScikitlearn,
  SiScipy,
  SiKeras,
  SiTensorflow,
  SiPytorch,

  SiStreamlit,
  SiFlask,
  SiDash,

  SiApachespark,
  SiApachehadoop,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaRProject />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <RiFileExcel2Fill />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPlotly />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScipy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDash />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiApachespark />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachehadoop />
      </Col>
    </Row>
  );
}

export default Techstack;

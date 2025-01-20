import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaRProject } from "react-icons/fa";
import { RiFileExcel2Fill } from "react-icons/ri";
import { DiPython, DiJavascript1, DiPhp, DiMongodb } from "react-icons/di";
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

const TechCategory = ({ title, children }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <Row className="justify-center pb-4">
      {children}
    </Row>
  </div>
);

const TechIcon = ({ children }) => (
  <Col xs={4} md={2} className="tech-icons">
    {children}
  </Col>
);

function Techstack() {
  return (
    <div className="p-4">
      <TechCategory title="Programming Languages">
        <TechIcon><DiPython /></TechIcon>
        <TechIcon><FaRProject /></TechIcon>
        <TechIcon><DiJavascript1 /></TechIcon>
        <TechIcon><DiPhp /></TechIcon>
      </TechCategory>

      <TechCategory title="Databases">
        <TechIcon><SiMysql /></TechIcon>
        <TechIcon><SiPostgresql /></TechIcon>
        <TechIcon><DiMongodb /></TechIcon>
      </TechCategory>

      <TechCategory title="Data Processing & Analysis">
        <TechIcon><SiPandas /></TechIcon>
        <TechIcon><SiNumpy /></TechIcon>
        <TechIcon><RiFileExcel2Fill /></TechIcon>
      </TechCategory>

      <TechCategory title="Data Visualization">
        <TechIcon><SiPlotly /></TechIcon>
        <TechIcon><SiTableau /></TechIcon>
      </TechCategory>

      <TechCategory title="Machine Learning & AI">
        <TechIcon><SiScikitlearn /></TechIcon>
        <TechIcon><SiScipy /></TechIcon>
        <TechIcon><SiKeras /></TechIcon>
        <TechIcon><SiTensorflow /></TechIcon>
        <TechIcon><SiPytorch /></TechIcon>
      </TechCategory>

      <TechCategory title="Web Frameworks">
        <TechIcon><SiStreamlit /></TechIcon>
        <TechIcon><SiFlask /></TechIcon>
        <TechIcon><SiDash /></TechIcon>
      </TechCategory>

      <TechCategory title="Big Data">
        <TechIcon><SiApachespark /></TechIcon>
        <TechIcon><SiApachehadoop /></TechIcon>
      </TechCategory>
    </div>
  );
}

export default Techstack;
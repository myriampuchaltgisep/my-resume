import React from "react";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import PropTypes from "prop-types";
import Description from "./Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Footer from "./Footer";

interface ResumeProps {
  content: any;
}
const Resume = ({ content }: ResumeProps) => {
  const downloadCV = () => {
    fetch(process.env.PUBLIC_URL + "/cv.pdf")
      .then((response) => response.blob())
      .then((blobFile) => {
        // Convert your blob into a Blob URL (a special url that points to an object in the browser's memory)
        const blobUrl = URL.createObjectURL(blobFile);

        // Create a link element
        const link = document.createElement("a");

        // Set link's href to point to the Blob URL
        link.href = blobUrl;
        link.download = "Myriam-Puchalt-CV.pdf";

        // Append link to the body
        document.body.appendChild(link);

        // Dispatch click event on the link
        // This is necessary as link.click() does not work on the latest firefox
        link.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window,
          })
        );

        // Remove link from body
        document.body.removeChild(link);
      });
  };

  return (
    <Container fluid id="resume">
      <Row>
        <Col xs={{order: 'last'}} lg={3} className="section order-lg-first" id="LHSMenu">
          <Container fluid className="h-100 LHScontainer">
            <Education content={content.education}></Education>
            <Skills content={content.skills}></Skills>
            <Button
              variant="link"
              onClick={downloadCV}
              className="text-decoration-none font-weight-bold pt-0 pb-3"
            >
              DOWNLOAD CV
              <FontAwesomeIcon icon={faDownload} className="faIcon ml-2" />
            </Button>
          </Container>
        </Col>
        <Col lg={8} className="section p-0">
          <Container fluid id="experience">
            <Row className="description">
              <Col>
                <Description content={content.description}></Description>
              </Col>
            </Row>
            <Experience content={content.experience}></Experience>
          </Container>
        </Col>
        <Col lg={1} className="section RHSmenu">
          <Container fluid className="h-100 mt-3">
            <Footer content={content.social}></Footer>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

Resume.propTypes = {
  content: PropTypes.object,
};
Resume.defaultProps = {
  content: {},
};

export default Resume;

import React from "react";
import { Container, Row } from "react-bootstrap";
import { Document, Page, pdfjs } from "react-pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import pdf from '../../../../assests/SnehaMaratheCV.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


export const Resume = () => {

    const width = window.innerWidth;

    return (
        <div>
        <Container className="resume-section" style={{ padding: "20px 0", overflow: "hidden" }} >
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
  
          <Row className="resume" style={{marginTop: '20px'}}>
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>        
        </Container>
      </div>
    )
}

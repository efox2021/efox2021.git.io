import React from "react";
import Type from "./Type";
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from "../webDev.png";

export default function Home(){
  return (
    <section>

      <Container fluid className="absolute inset-y-80 inset-x-96">
          <Row className="flex justify-around">
            <Col md={7}>
              <h1 style={{ paddingBottom: 50 }} className=" heading">
                Hello! <span></span>
              </h1>
              <h1 className="heading">
              I'M <strong className="heading" style={{ color: "#0095ff"}}> EHREN FOX </strong>
              </h1>

              <div style={{paddingTop: 50, textAlign: "left", color: "#0095ff"}} className="type">
                <Type/>
              </div>
              </Col>

              <Col md={5} className="">
                <img src={homeLogo} className="img3 relative -inset-y-40 inset-x-24"/>
              </Col>
          </Row>
      </Container>
    </section>
  );


}

import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import seniorDesign from "../seniorDesign.jpeg";
import image from "../me.jpeg";
import goGame from "../gogame.png";
import yelp from "../yelp.png";
import microprocessor from "../microprocessor.jpeg";
import { NavLink } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Carou from "./Carousel"

export default function Projects(){

  return (
    <main
      className="absolute space-x-4 space-y-20 inset-y-24 object-cover w-full"
      >
        <h1
        className="relative inset-y-14 text-6xl text-black font-bold cursive home-name text-center"
        style={{color: "#374151"}}>
        My Projects
        </h1>

        <Container fluid className="text-center mx-auto">
          <Row className="relative flex justify-around">
            <Col sm={8} className="space-x-4">
              <Card style={{ width: '18rem', height: '33rem' }}
              className="inline-block align-middle py-3 px-3 my-6 rounded bg-gradient-to-r from-gray-600 to-blue-400 via-blue-400 text-white">
                  <Card.Img variant="top" src={seniorDesign} className="img"/>
                  <Card.Body>
                    <Card.Title>Interactive Secure Headset</Card.Title><br></br>
                    <Card.Text>
                      Click the button below to view the interactive secure headset I was a part of designing that had the goal of maintaining test integrity for remote examinations.
                    </Card.Text><br></br>
                    <NavLink to="/seniorDesign"
                    className="inline-flex items-center py-3 px-3 my-6 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white"
                    activeClassName="text-white"
                    >
                      View Project
                    </NavLink>

                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem', height: '33rem' }}
              className="inline-block align-middle py-3 px-3 my-6 rounded bg-gradient-to-r from-gray-600 to-blue-400 via-blue-400 text-white">
                  <Card.Img variant="top" src={goGame} className="img"/>
                  <Card.Body>
                    <Card.Title>React GO! Game</Card.Title><br></br>
                    <Card.Text>
                      Click the button below to view a multiplayer GO! Game that I built using React for the frontend UI, ExpressJS for the backend, and Socket.io to allow for two players to join a game session with one another.
                    </Card.Text><br></br>
                    <NavLink to="/reactGoGame"
                    className="inline-flex items-center py-3 px-3 my-6 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white relative inset-y-10"
                    activeClassName="text-white"
                    >
                      View Project
                    </NavLink>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem', height: '33rem' }}
              className="inline-block align-middle py-3 px-3 my-6 rounded bg-gradient-to-r from-gray-600 to-blue-400 via-blue-400 text-white">
                  <Card.Img variant="top" src={microprocessor} className="img"/>
                  <Card.Body>
                    <Card.Title>MIPS Microprocessor</Card.Title><br></br>
                    <Card.Text>
                      Click the button below to view a MIPS Microprocessor that I developed using the Verilog Hardware Description Language while learning computer microarchitecture.
                    </Card.Text><br></br>
                    <NavLink to="/mipsMicroprocessor"
                    className="inline-flex items-center py-3 px-3 my-6 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white relative inset-y-14"
                    activeClassName="text-white"
                    >
                      View Project
                    </NavLink>
                  </Card.Body>
              </Card>
              <Card style={{ width: '18rem', height: '33rem' }}
              className="inline-block align-middle py-3 px-3 my-6 rounded bg-gradient-to-r from-gray-600 to-blue-400 via-blue-400 text-white">
                  <Card.Img variant="top" src={yelp} className="img"/>
                  <Card.Body>
                    <Card.Title>Restaurant Suggestion Android Application</Card.Title><br></br>
                    <Card.Text>
                      Click the button below to view an Android application that I was a part of the backend development where we used Java Springboot along with MySQL and the YelpAPI to recommend restaurants to users.
                    </Card.Text><br></br>
                    <NavLink to="/restaurantSuggestion"
                    className="inline-flex items-center py-3 px-3 my-6 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white relative inset-y-9"
                    activeClassName="text-white"
                    >
                      View Project
                    </NavLink>
                  </Card.Body>
              </Card>
            </Col>
          </Row>

        </Container>
        <Carou />








      </main>
);
}

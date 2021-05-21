import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import seniorDesign from "../seniorDesign.jpeg";
import seniorDesign2 from "../initialHeadset.png";
import mipsPipe from "../mipsPipe.png";
import microprocessor from "../microprocessor.jpeg";
import goGameDiagram from "../goGameDiagram.png";
import goGameInitial from "../goGameInitial.png";
import goGame from "../gogame.png";
import yelp from "../yelp.png";


export default function Carou(){
  return (
    <main className="mx-auto flex justify-center inset-y-32 relative">
    <Carousel>
              <Carousel.Item>
                <img
                  className="img2 d-block w-half"
                  src={seniorDesign}
                  alt="Interactive Secure Headset In Use"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-half"
                  src={seniorDesign2}
                  alt="Interactive Secure Headset In Use"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-100"
                  src={goGameDiagram}
                  alt="GO! Game Diagram"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-100"
                  src={goGameInitial}
                  alt="GO! Game Login"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-100"
                  src={goGame}
                  alt="GO! Game Gameplay"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-100"
                  src={mipsPipe}
                  alt="MIPS Pipeline Diagram"
                />
              </Carousel.Item>
        </Carousel>

      </main>

      )


}

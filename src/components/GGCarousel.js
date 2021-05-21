import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import gg1 from "../goGameDiagram.png";
import gg2 from "../goGameInitial.png";
import gg3 from "../gogame.png";
import gg4 from "../ggentername.png";
import gg5 from "../ggenterID.png"



export default function Carou2(){
  return (
    <main className="relative flex justify-around -inset-y-60">
    <Carousel>
              <Carousel.Item>
                <img
                  className="img2 d-block w-half"
                  src={gg1}
                  alt="Go Game Diagram"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-half"
                  src={gg2}
                  alt="Go Game Initial State"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-half"
                  src={gg4}
                  alt="Go Game Start Game"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-half"
                  src={gg5}
                  alt="Go Game Join Game Session"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-half"
                  src={gg3}
                  alt="Go Game Game in Session"
                />
              </Carousel.Item>
        </Carousel>

      </main>

      )


}

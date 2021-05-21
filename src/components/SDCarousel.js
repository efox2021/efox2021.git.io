import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import seniorDesign from "../seniorDesign.jpeg";
import seniorDesign2 from "../initialHeadset.png";
import seniorDesign3 from "../headsetPrint.jpeg";
import seniorDesign4 from "../prototype.jpeg";



export default function Carou1(){
  return (
    <main className="relative flex justify-around inset-y-40">
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
                  className="img2 d-block w-half"
                  src={seniorDesign3}
                  alt="Interactive Secure Headset In Use"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="img2 d-block w-half"
                  src={seniorDesign4}
                  alt="Interactive Secure Headset In Use"
                />
              </Carousel.Item>
        </Carousel>

      </main>

      )


}

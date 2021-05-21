import React from "react";
import Typewriter from 'typewriter-effect';

export default function Type(){
  return (
    <Typewriter
      style={{color: "#1100ff"}}
      options={{
        strings: [
          "Developer",
          "Computer Engineer",
          "MERN Stack Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      />
  );


}

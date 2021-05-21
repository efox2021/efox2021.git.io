import React from "react";
import logo from "../me.jpeg";

export default function About(){
  return(
    <main>
      <section
      className="absolute inset-y-32 object-cover w-full pl-2 pr-2"
      >
        <h1
        className="text-6xl text-black font-bold cursive home-name text-center"
        style={{color: "#374151"}}>
        About Me
        </h1>

        <p1
        className="relative inset-y-4 text-center" style={{color: "#374151"}}>
        My name is Ehren Fox, and I am a senior at Iowa State University studying Computer Engineering with a focus area in Software Engineering,
        and an expected graduation date of May 2021. I was born in Des Moines, Iowa, and have spent the majority of my life here in Iowa.
        However, I did spend one semester studying abroad in Madrid, Spain, which was an adventure that I went on alone. It was an experience that
        helped to further my confidence in myself, as well show me how adaptable I can be in stressful situations. <br></br>
        </p1>

        <p2
        className="relative inset-y-14 text-center" style={{color: "#374151"}}>
        Pertaining to Computer Engineering, I have worked on projects such as a MIPS Microprocessor, Online Go! Board Game, and an Android application
        that acts as a sort of Tinder for Dinner. I have experience with the following programming languages: Java, Javascript, Node, C, Css, HTML, Python, and VHDL. <br></br>
        </p2>

        <p3
        className="relative inset-y-24 text-center" style={{color: "#374151"}}>
​        My plans after graduating are to find a job working for a company that allows me the opportunity to have a mentor. I want a mentor soon after graduating
        because my overall goal is to start my own company, and provide solutions to engineering problems, and I think that one of the best ways to be
        industry-ready is to have a mentor showing you the ropes.
        </p3>
        <img
          src={logo}
          alt="A photo of ehren"
          className="relative inset-y-36"
        />
      </section>



  </main>
)
}

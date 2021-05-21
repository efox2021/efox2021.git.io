import React from "react";
import { NavLink } from "react-router-dom";
import Carou1 from "./SDCarousel.js";


export default function SeniorDesign(){
  return (
    <main>
      <section
      className="absolute inset-y-24 object-cover w-full"
      >
        <h1
        className="text-6xl text-black font-bold cursive home-name text-center"
        style={{color: "#374151"}}>
        Interactive Secure Headset
        </h1><br></br><br></br><br></br>
        <div className="pl-2 pr-2">
            <h3
            className="text-6xl text-black font-bold cursive home-name1 relative -inset-y-2" style={{color: "#374151"}}>Team Website</h3>
            <a target="_blank" href="https://sdmay21-01.sd.ece.iastate.edu/" style={{ color: 'blue' }} className="pl-2">Iowa State Senior Design May 2021 - Interactive Secure Headset</a><br></br><br></br>
            <br></br>

            <h2
            className="text-6xl text-black font-bold cursive home-name1" style={{color: "#374151"}}>Project Description</h2><br></br>
            <p1
            className="relative -inset-y-4" style={{color: "#374151"}}>
            My name is Ehren Fox, and I am a senior at Iowa State University studying Computer Engineering with a focus area in Software Engineering,
            and an expected graduation date of May 2021. I was born in Des Moines, Iowa, and have spent the majority of my life here in Iowa.
            However, I did spend one semester studying abroad in Madrid, Spain, which was an adventure that I went on alone. It was an experience that
            helped to further my confidence in myself, as well show me how adaptable I can be in stressful situations. <br></br>
            </p1>

            <p2
            className="relative inset-y-6" style={{color: "#374151"}}>
            Pertaining to Computer Engineering, I have worked on projects such as a MIPS Microprocessor, Online Go! Board Game, and an Android application
            that acts as a sort of Tinder for Dinner. I have experience with the following programming languages: Java, Javascript, Node, C, Css, HTML, Python, and VHDL. <br></br>
            </p2>

            <p3
            className="relative inset-y-14" style={{color: "#374151"}}>
    ​        My plans after graduating are to find a job working for a company that allows me the opportunity to have a mentor. I want a mentor soon after graduating
            because my overall goal is to start my own company, and provide solutions to engineering problems, and I think that one of the best ways to be
            industry-ready is to have a mentor showing you the ropes.
            </p3>

            <h2
            className="text-6xl text-black font-bold cursive home-name1 relative inset-y-24" style={{color: "#374151"}}>My Role</h2><br></br>
            <p1
            className="relative inset-y-20" style={{color: "#374151"}}>
            My role on the project team was initially software lead, however, when it became apparent that we would require more than just software to get the
            prototype completed in time, I took on the role of headset design engineer, lead tester, along with assisting in software design. Along with that,
            the whole team was constantly in the loop with one another and we all ensured that everyone was being helped when they needed it, so that no one person
            was encumbered by a greater workload than their peers.
            </p1>

            <h2
            className="text-6xl text-black font-bold cursive home-name1 relative inset-y-32" style={{color: "#374151"}}>Skills and Knowledge Gained</h2><br></br>
            <p1
            className="relative inset-y-28" style={{color: "#374151"}}>
            During the course of the Senior Design Project, many of the technology we used were relatively new to us. I gained a great deal of knowledge in CAD
            software for 3D print design, as well as added to my knowledge with HTML and NodeJS. Furthermore, I learned a lot about how to integrate a RaspberryPi
            into such a design when conferring with our hardware lead, and now feel that I have a good grasp going forward and could readily integrate a Pi into
            any project where it would be useful.
            </p1>

            <h2
            className="text-6xl text-black font-bold cursive home-name1 relative inset-y-36" style={{color: "#374151"}}>Resources Used</h2><br></br>
            <p1
            className="relative inset-y-32" style={{color: "#374151"}}>
            I spent a large chunk of the prototyping phase designing the 3D headset casing, and in doing so learned the basics of Autodesk's Fusion360 software,
            and became greatly acquainted with Shapr3D, a CAD software for the iPad. Along with those resources, I worked with the Linux environment to get our
            hardware and software to function as was required.
            </p1>




        </div>


      </section>
      <Carou1/>
    </main>
  )


}

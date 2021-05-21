import React from "react";
import Carou2 from "./GGCarousel";

export default function ReactGoGame(){
  return (

  <main>
    <section
    className="absolute inset-y-28 object-cover w-full"
    >
      <h1
      className="text-6xl text-black font-bold cursive home-name text-center"
      style={{color: "#374151"}}>
      React GO! Game
      </h1><br></br><br></br><br></br>
      <div className="pl-2 pr-2">
          <h2
          className="text-6xl text-black font-bold cursive home-name1" style={{color: "#374151"}}>Project Description</h2><br></br>
          <p1
          className="relative -inset-y-4" style={{color: "#374151"}}>
          I built a Go! Game using Node JS and ExpressJS along with Socket.io to allow two users to play synchronously with one another. Go is an immensely popular game around the world and requires
          a great deal of strategy. This game was built with a React front end and an ExpressJS backend along with Socket.io to allow for two users to join a game. One player initiates and sends the
          game code to their friend who they want to play along with.
          </p1>

          <h2
          className="text-6xl text-black font-bold cursive home-name1 relative inset-y-10" style={{color: "#374151"}}>My Role</h2><br></br>
          <p1
          className="relative inset-y-6" style={{color: "#374151"}}>
          My role in this project was the team lead and main developer of the application. Due to Covid19 and teams being all virtual, it was difficult at times to coordinate with everyone and get
          the project team on the same page and so I assumed the role of lead both in team focus and software development. I was new to NodeJS, and so this project allowed for an excellent learning
          opportunity for me, as I was able to build something I was interested in and had fun doing. There were times when it was difficult and deadlines that I wasn't sure I'd be able to hit but
          in the end all went well, and we had a product that was interesting and fun to demonstrate and use.
          </p1>

      </div>


    </section>
    <h2
    className="text-6xl text-black font-bold cursive home-name1 relative -inset-y-72 text-center" style={{color: "#374151"}}>Image Flow</h2>
    <Carou2/>

  </main>
)


}

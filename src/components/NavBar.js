import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { IoPerson } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import {GoCode} from "react-icons/go"


export default function NavBar(){
  return (
    <header className="absolute top-0 w-full bg-gray-700">
      <div className="container mx-auto flex justify-between">
        <nav className="flex space-x-4">
          <NavLink to="/" exact
          className="inline-flex items-center py-6 px-3 mr-4 text-white hover:text-black text-4xl font-bold cursive tracking-widest"
          activClassName="text-red-200 bg-red-400"
          label="ehren"
          >
            Ehren
          </NavLink>


          <NavLink to="/projects"
          className="inline-flex items-center py-3 px-3 my-6 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white"
          activeClassName="text-white"
          label="projects"
          >
          <GoCode className="mr-2" />

            Projects
          </NavLink>

          <NavLink to="/about"
          className="inline-flex items-center py-3 px-3 my-6 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white"
          activeClassName="text-red-200 bg-red-400"
          label="about"
          >
          <IoPerson className="mr-2"/>
            About

          </NavLink>

          <NavLink to="/contact"
          className="inline-flex items-center py-3 px-3 my-6 bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 text-white"
          activeClassName="text-red-200 bg-red-400"
          label="contact"
          >
          <SiGooglemessages className="mr-2"/>
            Contact
          </NavLink>
        </nav>
        <div>
        <SocialIcon url="https://www.linkedin.com/in/ehren-fox-5814ab168" label="linkedinButton" className="mr-4 top-8" target="_blank" style={{ height: 35, width: 35}}/>
        <SocialIcon url="https://github.com/efox2021" lable="githubButton" className="mr-4 top-8" target="_blank" style={{ height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  )
}

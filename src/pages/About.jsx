import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-[#d7d4ca]">
      <Navbar />
      <div className="mx-[8%] my-[5%] text-[#212121]">
        <h1 className="text-4xl mb-5 font-bold">About Me</h1>
        <p className="text-[#555] mb-5 leading-[1.6]">
          Hello! I'm Daisuke Hamo, a dedicated and solutions-driven full stack 
          developer with a background in Information Technology and hands-on 
          experience in building real-world systems. I specialize in JavaScript, 
          React, Python, and cloud-based technologies, with a strong focus on 
          creating scalable, user-friendly web applications.
        </p>
        <p className="text-[#555] mb-5 leading-[1.6]">
          Throughout my journey, I’ve worked on various projects ranging from
          website development to automation tasks using Microsoft Power Automate.
          I’ve also been involved in video editing, transcription, and assisting
          in influencer marketing campaigns.
        </p>
        <h2 className="text-2xl mb-5 font-semibold">My Journey</h2>
        <p className="text-[#555] mb-5 leading-[1.6]">
          I started my professional career in customer support, working for
          companies like Verizon and TRICOAST WORLDWIDE. Gradually, I transitioned
          into tech roles where I honed my skills in programming and web
          development. I’ve worked with modern frameworks and built projects like
          AUPark, a parking management system, which enhanced my understanding
          of Python, MongoDB, and front-end technologies.
        </p>
        <h2 className="text-2xl mb-5 font-semibold">Skills</h2>
        <ul className="list-disc ml-6 text-[#555] mb-5 leading-[1.8]">
          <li>Programming: Java, Python, JavaScript, TypeScript</li>
          <li>Web Development: ReactJS, Node.js, Bootstrap, HTML, CSS</li>
          <li>Database: SQL, MongoDB</li>
          <li>Tools: Visual Studio Code, Git, Postman</li>
        </ul>
        <h2 className="text-2xl mb-5 font-semibold">Achievements</h2>
        <ul className="list-disc ml-6 text-[#555] leading-[1.8]">
          <li>
            Developed a parking management system for Adventist University of the
            Philippines using YOLOv8 and OpenCV
          </li>
          <li>
            Edited videos for TRICOAST WORLDWIDE using Adobe Premiere Pro
          </li>
        </ul>
      </div>
    </div>
  );
}

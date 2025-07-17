import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-[#d7d4ca]">
      <Navbar />
      <div className="mx-[8%] my-[5%] text-[#212121]">
        <h1 className="text-4xl mb-5 font-bold">About Me</h1>
        <p className="text-[#555] mb-5 leading-[1.6]">
          Hello! I'm a dedicated and solutions-driven full stack 
          developer with a background in Information Technology and hands-on 
          experience in building real-world systems. I specialize in JavaScript, 
          React, Python, and cloud-based technologies, with a strong focus on 
          creating scalable, user-friendly web applications.
        </p>
        <p className="text-[#555] mb-5 leading-[1.6]">
          Today, I specialize in JavaScript, React, Python, and cloud technologies,
          with a focus on building responsive, real-world solutions. My projects 
          include a warehouse management system deployed on AWS using Amazon Aurora,
          and a smart parking management system powered by YOLOv8 and OpenCV, both of
          which strengthened my skills in front-end and back-end development, 
          database design, and automation.
        </p>
        <p className="text-[#555] mb-5 leading-[1.6]">
          In addition to programming, I’ve worked as a virtual assistant handling
          data entry, video editing, and web development using WordPress, and 
          I've implemented automations using tools like Excel VBA and 
          Microsoft Power Automate.
        </p>
        <h2 className="text-2xl mb-5 font-semibold">Key Strengths</h2>
        <ul className="list-disc ml-6 text-[#555] mb-5 leading-[1.8]">
          <li>Full Stack Development (React, Node.js, Tailwind, Vite)</li>
          <li>Backend & Databases (MySQL, MongoDB, AWS Aurora)</li>
          <li>Automation (Excel Macros, VBA, Power Automate)</li>
          <li>Cloud Deployment (Vercel, Render, AWS)</li>
          <li>Strong foundation in system architecture, web security, and user experience</li>
        </ul>
      </div>
    </div>
  );
}

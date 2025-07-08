import React from "react";
import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <div className="relative w-full min-h-screen bg-[#d7d4ca]">
      <Navbar />
      <div className="mx-[8%] my-[5%] text-center text-[#212121]">
        <h1 className="text-[50px] mb-5 font-bold">My Services</h1>
        <p className="text-[#555] mb-10 leading-[1.6]">
          I offer a range of professional services to help you achieve your business goals.
        </p>
        <div className="flex flex-wrap justify-between">
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <img src="/images/webdev.jpg" alt="Web Development" className="w-full rounded-[10px] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-[#212121]">Web Development</h3>
            <p className="text-[#555] mb-3 leading-[1.6]">Creating responsive, interactive websites using the latest technologies like ReactJS, Node.js, and more.</p>
            <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">Learn More</a>
          </div>
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <img src="/images/videoediting.jpg" alt="Video Editing" className="w-full rounded-[10px] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-[#212121]">Video Editing</h3>
            <p className="text-[#555] mb-3 leading-[1.6]">Professional video editing services for marketing, entertainment, and corporate needs using Adobe Premiere Pro.</p>
            <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">Learn More</a>
          </div>
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <img src="/images/automation.jpg" alt="Automation" className="w-full rounded-[10px] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-[#212121]">Automation with Power Automate</h3>
            <p className="text-[#555] mb-3 leading-[1.6]">Automating workflows and tasks to enhance productivity and reduce manual effort with Microsoft Power Automate.</p>
            <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">Learn More</a>
          </div>
          <div className="w-full flex justify-center">
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <img src="/images/techsupport.jpg" alt="Technical Support" className="w-full rounded-[10px] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-[#212121]">Technical Support</h3>
            <p className="text-[#555] mb-3 leading-[1.6]">Offering technical support services, troubleshooting, and problem-solving for a wide range of technologies.</p>
            <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">Learn More</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

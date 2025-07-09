import React from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Portfolio() {
  return (
    <div className="relative w-full min-h-screen bg-[#d7d4ca]">
      <Navbar />
      <div className="mx-[8%] my-[5%] text-center text-[#212121]">
        <h1 className="text-[50px] mb-5 font-bold">My Portfolio</h1>
        <p className="text-[#555] mb-10 leading-[1.6]">
          Here are some of the projects I’ve worked on.
        </p>
        <div className="flex flex-wrap justify-between">
          {/* Warehouse Management System */}
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-full rounded-[10px] mb-4"
            >
              <SwiperSlide>
                <img src="/images/warehouse.jpg" alt="Warehouse 1" className="w-full rounded-[10px]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/warehouse2.jpg" alt="Warehouse 2" className="w-full rounded-[10px]" />
              </SwiperSlide>
            </Swiper>
            <h3 className="text-2xl font-semibold mb-2 text-[#212121]">Warehouse Management System – 7seacorp</h3>
            <p className="text-[#555] mb-3 leading-[1.6]">
              Developed a warehouse management system to optimize inventory tracking and warehouse operations.<br />
            </p>
            <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">View Project</a>
          </div>

          {/* AUPark */}
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-full rounded-[10px] mb-4"
            >
              <SwiperSlide>
                <img src="/images/main home page.png" alt="AUPark 1" className="w-full rounded-[10px]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/project1-extra.jpg" alt="AUPark 2" className="w-full rounded-[10px]" />
              </SwiperSlide>
            </Swiper>
            <h3 className="text-2xl font-semibold mb-2 text-[#212121]">AUPark</h3>
            <p className="text-[#555] mb-3 leading-[1.6]">
              A parking management system using Python, MongoDB, YOLOv8, and OpenCV.
            </p>
            <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">View Project</a>
          </div>

          {/* Video Editing */}
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="w-full rounded-[10px] mb-4"
            >
              <SwiperSlide>
                <img src="/images/project2.jpg" alt="Video Editing 1" className="w-full rounded-[10px]" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/project2-extra.jpg" alt="Video Editing 2" className="w-full rounded-[10px]" />
              </SwiperSlide>
            </Swiper>
            <h3 className="text-2xl font-semibold mb-2 text-[#212121]">Video Editing for TRICOAST WORLDWIDE</h3>
            <p className="text-[#555] mb-3 leading-[1.6]">
              Edited videos using Adobe Premiere Pro for a global entertainment company.
            </p>
            <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">View Project</a>
          </div>

          {/* Automation with Power Automate */}
          <div className="w-full flex justify-center">
            <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="w-full rounded-[10px] mb-4"
              >
                <SwiperSlide>
                  <img src="/images/VBA/Shipment Data.png" alt="Automation 1" className="w-full rounded-[10px]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/VBA/Scan and process Tracking.png" alt="Automation 3" className="w-full rounded-[10px]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/VBA/Delete old sheets.png" alt="Automation 3" className="w-full rounded-[10px]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/VBA/Already highlighted barcode.png" alt="Automation 4" className="w-full rounded-[10px]" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/VBA/Red highlight nonexistent barcode.png" alt="Automation 5" className="w-full rounded-[10px]" />
                </SwiperSlide>
              </Swiper>
              <h3 className="text-2xl font-semibold mb-2 text-[#212121]">Automation with Power Automate</h3>
              <p className="text-[#555] mb-3 leading-[1.6]">
                Automated workflows and tasks using Microsoft Power Automate to boost productivity.
              </p>
              <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const openLightbox = (images, index) => {
    setCurrentImages(images);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const warehouseImages = [
    "/images/warehouse.jpg", 
    "/images/warehouse2.jpg"
  ];
  const aupImages = [
    "/images/AUpark/Architectural design.jpg",
    "/images/AUpark/OpenCV Yolov8 implementation.jpg",
    "/images/AUpark/Connection Setup.jpg",
    "/images/AUpark/Fetch data socketio.jpg",
    "/images/AUpark/Parking Counter.jpg",
    "/images/AUpark/Vehicle Detection.jpg",
    "/images/AUpark/Vehicle Detection2.jpg",
    "/images/AUpark/Parking Logs.jpg",
    "/images/AUpark/Detection Confidence.jpg",
    "/images/AUpark/Sunset Car Detection.jpg",
    "/images/AUpark/Main Page.jpg",
    "/images/AUpark/Detailed View.jpg",
    "/images/AUpark/Contact page.jpg",
    "/images/AUpark/Rules and Regulations Page.jpg",
    "/images/AUpark/About us page.jpg",
    "/images/AUpark/Login page.jpg",
    "/images/AUpark/PSD 2nd view.jpg",
    "/images/AUpark/User Reports Page.jpg",
    "/images/AUpark/Statistics.jpg",
    "/images/AUpark/Chat feature.jpg",
    "/images/AUpark/PSD interview.jpg",
    "/images/AUpark/Setup 1.png",
    "/images/AUpark/Setup 2.jpg",

    
  ];
  const videoImages = [
    "/images/project2.jpg",
    "/images/project2-extra.jpg",
  ];
  const automateImages = [
    "/images/VBA/Shipment Data.png",
    "/images/VBA/Scan and process Tracking.png",
    "/images/VBA/Delete old sheets.png",
    "/images/VBA/Red highlight nonexistent barcode.png",
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#d7d4ca]">
      <Navbar />
      <div className="mx-[8%] my-[5%] text-center text-[#212121]">
        <h1 className="text-[50px] mb-5 font-bold">My Portfolio</h1>
        <p className="text-[#555] mb-10 leading-[1.6]">
          Here are some of the projects I’ve worked on.
        </p>
        <div className="flex flex-wrap justify-between">

          {/* Warehouse Project */}
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <Swiper navigation modules={[Navigation]} className="w-full rounded-[10px] mb-4">
              {warehouseImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Warehouse ${index + 1}`}
                    className="w-full rounded-[10px] cursor-pointer"
                    onClick={() => openLightbox(warehouseImages, index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h3 className="text-2xl font-semibold mb-2 text-[#212121]">Warehouse Management System – 7seacorp</h3>
            <p className="text-[#555] mb-3 leading-[1.6]">
              Developed a warehouse management system to optimize inventory tracking and warehouse operations.
            </p>
            <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">View Project</a>
          </div>

          {/* AUPark */}
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <Swiper navigation modules={[Navigation]} className="w-full rounded-[10px] mb-4">
              {aupImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`AUPark ${index + 1}`}
                    className="w-full rounded-[10px] cursor-pointer"
                    onClick={() => openLightbox(aupImages, index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h3 className="text-2xl font-semibold mb-2 text-[#212121]">AUPark</h3>
            <p className="text-[#555] mb-3 leading-[1.6]">
              A parking management system using Python, MongoDB, YOLOv8, and OpenCV.
            </p>
            <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">View Project</a>
          </div>

          {/* Video Editing */}
          <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
            <Swiper navigation modules={[Navigation]} className="w-full rounded-[10px] mb-4">
              {videoImages.map((src, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={src}
                    alt={`Video Editing ${index + 1}`}
                    className="w-full rounded-[10px] cursor-pointer"
                    onClick={() => openLightbox(videoImages, index)}
                  />
                </SwiperSlide>
              ))}
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
              <Swiper navigation modules={[Navigation]} className="w-full rounded-[10px] mb-4">
                {automateImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={src}
                      alt={`Automation ${index + 1}`}
                      className="w-full rounded-[10px] cursor-pointer"
                      onClick={() => openLightbox(automateImages, index)}
                    />
                  </SwiperSlide>
                ))}
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

      {/* Lightbox Display */}
      {isOpen && (
        <Lightbox
          mainSrc={currentImages[photoIndex]}
          nextSrc={currentImages[(photoIndex + 1) % currentImages.length]}
          prevSrc={currentImages[(photoIndex + currentImages.length - 1) % currentImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + currentImages.length - 1) % currentImages.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % currentImages.length)
          }
        />
      )}
    </div>
  );
}

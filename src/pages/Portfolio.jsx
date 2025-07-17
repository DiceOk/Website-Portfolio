import { useState} from 'react';
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const openLightbox = (images, index) => {
    const formattedSlides = images.map((src) => ({ src }));
    setSlides(formattedSlides);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const warehouseImages = [
    "/images/Warehouse Management/WMS Login.png",
    "/images/Warehouse Management/Admin Dashboard.png",
    "/images/Warehouse Management/Admin Inventory.png",
    "/images/Warehouse Management/Admin Inbound.png",
    "/images/Warehouse Management/Admin Outbound.png",
    "/images/Warehouse Management/Admin Billings.png",
    "/images/Warehouse Management/Admin Users.png",
    "/images/Warehouse Management/Admin Reports.png",
    "/images/Warehouse Management/Profile Settings.png",
    "/images/Warehouse Management/Lightdarkmode.png",
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

  const automateImages = [
    "/images/VBA/Shipment Data.png",
    "/images/VBA/Scan and process Tracking.png",
    "/images/VBA/Delete old sheets.png",
    "/images/VBA/Red highlight nonexistent barcode.png",
  ];

  const renderProject = (title, images, description) => (
    <div className="w-[30%] mb-8 bg-[#f5f5f5] p-5 rounded-[10px] shadow-md">
      <Swiper navigation modules={[Navigation]} className="w-full rounded-[10px] mb-4">
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`${title} ${index + 1}`}
              className="w-full h-[200px] object-cover rounded-[10px] cursor-pointer"
              onClick={() => openLightbox(images, index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <h3 className="text-2xl font-semibold mb-2 text-[#212121]">{title}</h3>
      <p className="text-[#555] mb-3 leading-[1.6]">{description}</p>
      <a href="#" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] inline-block hover:bg-orange-500 transition">
        View Project
      </a>
    </div>
  );

  return (
    <div className="relative w-full min-h-screen bg-[#d7d4ca]">
      <Navbar />
      <div className="mx-[8%] my-[5%] text-center text-[#212121]">
        <h1 className="text-[50px] mb-5 font-bold">My Portfolio</h1>
        <p className="text-[#555] mb-10 leading-[1.6]">
          Here are some of the projects I’ve worked on.
        </p>
        <div className="flex flex-wrap justify-between">
          {renderProject(
            "Warehouse Management System – 7seacorp",
            warehouseImages,
            "Developed a warehouse management system to optimize inventory tracking and warehouse operations."
          )}
          {renderProject(
            "AUPark",
            aupImages,
            "A parking management system using Python, MongoDB, YOLOv8, and OpenCV."
          )}
            {renderProject(
              "Automation with Power Automate",
              automateImages,
              "Automated workflows and tasks using Microsoft Power Automate to boost productivity."
            )}
        </div>
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
        />
      )}
    </div>
  );
}

import Navbar from "../components/Navbar";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Home() {
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
      <div id="home" className="relative w-full h-screen bg-[#d7d4ca] font-sans overflow-hidden">
        <div className="ml-[8%] mt-[15%]">
          <h1 className="text-[50px] text-[#212121] mb-5 font-bold">
            I'm Daisuke <span className="text-orange-500">Hamo</span>
          </h1>
          <p className="text-[#555] leading-[22px] mb-8">
            This is my official portfolio website that shows all
            <br />
            of my details and work experiences
          </p>
          <a
            href="https://drive.google.com/file/d/1PEF8fRKCxQVktJBd9WJ3ziXEERwqaEA7/view?usp=sharing"
            className="bg-[#212121] px-[18px] py-[10px] text-white font-bold rounded-[5px] inline-block mt-8 no-underline"
          >
            DOWNLOAD CV
          </a>
        </div>
        <div className="group absolute bottom-0 right-[100px] w-[45%] h-[80%]">
          <img
            src="/images/shape.png"
            alt="Shape"
            className="absolute left-1/2 bottom-0 h-full transform -translate-x-1/2 transition-all duration-1000 z-0 group-hover:bottom-10"
          />
          <img
            src="/images/me.png"
            alt="Me"
            className="absolute left-1/2 bottom-0 h-full transform -translate-x-1/2 transition-all duration-1000 z-10 group-hover:left-[45%]"
          />
        </div>
      </div>

      <div id="about" className="mx-[8%] my-[5%] text-[#212121]">
        <h1 className="text-4xl mb-5 font-bold">About Me</h1>
        <p className="text-[#555] mb-5 leading-[1.6]">
          Hi! I'm a full stack developer with a background in Information Technology and real-world experience in building scalable, user-friendly web systems. I specialize in JavaScript, React, Python, and cloud-based technologies.
        </p>
        <p className="text-[#555] mb-5 leading-[1.6]">
          Some of my recent projects include a warehouse management system hosted on AWS with Amazon Aurora, and a smart parking system powered by YOLOv8 and OpenCV. These projects deepened my skills in front-end and back-end development, database design, and automation.
        </p>
        <p className="text-[#555] mb-5 leading-[1.6]">
          Outside of coding, I’ve worked as a virtual assistant handling data entry, video editing, and WordPress development. I also build workflow automations using Excel VBA and Microsoft Power Automate.
        </p>
        <h2 className="text-2xl mb-5 font-semibold">Key Strengths</h2>
        <ul className="list-disc ml-6 text-[#555] mb-5 leading-[1.8]">
          <li>Full Stack Development (React, Node.js, Tailwind, Vite)</li>
          <li>Back-End & Databases (MySQL, MongoDB, AWS Aurora)</li>
          <li>Automation (Excel Macros, VBA, Power Automate)</li>
          <li>Cloud Deployment (Vercel, Render, AWS)</li>
          <li>Strong foundation in system architecture, security, and UX</li>
        </ul>
      </div>

      <div id="portfolio" className="mx-[8%] my-[5%] text-center text-[#212121]">
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

      <div id="hireme" className="mx-[8%] my-[5%] text-center text-[#212121]">
        <h1 className="text-[50px] mb-5 font-bold">Let’s Work Together!</h1>
        <p className="text-[#555] mb-10 leading-[1.6]">
          If you are interested in collaborating or need my services, feel free to reach out. I am always excited to work on new projects!
        </p>
        <div className="w-1/2 mx-auto mb-10">
          <form className="flex flex-col">
            <div className="mb-5 text-left">
              <label htmlFor="name" className="text-lg text-[#212121] mb-2 block">Your Name</label>
              <input type="text" id="name" name="name" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-5 text-left">
              <label htmlFor="email" className="text-lg text-[#212121] mb-2 block">Your Email</label>
              <input type="email" id="email" name="email" required className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-5 text-left">
              <label htmlFor="message" className="text-lg text-[#212121] mb-2 block">Your Message</label>
              <textarea id="message" name="message" rows="6" required className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <div>
              <input type="submit" value="Send Message" className="bg-[#212121] text-white font-bold px-[18px] py-[10px] rounded-[5px] cursor-pointer hover:bg-orange-500 transition" />
            </div>
          </form>
        </div>
        <div className="mt-12 text-[#555]">
          <p>Or reach out to me directly:</p>
          <p>Email: <a href="mailto:daisukehamo@gmail.com" className="text-orange-500 hover:text-red-500">daisukehamo@gmail.com</a></p>
          <p>Phone: (+63) 965-114-6304</p>
          <p>
            Find me on social media:{" "}
            <a href="https://www.linkedin.com/in/daisuke-jilroi-hamo-3967111ab/" className="text-orange-500 hover:text-red-500">LinkedIn</a> |{" "}
            <a href="https://github.com/DiceOk" className="text-orange-500 hover:text-red-500">GitHub</a>
          </p>
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


import React from "react";
import Navbar from "../components/Navbar";

export default function HireMe() {
  return (
    <div className="relative w-full min-h-screen bg-[#d7d4ca]">
      <Navbar />
      <div className="mx-[8%] my-[5%] text-center text-[#212121]">
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
    </div>
  );
}

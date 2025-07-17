import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-[#d7d4ca] font-sans overflow-hidden">
      <Navbar />
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
  );
}


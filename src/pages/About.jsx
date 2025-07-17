import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-[#d7d4ca]">
      <Navbar />
      <div className="mx-[8%] my-[5%] text-[#212121]">
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
    </div>
  );
}

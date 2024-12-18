import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import Profil from "../assets/images/profil.svg";
import Typewriter from "typewriter-effect";
import CV from "../assets/files/CV_Natasya Desinta Swantara.pdf";

const Hero = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-6 md:px-16 lg:px-24 py-8 md:py-16" id="home">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 animate-slide-in text-center md:text-left">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">Hello It’s Me</h3>
        <h1 className="text-3xl md:text-5xl lg:text-[68px] font-bold mt-2 text-gray-900">
          Natasya Desinta S
        </h1>
        <h2 className="text-xl md:text-3xl font-bold mt-3 text-gray-800">
          And I’m a{" "}
          <span className="text-pink-500 inline-block">
            <Typewriter
              options={{
                strings: ["Front-End Developer", "Creative Developer"],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </span>
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg lg:text-xl md:pr-[30%]">
          Informatics Engineering student at Brawijaya University. Have an
          interest in the field of web development, especially frontend
          development.
        </p>
        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <div className="cursor-pointer text-black text-3xl hover:text-pink-500 transform hover:scale-125 transition duration-300">
            <AiOutlineLinkedin
              size={40}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/natasya-desinta-swantara-365629241/",
                  "_blank"
                );
              }}
            />
          </div>
          <div className="cursor-pointer text-black text-3xl hover:text-pink-500 transform hover:scale-125 transition duration-300">
            <VscGithub
              size={40}
              onClick={() => {
                window.open("https://github.com/tasyaswantara", "_blank");
              }}
            />
          </div>
          <div className="cursor-pointer text-black text-3xl hover:text-pink-500 transform hover:scale-125 transition duration-300">
            <FiInstagram
              size={40}
              onClick={() => {
                window.open("https://www.instagram.com/tasya_ds612/", "_blank");
              }}
            />
          </div>
        </div>
        {/* Download Button */}
        <a
          href={CV}
          download="CV Natasya Desinta Swantara.pdf"
          className="mt-8 bg-black w-full md:w-[50%] lg:w-[25%] h-14 md:h-16 text-white font-bold py-3 px-6 rounded-full text-center flex justify-center items-center hover:bg-pink-500 transition"
        >
          Download CV
        </a>
      </div>

      {/* Right Section */}
      <div className="w-full hidden h-auto md:w-1/2 md:flex justify-center pb-8 md:pb-14 pl-0 md:pl-8 lg:pl-16 animate-scale-in">
        <img src={Profil} className="w-[280px] md:w-[380px] lg:w-[480px]" alt="profil" />
      </div>
    </div>
  );
};

export default Hero;

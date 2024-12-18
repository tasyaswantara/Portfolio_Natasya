import { AiOutlineLinkedin } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-pink-50 w-full py-6 md:py-8">
      <div className="flex flex-col items-center px-4 sm:px-10 md:px-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center mb-8 md:mb-16 space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg md:text-xl text-gray-800">Natasya Desinta S</p>
            <p className="text-pink-500 font-semibold text-xl md:text-2xl">
              Front-End Developer
            </p>
          </div>
          <div className="flex space-x-6">
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
        </div>

        {/* Divider */}
        <div className="h-[2px] w-full bg-pink-500"></div>
      </div>
    </footer>
  );
};

export default Footer;

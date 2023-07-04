import React from "react";
import MyImage from "../assets/tahneetk.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-blue-300 via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className=" text-white md:text-5xl font-bold relative">
            Hello, I'm{" "}
            <span className="uppercase text-blue-300">Tahneet Kanwal</span>
          </p>
          
          <p className="text-white text-xl py-4 max-w-md">
         A frontend developer with a love for crafting stunning websites and a strong enthusiasm for mobile application development.I'm excited to showcase my project and share my journey with you.
         <br/>
         <br/>
        <span className="text-2xl font-bold text-blue-300"> Enjoy Your Visit! </span>
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          
        <img
          src={MyImage}
          alt=""
          className="  mx-auto w-2/3 md:w-full  z-10 rounded-full pl-20 flex-shrink-0 "
        />
        </div>
      </div>
    </div>
  );
};

export default Home;

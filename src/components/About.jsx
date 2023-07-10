import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

//import MyImage from "../assets/tahneetk.png";

function About() {
  return (
    <div
      name="about"
      className="w-full pt-20 h-screen bg-gradient-to-b from-gray-800 via-black to-blue-300 md:min-h-[75vh] relative "
    >
      <div className="flex flex-col md:flex-row items-center justify-center lg:mx-52 md:mt-20">
        <motion.Typography
          initial={{ opacity: 0, y: 100 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="font-normal text-xl text-align: justify  text-blue-200  m-5 md:m-0 p-6 md:ml-5 mt-5 md:w-5/6 lg:w-4/5 xl:w-3/4 bg-blue-200 rounded-md shadow-2xl drop-shadow-sm backdrop-blur-md bg-opacity-20 max-h-[70vh] overflow-y-auto"
        >
          <Typography className=" text-5xl text-blue-400 font-bold text-center mt-2 mb-5 border-b-2 border-light-blue-500">
            About Me
          </Typography>
          {/* <RxTriangleLeft className="absolute top-10 -left-10 text-white text-[70px] lg-max:hidden" /> */}
          I'm <span className="font-bold mx-2 text-blue-400">Tahneet kanwal </span> based in India. I'm a passionate frontend developer with hands-on experience in
          building innovative and scalable web applications. Additionally, I
          have a strong enthusiasm for mobile application development,
          particularly with React Native.
          <br />
          <br />
          My educational background includes a Bachelor of Engineering degree in
          Information Technology from
          <span className="font-bold mx-2 text-blue-400 ">
            {" "}
            University College of Engineering and Technology,
            Hazaribag,Jharkhand.
          </span>
          <br />
          <br />
          My skills include proficiency in HTML, CSS, JavaScript, React, Redux,
          Tailwind CSS, PHP, React Native,Firebase, SQL, Android Studio, Github,
          Visual Studio Code, Netlify, and Vercel.
          <br />
          <br />I have completed various projects, including
          <span className="font-bold mx-2 text-blue-400">
            a Laundry App, React Admin Dashboard, and HealthCare App,
          </span>
          which not only demonstrate my technical expertise but also showcase my
          strong attention to detail. I am dedicated to delivering high-quality
          solutions and crafting visually appealing and interactive user
          interfaces, not only for web applications but also for mobile
          applications. which demonstrate my technical expertise and attention
          to detail.
          <br />
          <br />
          As a frontend developer passionate about mobile application
          development, I am always eager to learn and explore the latest
          advancements in both web and mobile technologies. My ultimate goal is
          to create exceptional web and mobile experiences that make a positive
          impact on users and contribute to the ever-evolving world of software
          development.
          <br />
          <br />
          In addition to my cherished technical expertise, my heart finds
          comfort in the graceful company of cats🐈‍⬛, while my mind embarks on
          captivating journeys through the enchanting pages of novels.
        </motion.Typography>
      </div>
    </div>
  );
}

export default About;

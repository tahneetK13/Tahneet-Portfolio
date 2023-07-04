import React from 'react';
import Dashboard from "../assets/portfolio/Dashboard.jpg";
import MyPortfolio from "../assets/portfolio/Portfolio.png";
import JobPortal from "../assets/portfolio/Jobportal.jpg";
import LaundryApp from "../assets/portfolio/LaundryApp.png";
import DigiHealthCare from "../assets/portfolio/Digihealth.png";




const Portfolio = () => {
    const portfolios = [
        
        {
          id: 1,
          src: MyPortfolio,
          name: "My Portfolio",
          demoLink: "https://github.com/tahneetK13/Portfolio", 
          githubRepo: "https://github.com/tahneetK13/Portfolio",
          techstack: "Reactjs, Tailwind Css, Framer-motion",
        },
        {
          id: 2,
          name: "React Admin Dashboard",
          src: Dashboard,
          demoLink: "https://github.com/tahneetK13/React-Dashboard", 
          githubRepo: "https://github.com/tahneetK13/React-Dashboard",
          techstack: "React, Material UI, Nivo Charts, Formik, Yup, Fullcalendar, Data Grid",
        },
        {
          id: 3,
          name: "DigiHealth Care",
          src: DigiHealthCare,
          demoLink: "https://github.com/tahneetK13/DigiHealthCare", 
          githubRepo: "https://github.com/tahneetK13/DigiHealthCare",
          techstack: "Java, XML, and Android Studio",
        },
        {
          id: 4,
          name: "WashWish-A Laundry App",
          src: LaundryApp,
          demoLink: "https://expo.dev/@tahneetkanwal/WashWish", 
          githubRepo: "https://github.com/tahneetK13/WashWish",
          techstack: "React Native, Firebase",
        },
        {
          id: 5,
          name: "Job Portal",
          src: JobPortal,
          demoLink: "https://github.com/tahneetK13/Job_Portral", 
          githubRepo: "https://github.com/tahneetK13/Job_Portral",
          techstack: "HTML, CSS, PHP, SQL",
        },
  
       
      ];
      const handleDemoButtonClick = (demoLink) => {
        window.open(demoLink, "_blank");
      };
    
      const handleCodeButtonClick = (githubRepo) => {
        window.open(githubRepo, "_blank");
      };
    
      return (
        <div
          name="portfolio"
          className="bg-gradient-to-b from-blue-300 via-black to-gray-800"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className=" flex justify-center items-center text-5xl font-bold text-gray-800   border-b-4 border-gray-800">
                Portfolio
              </p>
              <p className="py-6 flex justify-center items-center text-white text-xl">Check out some of my work right here</p>
            </div>
    
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
              {portfolios.map(({ id, src, demoLink, githubRepo, name, techstack }) => (
                <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                  <img
                  width={1000}
                  height={1000}
                  className="max-w-full h-48 max-h-full object-cover object-top rounded-lg  duration-200 hover:scale-105"
                    src={src}
                    alt=""
                    //className="rounded-md duration-200 hover:scale-105"
                  />
                
                  <div className="my-2 flex flex-col gap-3">
                  <h3 className="text-xl text-center text-white font-medium">
                    {name}
                  </h3>
                  <p className="text-me  px-3 text-blue-300 ">
                    <span className="font-bold text-white">Tech Stack : </span>
                    {techstack}
                  </p>
                </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleDemoButtonClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 text-white duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeButtonClick(githubRepo)}
                  className="w-1/2 px-6 py-3 text-white m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Portfolio
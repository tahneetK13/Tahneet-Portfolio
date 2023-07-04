import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import android from "../assets/android.png";
import firebase from "../assets/firebase.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import php from "../assets/php.png";
import sql from "../assets/sql.png";
import redux from "../assets/redux.png";
import reactnative from "../assets/reactnative.png";


const Skills = () => {
    const techs = [
        {
          id: 1,
          src: html,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          src: css,
          title: "CSS",
          style: "shadow-blue-500",
        },
        {
          id: 3,
          src: javascript,
          title: "JavaScript",
          style: "shadow-yellow-500",
        },
        {
          id: 4,
          src: react,
          title: "React",
          style: "shadow-blue-600",
        },
        {
          id: 5,
          src: tailwind,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 6,
          src: android,
          title: "Android",
          style: "shadow-green-800",
        },
        {
          id: 7,
          src: firebase,
          title: "Firebase",
          style: "shadow-yellow-700",
        },
        {
          id: 8,
          src: github,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {
          id: 9,
          src: reactnative,
          title: "React Native",
          style: "shadow-blue-600",
        },
        {
          id: 10,
          src: sql,
          title: "SQL",
          style: "shadow-blue-400",
        },
        {
          id: 11,
          src: redux,
          title: "REDUX",
          style: "shadow-purple-400",
        },
        {
          id: 12,
          src: php,
          title: "PHP",
          style: "shadow-blue-400",
        },
      ];
    
      return (
        <div
          name="skills"
          className="bg-gradient-to-b from-gray-800 via-black to-blue-300 pt-20"
        >
          <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
              <p className="flex justify-center items-center text-5xl font-bold text-blue-400   border-b-2 border-white">
                SKILLS
              </p>
              <p className="py-6 flex justify-center items-center text-white text-xl">These are the technologies I've worked with</p>
            </div>
    
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
              {techs.map(({ id, src, title, style }) => (
                <div
                  key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                >
                  <img src={src} alt="" className="w-20 mx-auto" />
                  <p className="mt-4">{title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}

export default Skills
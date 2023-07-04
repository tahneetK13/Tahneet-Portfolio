import React from 'react'

const Contact = () => {
  return (
    <div
    name="contact"
    className="w-full h-screen bg-gradient-to-b from-blue-300 via-black to-gray-800"
  >
    <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
      <div className="pb-8">
        <p className="flex justify-center items-center text-5xl font-bold text-gray-800   border-b-4 border-gray-800">
          Contact
        </p>
        <p className="py-6 flex justify-center items-center text-white text-xl">Submit the form below to get in touch with me</p>
      </div>

      <div className=" flex justify-center items-center">
        <form
          action="https://getform.io/f/5861e404-15a1-4ae0-abad-2f19d6550cc4"
          method="POST"
          className=" flex flex-col w-full md:w-1/2"
        >
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="10"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
            Let's talk
          </button>
        </form>
      </div>
    </div>
  </div>
);
}

export default Contact
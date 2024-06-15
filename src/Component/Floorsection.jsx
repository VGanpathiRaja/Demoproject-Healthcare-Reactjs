import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import Floorcard from "./Floorcard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";
import Uservideo from "../assets/sample-video.mp4"

const Floorpart = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" lg:flex-row ">
      <div className="text-center  m-2">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Latest Services</h2>
        <p className="text-gray-600 mb-8">Check out our latest video to learn more about our products and services.</p>
      </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-8">
        <Floorcard icon={icon1} title="Acupuncturists" />
        <Floorcard icon={icon2} title="Physiotherapists" />
        <Floorcard icon={icon3} title="Psychotherapists" />
      </div>


      <div className="text-center pt-10 m-2">
        <h2 className="text-4xl font-bold text-gray-800 pb-2">We Provide client video call feature all So.. </h2>
        <p className="text-gray-600 mb-8">Check out our latest video to learn more about our products and services.</p>
      </div>
      
      <div className="flex justify-center mt-10 p-5">
      <div className=" w-full lg:w-3/4 space-y-3">
          <h1 className=" text-4xl font-semibold text-center lg:text-start">Video Calling Patient consulting</h1>
          <video width="100%" height="500" controls autoPlay muted >
              <source src={Uservideo} type="video/mp4"/>
          </video>
      </div>
    </div>
      
      <div className=" pt-8 lg:mt-0 text-center pb-12 md:pb-5">
        <button className=" bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out p-5">Get video call Appoinment Now</button>
     </div>
    </div>
  );
};

export default Floorpart;
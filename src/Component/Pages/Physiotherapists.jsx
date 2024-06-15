import React from "react";
import Navbar from "../Navbar.jsx";
import Img from '../../assets/medical-img3.jpg';
import Uservideo from "../../assets/sample-video.mp4"
import Footer from '../Footer.jsx'
function Physiotherapy({closeForm, submitForm}){
    return(
      <div>
      <Navbar/>
       <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4">
      <img className=" rounded-lg" src={Img} alt="img" />
    </div>

    <div className=" w-full lg:w-3/4 space-y-4">
      <h1 className=" text-4xl font-semibold text-center lg:text-start">About Physiotherapy</h1>
      <p className=" text-justify lg:text-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        labore rerum tempore tenetur commodi natus quos itaque voluptatums
        repudiandae nostrum accusantium vero voluptate aspernatur totam,
        laboriosam aut, et quae consequatur?
      </p>
      <p className="text-justify lg:text-start">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
        suscipit illum, numquam incidunt nostrum dolor officia doloremque
        cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
        Dolor, minus reiciendis.
      </p>
      <p className="text-justify lg:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
        Accusantium ab expedita veniam nobis aut, in rerum repellendus!
        Exercitationem libero recusandae corrupti accusantium reiciendis in
        placeat illo maxime ea.
      </p>
    </div>
  </div>
  <div className="flex flex-col lg:flex-row  justify-center">
  <div className=" w-full lg:w-3/4 space-y-3">
      <h1 className=" text-4xl font-semibold text-center lg:text-start">Patient Details Form</h1>
     
    <div className="mt-12 text-black flex flex-col lg:flex-row  justify-between items-center" >
      <form className="form-part  space-y-5 bg-white p-5 rounded-xl">
        <h1 className="text-4xl font-semibold text-center text-backgroundColor">
          Book Physiotherapy
        </h1>
        <div className=" flex flex-col">
          <input
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            type="text"
            name="userFirstName"
            id="userFirstName"
            placeholder="Full Name"
          />
        </div>
        <div className=" flex flex-col-6 justify-between">
          <input
            className="py-3 px-10 bg-[#d5f2ec] rounded-lg  "
            type="date"
            name="userLastName"
            id="userdob"
            placeholder="Date of Birth"
          />
          <input
            className="py-3 px-6 bg-[#d5f2ec] rounded-lg"
            type="number"
            name="userLastName"
            id="userLastName"
            placeholder="Enter your Age"
          />
        </div>
        <div className=" flex flex-col-6 justify-between">
          <input
            className="py-3 px-5 bg-[#d5f2ec] rounded-lg  "
            type="text"
            name="userLastName"
            id="userblood"
            placeholder="user Bood Group"
          />
          <input
            className="py-3 px-6 bg-[#d5f2ec] rounded-lg"
            type="text"
            name="userLastName"
            id="userhight"
            placeholder="Height"
          />
        </div>
        <div className=" flex flex-col-6 justify-between">
          <input
            className="py-3 px-5 bg-[#d5f2ec] rounded-lg "
            type="tel"
            name="userNumber"
            id="userNumber"
            placeholder="Phone Primary"
          />
          <input
            className="py-3 px-6 bg-[#d5f2ec] rounded-lg"
            type="tel"
            name="mobilenumeber"
            id="mobile-number"
            placeholder="Phone No Alternate"
          />
        </div>
        <div className=" flex flex-col">
          <input
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Your Email"
          />
        </div>
        <div className=" flex flex-col">
          <input
            className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            type="text"
            name="Address"
            id="address"
            placeholder="Full Address"
          />
        </div>
        <div className=" flex flex-col">
        <textarea  className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            name="cause"
            id="casues"
            placeholder="Causes of suffering Patient Notes..... "> </textarea>
        </div>
        
        <div className=" flex gap-5">
        <button
            className=" bg-backgroundColor text-white px-10 rounded-md active:bg-green-500"
            onClick={submitForm}
          >
           Submit
          </button>
         
          <button
            className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
            onClick={closeForm}
          >
            Close
          </button>
        </div>
      </form>

      <div className=" w-full lg:w-3/4 space-y-4">
      <h1 className=" text-2xl font-semibold text-center lg:text-start">Instruction for Filling Form and Patient video call consulting</h1>
      <p className=" text-justify lg:text-start">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
        labore rerum tempore tenetur commodi natus quos itaque voluptatums
        repudiandae nostrum accusantium vero voluptate aspernatur totam,
        laboriosam aut, et quae consequatur?
      </p>
      <p className="text-justify lg:text-start">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora quia
        suscipit illum, numquam incidunt nostrum dolor officia doloremque
        cupiditate, placeat explicabo sed iure atque neque quidem ipsam!
        Dolor, minus reiciendis.
      </p>
      <p className="text-justify lg:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
        Accusantium ab expedita veniam nobis aut, in rerum repellendus!
        Exercitationem libero recusandae corrupti accusantium reiciendis in
        placeat illo maxime ea.
      </p>
      <p className="text-justify lg:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
        Accusantium ab expedita veniam nobis aut, in rerum repellendus!
        Exercitationem libero recusandae corrupti accusantium reiciendis in
        placeat illo maxime ea.
      </p>
      <p className="text-justify lg:text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, illum.
        Accusantium ab expedita veniam nobis aut, in rerum repellendus!
      </p>
      <p className="text-justify lg:text-start">
        We Proving new  feature of video consalting of patiets below
      </p>
    </div>

    </div>
  </div>
  </div>

    <div className="flex justify-center mt-10 p-5">
      <div className=" w-full lg:w-3/4 space-y-3">
          <h1 className=" text-4xl font-semibold text-center lg:text-start">Video Calling Patient consulting</h1>
          <video width="100%" height="500" controls autoPlay muted >
              <source src={Uservideo} type="video/mp4"/>
          </video>
      </div>
    </div>
    <Footer/>
  </div> 
    )
}
export default Physiotherapy;
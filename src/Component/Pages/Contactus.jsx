import React from "react";
import Navbar from "../Navbar.jsx";
import Footer from '../Footer.jsx'
function Contactus({closeForm, submitForm }){
    return(
        <div>
        <Navbar/>
        <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4">
      <form className="form-part  space-y-5 bg-white p-5 rounded-xl">
        <h1 className="text-4xl font-semibold text-center text-backgroundColor">
          Contact Us
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
            className="py-3 px-12 bg-[#d5f2ec] rounded-lg "
            type="tel"
            name="userNumber"
            id="userNumber"
            placeholder="Phone Primary"
          />
          <input
            className="py-3 px-12 bg-[#d5f2ec] rounded-lg"
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
        <textarea  className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
            name="cause"
            id="casues"
            placeholder="Any querries ..... "> </textarea>
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
      </div>

    <div className=" w-full lg:w-3/4 space-y-4">
         <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=VEllachery%20Chennai+(Health%20care)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">gps watches</a></iframe>
    </div>
  </div>
      <Footer/>
    </div>
    )
}
export default Contactus;
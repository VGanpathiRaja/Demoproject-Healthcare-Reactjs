import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Appoinments from "./Appoinments";


function Header() {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };
  const submitForm = () => {
    setShowForm(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };
  return (
    <div className=" fixed w-full z-10 text-white">
      <div>
        <div className="flex justify-around items-center p-5 md:px-32 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <Link to="/" spy={true} smooth={true} duration={500} className='cursor-pointer'>
              <h1 className="text-2xl hover:text-hoverColor transition-all">Health Care</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8 ">
            <Link to="/" spy={true} smooth={true} duration={500} className=' hover:text-hoverColor transition-all cursor-pointer'>Home</Link>
            <Link to="/Psychotherapy" spy={true} smooth={true} duration={500} className= ' hover:text-hoverColor transition-all cursor-pointer'>Psychotherapists</Link> 
            <Link to="/Physiotherapy" spy={true} smooth={true} duration={500} className=' hover:text-hoverColor transition-all cursor-pointer'>Physiotherapists</Link>
            <Link to="/Acupuncture" spy={true} smooth={true} duration={500} className=' hover:text-hoverColor transition-all cursor-pointer'>Acupuncturists</Link>
            <Link to="/Contactus" spy={true} smooth={true} duration={500} className=' hover:text-hoverColor transition-all cursor-pointer'>Contact Us</Link>
            <Link to="/Daskboard" spy={true} smooth={true} duration={500} className=' hover:text-hoverColor transition-all cursor-pointer'>Daskboard</Link>
          </nav>

          <div className=" hidden lg:flex">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
             Appoinments
            </button>
          </div>
          {showForm && <Appoinments submitForm={submitForm} />}
          {showForm && <Appoinments closeForm={closeForm} />}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>

        </div>

       <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="Psychotherapy"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
           Psychotherapists
          </Link>
          <Link
            to="Physiotherapy"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
           Physiotherapists
          </Link>
          <Link
            to="Acupuncture"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Acupuncturists
          </Link>
          
          <Link
            to="Contactus"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
           Conatact Us
          </Link>

          <div className=" lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
             Appoinments
            </button>
          </div>
        </div>     

      </div>
    </div>
  )
}
export default Header;

import React from "react";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/medical-img3.jpg')] bg-no-repeat bg-cover opacity-100">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="xl:text-5xl font-bold leading-tight md:text-2xl sm:text-sm">
          Empowering Health Choices for a Vibrant Life Your Trusted..
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magnam
          omnis natus accusantium quos. Reprehenderit incidunt expedita
          molestiae impedit at sequi dolorem iste sit culpa, optio voluptates
          fugiat vero consequatur?
        </p>

     <button className=" bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out p-5">Learn More</button>
      </div>
    </div>
  );
};

export default Home;
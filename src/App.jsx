import React from "react";
import Header from "./Component/Navbar";
import Home from "./Component/Homesection";
import About from "./Component/Aboutsection";
import Floorpart from "./Component/Floorsection";
import Footer from "./Component/Footer";


function App(){
  return(
    <div >
    <Header/>
    <Home/>
    <About/>
    <Floorpart/>
    <Footer/>
    
    </div>
  )
}

export default App;
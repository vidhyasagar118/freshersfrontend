import React, { useEffect, useState } from "react";
import Votebtn from "./Votebtn";
import Profecerscard from "./Profecesr/Profecerscard";
import Footer from "./Footer";
import "./Home.css";
import Freshersimg from "../assets/Homeimg.jpeg";
import Mostexpectedvote from './Mostexpectedvote'

const Home = () => {
  

  return (
    <div>
      <div className="fresherstempimg">
                <img src={Freshersimg} alt="freshers banner" />
      </div>
      <Votebtn />
              <Mostexpectedvote />
      
      <Profecerscard />
      <Footer />
    </div>
  );
};

export default Home;

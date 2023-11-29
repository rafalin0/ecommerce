import React, { useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Directory from "../../components/directory-grid/Directory.tsx";
import HeroSection from "../../components/hero-section/HeroSection.tsx";

const Home = () => {
  const directory = useRef<HTMLDivElement>(null);
  
  const scrollToSection = () =>{
      directory?.current?.scrollIntoView({
        behavior: "smooth",
      });     
  };

  return (
    <>
      <HeroSection handleClick={scrollToSection} />
      <Directory ref={directory} />
      <Outlet />
    </>
  );
};

export default Home;

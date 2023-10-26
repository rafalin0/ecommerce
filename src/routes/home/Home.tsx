import React from "react";
import { Outlet } from "react-router-dom";

import Directory from "../../components/directory-grid/Directory.tsx";
import HeroSection from "../../components/hero-section/HeroSection.tsx";

function Home() {
  return (
    <>
      <HeroSection />
      <Directory />
      <Outlet />
    </>
  );
}

export default Home;

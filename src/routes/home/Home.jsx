import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Directory from "../../components/directory-grid/Directory";
import HeroSection from "../../components/hero-section/HeroSection";

function Home() {
  const categories = [
    {
      id: 1,
      title: "Jewelry Sets",
      imageurl:
        "https://images.pexels.com/photos/15236161/pexels-photo-15236161/free-photo-of-elegant-jewelry-photography-is-what-we-do-at-the-glorious-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      // https://images.pexels.com/photos/8891952/pexels-photo-8891952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
    },
    {
      id: 2,
      title: "Necklaces",
      imageurl:
        "https://images.pexels.com/photos/12680629/pexels-photo-12680629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Earrings",
      imageurl:
        "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Rings",
      imageurl:
        "https://images.pexels.com/photos/15204302/pexels-photo-15204302/free-photo-of-elegant-jewelry-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      title: "Bracelets",
      imageurl:
        "https://images.pexels.com/photos/8891958/pexels-photo-8891958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <Fragment>
      <HeroSection />
      <div className="home-section">
        <Directory categories={categories} />
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Home;

import { Fragment } from "react";
import Directory from "../../components/directory-grid/Directory";
import HeroSection from "../../components/hero-section/HeroSection";
import "./home.scss";

function Home() {
  const categories = [
    {
      id: 1,
      title: "Jewelry Sets",
      imageURL:
        "https://images.pexels.com/photos/15236161/pexels-photo-15236161/free-photo-of-elegant-jewelry-photography-is-what-we-do-at-the-glorious-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      // https://images.pexels.com/photos/8891952/pexels-photo-8891952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
    },
    {
      id: 2,
      title: "Necklaces",
      imageURL:
        "https://images.pexels.com/photos/12680629/pexels-photo-12680629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Earrings",
      imageURL:
        "https://images.pexels.com/photos/10983783/pexels-photo-10983783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Rings",
      imageURL:
        "https://images.pexels.com/photos/15204302/pexels-photo-15204302/free-photo-of-elegant-jewelry-photography.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 5,
      title: "Bracelets",
      imageURL:
        "https://images.pexels.com/photos/8891958/pexels-photo-8891958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <Fragment>
      <HeroSection />
      <div className="home-section">
        <Directory categories={categories} />
      </div>
    </Fragment>
  );
}

export default Home;

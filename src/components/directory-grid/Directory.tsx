import React, { forwardRef, Ref } from "react";
import DirectoryItem from "../directory-item/DirectoryItem.tsx";
import { DirectoryContainer } from "./DirectoryStyled.tsx";

type Category = {
  id: number;
  title: string;
  imageurl: string;
};

interface DirectoryProps {
  // Define props here if needed
}

const Directory = forwardRef(
  (props: DirectoryProps, ref: Ref<HTMLDivElement>) => {
    const categories: Category[] = [
      {
        id: 1,
        title: "Jewelry Sets",
        imageurl:
          "https://images.pexels.com/photos/15236161/pexels-photo-15236161/free-photo-of-elegant-jewelry-photography-is-what-we-do-at-the-glorious-studio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      <DirectoryContainer ref={ref}>
        {categories.map(({ title, id, imageurl }) => (
          <DirectoryItem title={title} key={id} imageURL={imageurl} />
        ))}
      </DirectoryContainer>
    );
  }
);

export default Directory;

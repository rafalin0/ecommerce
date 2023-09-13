import React from "react";
import DirectoryItem from "../directory-item/DirectoryItem";
import { DirectoryContainer } from "./DirectoryStyled.jsx";

function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map(({ title, id, imageurl }) => (
        <DirectoryItem title={title} key={id} imageURL={imageurl} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;

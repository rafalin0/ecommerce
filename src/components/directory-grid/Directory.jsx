import React from "react";
import DirectoryItem from "../directory-item/DirectoryItem";
import { DirectoryContainer } from "./DirectoryStyled.jsx";

function Directory({ categories }) {
  return (
    <DirectoryContainer>
      {categories.map(({ title, id, imageURL }) => (
        <DirectoryItem title={title} key={id} imageURL={imageURL} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;

import React, { forwardRef } from "react";
import DirectoryItem from "../directory-item/DirectoryItem.tsx";
import { DirectoryContainer } from "./DirectoryStyled.tsx";
import { categories } from "../../constants/constants.ts";

const Directory = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <DirectoryContainer ref={ref}>
      {categories.map(({ title, id, imageurl }) => (
        <DirectoryItem
          key={id}
          id={id}
          title={title}
          imageURL={imageurl}
        />
      ))}
    </DirectoryContainer>
  );
});

export default Directory;

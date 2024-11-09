import React, { forwardRef, Ref } from "react";
import DirectoryItem from "../directory-item/DirectoryItem.tsx";
import { DirectoryContainer } from "./DirectoryStyled.tsx";
import { categories } from "../../constants/constants.ts";

interface DirectoryProps {
  // Define props here if needed
}

const Directory = forwardRef(
  (props: DirectoryProps, ref: Ref<HTMLDivElement>) => {
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

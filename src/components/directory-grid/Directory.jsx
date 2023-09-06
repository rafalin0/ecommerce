import React from "react";
import Category from "../directory-item/DirectoryItem";
import "./directory.scss";

function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageURL }) => (
        <Category title={title} key={id} imageURL={imageURL} />
      ))}
    </div>
  );
}

export default Directory;

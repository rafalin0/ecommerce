import React, { useState } from "react";

import Button from "../button/Button";

import "./category.scss";

function Category(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { id, title, imageURL } = props;
  return (
    <div
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
      key={id}
      className="category-container"
    >
      <div
        className="category-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="category-text-container">
        {isMouseOver ? <Button>shop now</Button> : <h2>{title}</h2>}
      </div>
    </div>
  );
}

export default Category;

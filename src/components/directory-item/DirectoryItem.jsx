import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";

import "./directory-item.scss";

function DirectoryItem(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { id, title, imageURL } = props;

  const navigate = useNavigate();

  const shopCategoryHandler = () => {
    navigate(`/catalogue/${title.toLowerCase()}`);
  };
  return (
    <div
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
      key={id}
      className="directory-item-container"
    >
      <div
        className="directory-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="directory-text-container">
        {isMouseOver ? (
          <Button type="button" onClick={shopCategoryHandler}>
            shop now
          </Button>
        ) : (
          <h2 className="directory-title">{title}</h2>
        )}
      </div>
    </div>
  );
}

export default DirectoryItem;

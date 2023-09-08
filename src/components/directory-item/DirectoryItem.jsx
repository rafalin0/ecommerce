import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../button/Button";

import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryBody,
} from "./DirectoryItemStyled.jsx";

function DirectoryItem(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const { id, title, imageURL } = props;

  const navigate = useNavigate();

  const shopCategoryHandler = () => {
    navigate(`/catalogue/${title.toLowerCase()}`);
  };
  return (
    <DirectoryItemContainer
      onMouseOver={() => {
        setIsMouseOver(true);
      }}
      onMouseOut={() => {
        setIsMouseOver(false);
      }}
      key={id}
    >
      <BackgroundImage imageURL={imageURL} />
      <DirectoryBody>
        {isMouseOver ? (
          <Button type="button" onClick={shopCategoryHandler}>
            shop now
          </Button>
        ) : (
          <h2>{title}</h2>
        )}
      </DirectoryBody>
    </DirectoryItemContainer>
  );
}

export default DirectoryItem;

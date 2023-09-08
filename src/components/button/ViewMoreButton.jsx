import { BsChevronRight } from "react-icons/bs";

import { ExpandingButton, IconContainer } from "./ViewMoreButtonStyled.jsx";

const ViewMoreButton = () => {
  return (
    <ExpandingButton>
      <IconContainer>
        <BsChevronRight />
      </IconContainer>
    </ExpandingButton>
  );
};

export default ViewMoreButton;

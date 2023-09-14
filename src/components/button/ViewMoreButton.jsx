import { BsChevronRight } from "react-icons/bs";

import { ExpandingButton } from "./ViewMoreButtonStyled.jsx";

const ViewMoreButton = () => {
  return (
    <ExpandingButton>
      <BsChevronRight />
    </ExpandingButton>
  );
};

export default ViewMoreButton;

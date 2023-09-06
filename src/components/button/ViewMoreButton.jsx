import { BsChevronRight } from "react-icons/bs";

import "./view-more-button.scss";

function ViewMoreButton() {
  return (
    <div className="view-more-container">
      <div className="view-more-btn">
        <BsChevronRight className="view-more-icon" />
      </div>
    </div>
  );
}

export default ViewMoreButton;

import React from "react";

import { SpinnerOverlay, SpinnerContainer } from "./SpinnerStyled.tsx";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;

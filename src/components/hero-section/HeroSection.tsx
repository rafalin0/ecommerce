import React from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button.tsx";
import {
  HeroSectionContainer,
  AnnouncementContainer,
} from "./HeroSectionStyled.tsx";

const HeroSection: React.FC<{ handleClick: () => void }> = ({ handleClick }) => {
  return (
    <HeroSectionContainer>
      <AnnouncementContainer>
        <div className="title">
          <span>New Arrival</span>
          <h1>Classic Sets</h1>
        </div>

        <p>dainty, elegant, timeless</p>
        <p>
          Celebrate the sophistication of women, their independence, and the confident allure they bring to life. Infuse your style with the vibrant energy of women, expertly captured in every meticulously crafted piece of exquisite jewelry. Elevate your elegance with our stunning collection!
        </p>

        <Button onClick={handleClick} buttonType={BUTTON_TYPE_CLASSES.inverted}>Shop now</Button>
      </AnnouncementContainer>
    </HeroSectionContainer>
  );
}

export default HeroSection;

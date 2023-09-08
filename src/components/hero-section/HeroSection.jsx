import Button from "../button/Button";
import {
  HeroSectionContainer,
  AnnouncementContainer,
} from "./HeroSectionStyled.jsx";

function HeroSection() {
  return (
    <HeroSectionContainer>
      <AnnouncementContainer>
        <div className="title">
          <span>New Arrival</span>
          <h1>Classic Sets</h1>
        </div>

        <p>dainty, elegant, timeless</p>
        <p>
          emphasizing women's elegance and independent and confident attitude
          towards life, integrating women's energy into the design concept,
          complemented by the craftsmen's exquisite craftsmanship, to achieve
          each piece of exquisite jewelry.
        </p>

        <Button buttonType="inverted">Shop now</Button>
      </AnnouncementContainer>
    </HeroSectionContainer>
  );
}

export default HeroSection;

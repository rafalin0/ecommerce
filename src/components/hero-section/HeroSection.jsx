import Button from "../button/Button";
import "./hero-section.scss";

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-bg"></div>
      <div className="announcement-container">
        <div className="title">
          <span>New Arrival</span>
          <h1>Classic Sets</h1>
        </div>
        <div className="body">
          <p>dainty, elegant, timeless</p>
          <p>
            emphasiz ing women's elegance and independent and confident attitude
            towards life, integrating women's energy into the design concept,
            complemented by the craftsmen's exquisite craftsmanship, to achieve
            each piece of exquisite jewelry.
          </p>
        </div>
        <Button buttonType="inverted">Shop now</Button>
      </div>
    </div>
  );
}

export default HeroSection;

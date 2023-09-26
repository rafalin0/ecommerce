const sizes = {
  mobileS: "400px",
  mobileM: "600px",
  mobileL: "900px",
  tablet: "1280px",
  laptop: "1440px",
  laptopL: "1920px",
  desktop: "2560px",
};

// Desktop-first Queries
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

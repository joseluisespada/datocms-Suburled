import {
  whiteColor,
  cardTitle,
  grayColor,
  hexToRgb
} from "assets/jss/styles.js";

const suburCardStyle = {
  cardTitleAbsolute: {
    ...cardTitle,
    position: "absolute !important",
    bottom: "15px !important",
    left: "15px !important",
    color: whiteColor + " !important",
    fontSize: "1.125rem !important",
    textShadow: "0 2px 5px rgba(" + hexToRgb(grayColor[9]) + ", 0.5) !important"
  },
  cardDescription: {
    whiteSpace: "pre-wrap"
  }
};

export default suburCardStyle;

import {
  container,
  title,
  main,
  whiteColor,
  mainRaised,
  cardTitle,
  grayColor,
  hexToRgb
} from "assets/jss/nextjs-material-kit-pro.js";

const landingPageStyle = {
  container: {
    color: whiteColor,
    ...container,
    zIndex: "2",
    padding: "70px 0"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: whiteColor,
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    ...main,
    display: "flex"
  },
  mainRaised: {
    ...mainRaised
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right"
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
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

export default landingPageStyle;

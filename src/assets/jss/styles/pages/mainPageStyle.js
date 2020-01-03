import {
  container,
  title,
  main,
  whiteColor,
  grayColor,
  mainRaised
} from "assets/jss/styles.js";

const landingPageStyle = {
  container: {
    color: grayColor[1],
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
    color: whiteColor,
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
  works: {
    marginTop: "60px"
  }
};

export default landingPageStyle;

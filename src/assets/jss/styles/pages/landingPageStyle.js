import {
  container,
  title,
  main,
  whiteColor,
  mainRaised,
  cardTitle,
  grayColor,
  hexToRgb
} from "assets/jss/styles.js";

const landingPageStyle = {
  container: {
    color: whiteColor,
    ...container,
    zIndex: "2",
    padding: "70px 0"
  },
  wrapper: {
    paddingBottom: "70px"
  },
  typist: {
    fontSize: "1.125rem",
    lineHeight: "1.5em",
    "@media (min-width: 768px)": {
      fontSize: "2.25rem"
    },
    color: whiteColor
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
    margin: "0 0 40px",
    background: "rgba(0,0,0,0.5)",
    width: "max-content",
    padding: "0 15px",
    color: whiteColor
  },
  cardDescriptionWhite: {
    minHeight: "100px"
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

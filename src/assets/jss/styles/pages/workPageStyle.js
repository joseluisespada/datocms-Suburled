import {
  container,
  title,
  main,
  whiteColor,
  grayColor,
  mainRaised
} from "assets/jss/styles.js";

const workPageStyle = {
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
  main: {
    ...main,
    display: "flex"
  },
  mainRaised: {
    ...mainRaised
  },
  sheetInner: {
    maxWidth: "600px"
  },
  sheetLead: {
    fontSize: "16px",
    marginBottom: "30px"
  },
  sheetSlider: {
    marginBottom: "30px"
  },
  sheetBody: {

  },
  sheetGallery: {
    margin: "30px 0"
  }
};

export default workPageStyle;

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import contactStyle from "assets/jss/styles/pages/landing/contactStyle.js";

const useStyles = makeStyles(contactStyle);

export default function SectionContact() {
  const [specialitySelect, setSpecialitySelect] = React.useState("1");
  const handleSpeciality = event => {
    setSpecialitySelect(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.aboutUs}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h2 className={classNames(classes.title, classes.textCenter)}>
            ¿Quieres trabajar con nosotros?
          </h2>
          <h4 className={classNames(classes.description, classes.textCenter)}>
            Escríbenos un email a {" "}
            <a href="mailto:suburled@gmail.com?Subject=Interesado%20en%20trabajar%20con%20vosotros">suburled@gmail.com</a>{" "}
            adjuntando tu CV y nos pondremos en contacto contigo lo antes posible.
          </h4>
          <GridContainer>
            <GridItem
              md={4}
              sm={4}
              className={classNames(
                classes.mrAuto,
                classes.mlAuto,
                classes.textCenter
              )}
            >
              <Button 
                color="primary" 
                round
                href="mailto:suburled@gmail.com?Subject=Estoy%20interesado%20en%20trabajar%20con%20vosotros"
              >
                Hablemos
              </Button>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </div>
  );
}
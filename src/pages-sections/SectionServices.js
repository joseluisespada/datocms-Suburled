import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Gesture from "@material-ui/icons/Gesture";
import Build from "@material-ui/icons/Build";
import BorderColorIcon from '@material-ui/icons/BorderColor';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import servicesStyle from "assets/jss/nextjs-material-kit-pro/pages/landing/servicesStyle.js";

const useStyles = makeStyles(servicesStyle);

export default function SectionServices() {
  const classes = useStyles();
  return (
    <div className={classes.services}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(
            classes.mlAuto,
            classes.mrAuto,
            classes.textCenter
          )}
        >
          <h2 className={classes.title}>
            Sabemos hacerlo bien
          </h2>
          <h5 className={classes.description}>
            El éxito de suburled radica en la calidad y experiencia de sus profesionales. Un adecuado diseño es esencial para llevar con éxito su obra o reforma.
          </h5>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="1. Diseño"
            description={
              <span>
                <p>
                  Te ayudamos y asesoramos en la toma de decisiones y en el diseño de la instalación o reforma.{" "}
                </p>
              </span>
            }
            icon={Gesture}
            iconColor="primary"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="2. Calidad-precio"
            description={
              <span>
                <p>
                  Cumplimos plazos y presupuesto. Ponemos a tu disposición un amplio catálogo de materiales de distintas calidades/precio para que puedas elegir la que más te convenga.{" "}
                </p>
              </span>
            }
            icon={Build}
            iconColor="primary"
          />
        </GridItem>
        <GridItem md={4} sm={4}>
          <InfoArea
            title="3. Cumplimos la normativa"
            description={
              <span>
                <p>
                  Todas nuestras reformas e instalaciones cumplen estrictamente las normativas pertinentes vigentes y están dirigidas por profesionales con gran experiencia.{" "}
                </p>
              </span>
            }
            icon={BorderColorIcon}
            iconColor="primary"
          />
        </GridItem>
      </GridContainer>
    </div>
  );
}

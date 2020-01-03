import React from 'react'
import classNames from "classnames";
import Layout from "layout/layout"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
import mainPageStyle from "assets/jss/styles/pages/mainPageStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Image from "assets/img/bg8.jpg";
import LandingServices from "pages-sections/LandingServices";

const useStyles = makeStyles(mainPageStyle);

export default function ErrorPage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <Layout>
      <Parallax image={Image} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Suburled</h1>
              <h4 className={classes.subtitle}>
                Instalaciones eléctricas, contra incendios, reformas y mantenimientos en Barcelona.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <h1>Página no encontada</h1>
    	  <p>Puede que esta ruta no exista o haya sido borrada.</p>
        </div>
      </div>   
    </Layout>
  );
}
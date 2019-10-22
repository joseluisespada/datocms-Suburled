import React from 'react'
// import { Link, graphql } from 'gatsby'
import classNames from "classnames";
import Layout from "layout/layout"
import Helmet from "react-helmet";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import mainPageStyle from "assets/jss/nextjs-material-kit-pro/pages/mainPageStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(mainPageStyle);


const Hosteleria = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Helmet title="Reformas integrales de bares y restaurantes. Tramitaciones, licencias, proyectos y obra." defer={false} />
      <Parallax /*image={require("assets/img/bg8.jpg")}*/ filter="info" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Reformas Hostelería</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

         

        </div>
      </div>   
    </Layout>
)}

export default Hosteleria;
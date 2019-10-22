import React from 'react'
import classNames from "classnames";
import Layout from "layout/layout"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";
import landingPageStyle from "assets/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import Image from "assets/img/bg8.jpg";
import LandingServices from "pages-sections/LandingServices";

const useStyles = makeStyles(landingPageStyle);


const IndexPage = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Parallax image={Image} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Suburled</h1>
              <h4>
                Instalaciones eléctricas, contra incendios, reformas y mantenimientos en Barcelona.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <LandingServices classes={classes} />          
        </div>
      </div>   
    </Layout>
)}

export default IndexPage;

/*
<div key={work.id} className="showcase__item">
              <figure className="card">
                <Link to={`/works/${work.slug}`} className="card__image">
                  <Img fluid={work.coverImage.fluid} />
                </Link>
                <figcaption className="card__caption">
                  <h6 className="card__title">
                    <Link to={`/works/${work.slug}`}>{work.title}</Link>
                  </h6>
                  <div className="card__description">
                    <p>{work.excerpt}</p>
                  </div>
                </figcaption>
              </figure>
            </div>
            */

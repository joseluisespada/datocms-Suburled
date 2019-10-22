import React from 'react'
import Slider from 'react-slick'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from "layout/layout"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import classNames from "classnames";
import mainPageStyle from "public/jss/nextjs-material-kit-pro/pages/mainPageStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(mainPageStyle);


export default ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <Parallax /*image={require("public/img/bg8.jpg")}*/ filter="info" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>{`${data.datoCmsWork.title}`}</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container} style={{maxWidth: "max-content"}}>

         <div className="sheet__inner">
              <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
              <div className="sheet__slider">
                <Slider infinite={true} slidesToShow={2} arrows>
                  {data.datoCmsWork.gallery.map(({ fluid }) => (
                    <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
                  ))}
                </Slider>
              </div>
              <div
                className="sheet__body"
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
                }}
              />
              <div className="sheet__gallery">
                <Img fluid={data.datoCmsWork.coverImage.fluid} />
              </div>
            </div>

        </div>
      </div>   
    </Layout>
)}

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`

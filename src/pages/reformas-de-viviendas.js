import React from 'react'
import { graphql } from 'gatsby'
import classNames from "classnames";
import Layout from "layout/layout"
import Helmet from "react-helmet";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import mainPageStyle from "public/jss/nextjs-material-kit-pro/pages/mainPageStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import SuburCard from "components/Card/SuburCard.js";
import ReformasContent from 'pages-sections/ReformasContent';

const useStyles = makeStyles(mainPageStyle);


const Viviendas = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Helmet title="Reformas de viviendas. Especialistas en cocinas y baños." defer={false} />
      <Parallax /*image={require("public/img/bg8.jpg")}*/ filter="info" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Reformas de Viviendas</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

        <ReformasContent />

        <GridContainer>
          {data.allDatoCmsWork.edges.map(({ node: work }) => (            
            <SuburCard key={work.id} work={work} />
          ))}
        </GridContainer>
         

        </div>
      </div>   
    </Layout>
)}

export default Viviendas;

export const query = graphql`
  query ViviendasQuery {
    allDatoCmsWork(filter: {categoria: {eq: "reformas"}}, sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`

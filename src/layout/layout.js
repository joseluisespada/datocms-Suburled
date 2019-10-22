import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import { HelmetDatoCms } from 'gatsby-source-datocms'

import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";


import HeaderLinks from "components/Header/HeaderLinks.js";

import layoutPageStyle from "public/jss/nextjs-material-kit-pro/pages/layoutPageStyle.js";

import 'styles/index.sass' //quitar, css del primer template

import "public/scss/nextjs-material-kit-pro.scss";

import "public/css/react-demo.css";

import "animate.css/animate.min.css";

const useStyles = makeStyles(layoutPageStyle);


const TemplateWrapper = ({ children, ...rest }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <StaticQuery query={graphql`
    query LayoutQuery
    {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsHome {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
    }
  `}
  render={data => {
    return (
      <div>
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsHome.seoMetaTags}
      />
      <Header
        color="transparent"
        brand="Suburled"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "info"
        }}
        {...rest}
      />
      
      {children}

      <Footer
          theme="transparent"
          content={
            <div>
              <div
                className={classNames(classes.pullCenter, classes.copyRight)}
              >
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <Link to="/">Suburled</Link>{" "}
                Todos los derechos reservados.
              </div>
            </div>
          }
        >
          <div className={classes.footer}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                <GridItem xs={12} sm={6} md={6}>
                  <a href="#pablo">
                    <h5>Suburled</h5>
                  </a>
                  <p>
                    Instalaciones eléctricas, contra incendios, reformas y mantenimientos en Barcelona y alrededores.
                  </p>
                  <form>
                    <Button color="primary">
                      <Link to="/presupuesto" style={{color: "white"}}>Pide Presupuesto</Link>
                    </Button>
                  </form>
                </GridItem>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Nosotros</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="/contacto">Contacto</Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Servicios</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="/reformas-de-viviendas">Reformas de Viviendas</Link>
                  </li>
                  <li>
                    <Link to="/construccion-de-viviendas">Construcción de Viviendas</Link>
                  </li>
                  <li>
                    <Link to="/instalaciones">Instalaciones</Link>
                  </li>
                  <li>
                    <Link to="/mantenimiento">Mantenimiento</Link>
                  </li>
                  <li>
                    <Link to="/reformas-hosteleria">Reformas hostelería</Link>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Legal</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <Link to="/nota-legal">Nota Legal</Link>
                  </li>
                  <li>
                    <Link to="/politica-de-privacidad">Política de Privacidad</Link>
                  </li>
                  <li>
                    <Link to="/cookies">Cookies</Link>
                  </li>
                </ul>
              </GridItem>
            </GridContainer>
          </div>
        </Footer>


    </div>
    )
  }}
  />
  );
}

export default TemplateWrapper


/*
<div className="container">
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsHome.seoMetaTags}
      />
      <Header
        absolute
        color="transparent"
        brand="Suburled"
        links={<HeaderLinks dropdownHoverColor="dark" />}
        {...rest}
      />
      <div className="container__sidebar">
        <div className="sidebar">
          <h6 className="sidebar__title">
            <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
          </h6>
          <div
            className="sidebar__intro"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
            }}
          />
          <ul className="sidebar__menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <p className="sidebar__social">
            {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
              <a
                key={profile.profileType}
                href={profile.url}
                target="blank"
                className={`social social--${profile.profileType.toLowerCase()}`}
              > </a>
            ))}
          </p>
          <div className="sidebar__copyright">{data.datoCmsHome.copyright}</div>
        </div>
      </div>
      <div className="container__body">
        <div className="container__mobile-header">
          <div className="mobile-header">
            <div className="mobile-header__menu">
              <Link to="#" data-js="toggleSidebar" />
            </div>
            <div className="mobile-header__logo">
              <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
    */
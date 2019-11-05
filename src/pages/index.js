import React from 'react'
import classNames from "classnames";
import Layout from "layout/layout";
import Typist from 'react-typist';
import { Link } from 'gatsby';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import landingPageStyle from "assets/jss/nextjs-material-kit-pro/pages/landingPageStyle.js";
import { withStyles } from "@material-ui/core/styles";
import Image from "assets/img/works/003.jpg";
import LandingServices from "pages-sections/LandingServices";
import SectionContact from "pages-sections/SectionContact";
import SectionWorks from "pages-sections/SectionWorks";
import SectionServices from "pages-sections/SectionServices";

// const useStyles = makeStyles(landingPageStyle);

const texts = [
  "Instalaciones eléctricas",
  "Fontanería",
  "Reformas de baños y cocinas",
  "Reformas integrales de viviendas",
  "Contrucción de viviendas",
  "Arquitectura e ingeniería"
];

// const classes = useStyles();

class IndexPage extends React.Component {
  state = {
      renderMsg: true
  }

  onHeaderTyped = () => {
    const that = this;
      this.timeout = setTimeout(() => {
        this.setState({ renderMsg: false });
        that.timeout2 = setTimeout(() => {
          that.setState({ renderMsg: true });
        }, 60);
      }, 1000);       
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    if (this.timeout2) {
      clearTimeout(this.timeout2);
    }
  }

  render() {    
    const { classes } = this.props;
    const delay = 1500;
    return (
      <Layout>
        <Parallax image={Image} filter="dark">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6}>

                {this.state.renderMsg ?
                  <h2>
                    <Typist
                      className="typist-header"
                      avgTypingDelay={20}
                      startDelay={1000}
                      onTypingDone={this.onHeaderTyped}
                    >
                    <span>{texts[0]}</span>
                    <Typist.Backspace count={texts[0].length} delay={delay} />
                    <span>{texts[1]}</span>
                    <Typist.Backspace count={texts[1].length} delay={delay} />
                    <span>{texts[2]}</span>
                    <Typist.Backspace count={texts[2].length} delay={delay} />
                    <span>{texts[3]}</span>
                    <Typist.Backspace count={texts[3].length} delay={delay} />
                    <span>{texts[4]}</span>
                    <Typist.Backspace count={texts[4].length} delay={delay} />
                    <span>{texts[5]}</span>
                    <Typist.Backspace count={texts[5].length} delay={delay} />
                  </Typist>
                  </h2>
                : <h2>|</h2>}

                <h4 className={classes.subtitle}>A un precio sin compentencia</h4>

                <Link to="/presupuesto">
                  <Button
                    color={"primary"}
                    className={classes.navButton}
                  >
                    Solicita Presupuesto
                  </Button>
                </Link>

                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SectionServices />
            <LandingServices classes={classes} />
            <SectionWorks />
            <SectionContact />
          </div>
        </div>   
      </Layout>
    )
  }    
}

export default withStyles(landingPageStyle)(IndexPage);

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

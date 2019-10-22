import React from 'react'
import { Link } from 'gatsby'
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Info from "components/Typography/Info.js";
import Img from 'gatsby-image';
import suburCardStyle from "public/jss/nextjs-material-kit-pro/components/suburCardStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(suburCardStyle);

const SuburCard = ({ work }) => {
  const classes = useStyles();

  return (
    <GridItem xs={12} md={6} lg={4}>
      <Card blog>
        <CardHeader image>
          <Link to={`/trabajos/${work.slug}`}>
            <Img fluid={work.coverImage.fluid} />
            <div className={classes.cardTitleAbsolute}>
              {work.title}
            </div>
          </Link>
          <div
            className={classes.coloredShadow}
            style={{
              backgroundImage: `url(${Image})`,
              opacity: "1"
            }}
          />
        </CardHeader>
        <CardBody>
          <Info>
            <h6 className={classes.cardCategory}>
              <Link to={`/trabajos/${work.slug}`}>{work.title}</Link>
            </h6>
          </Info>
          <div className={classes.cardDescription}>
            {work.excerpt}
          </div>
        </CardBody>
      </Card>
    </GridItem>
)};

export default SuburCard;
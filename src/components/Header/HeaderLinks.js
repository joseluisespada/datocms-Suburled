/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from 'gatsby';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import HomeIcon from '@material-ui/icons/Home';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HotTubIcon from '@material-ui/icons/HotTub';
import WarningIcon from '@material-ui/icons/Warning';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import ViewDay from '@material-ui/icons/CalendarViewDay';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "public/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Servicios"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={ViewDay}
          dropdownList={[
            <Link to="/reformas-de-viviendas">
              <span className={classes.dropdownLink}>
                <HomeIcon className={classes.dropdownIcons} /> Reformas de Viviendas
              </span>
            </Link>,
            <Link to="/construccion-de-viviendas">
              <span className={classes.dropdownLink}>
                <HomeWorkIcon className={classes.dropdownIcons} /> Construcción de Viviendas
              </span>
            </Link>,
            <Link to="/instalaciones">
              <span className={classes.dropdownLink}>
                <HotTubIcon className={classes.dropdownIcons} /> Instalaciones
              </span>
            </Link>,
            <Link to="/mantenimiento">
              <span className={classes.dropdownLink}>
                <WarningIcon className={classes.dropdownIcons} /> Mantenimiento
              </span>
            </Link>,
            <Link to="/reformas-hosteleria">
              <span className={classes.dropdownLink}>
                <RestaurantIcon className={classes.dropdownIcons} /> Reformas Hostelería
              </span>
            </Link>
          ]}
        />
      </ListItem>
      
      <ListItem className={classes.listItem}>
        <Hidden mdDown>
          <Link to="/presupuesto">
            <Button
              color={"white"}
              className={classes.navButton}
              round
            >
              Pide Presupuesto
            </Button>
          </Link>
            
        </Hidden>
        <Hidden mdUp>
          <Link to="/presupuesto">
            <Button
              color={"info"}
              className={classes.navButton}
              round
            >
              Pide Presupuesto
            </Button>
          </Link>
        </Hidden>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

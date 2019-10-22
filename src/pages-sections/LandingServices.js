import React from 'react'
import { Link } from 'gatsby'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Info from "components/Typography/Info.js";
import Image from "public/img/bg8.jpg";


const CardLayout = ({ classes, href, title, title2, desc }) => {

  return (
    <GridItem xs={12} md={6} lg={4}>
      <Card blog>
        <CardHeader image>
          <Link to={href}>
            <img src={Image} alt="..." />
            <div className={classes.cardTitleAbsolute}>
              {title}
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
            <h6 className={classes.cardCategory}>{title2}</h6>
          </Info>
          <div className={classes.cardDescription}>
            {desc}
          </div>
        </CardBody>
      </Card>
    </GridItem>
)};

const LandingServices = ({ classes }) => {

  return (
    <GridContainer>
      <CardLayout 
        classes={classes}
        href="/instalaciones"
        title="Instalaciones eléctricas"
        title2="Instalaciones eléctricas"
        desc="Suburled le ofrece su experiencia en el proyecto e implementación de instalaciones eléctricas. Dimensionar adecuadamente una instalación le evitará problemas a la hora de comenzar a producir en su negocio, por lo que nuestro servicio se enfoca en una comunicación continua con el cliente."
      />

      <CardLayout 
        classes={classes}
        href="/mantenimiento"
        title="Mantenimiento"
        title2="Mantenimiento"
        desc="Suburled ofrece servicios de mantenimiento de instalaciones industriales y de hostelería, facilitando la operatividad contínua de su negocio, realizando reparaciones y trabajos de prevención."
      />

      <CardLayout 
        classes={classes}
        href="/instalaciones"
        title="Instalaciones eléctricas"
        title2="Instalaciones eléctricas"
        desc={`¿Acaba de recibir un traspaso?, ¿una nave que no se ajusta exactamente a sus necesidades?
Suburled lleva a cabo sus proyectos de construcción para locales y oficinas nuevos o a reformar. \n
1. Oficinas en naves industriales
2. Aislamiento térmico e insonorizaciones
3. Sectorización anti incendio
4. Bares, restaurantes, locales comerciales
5. Suelos, alicatados, revestimientos`}
      />

      <CardLayout 
        classes={classes}
        href="/instalaciones"
        title="Instalaciones eléctricas"
        title2="Instalaciones eléctricas"
        desc="Suburled le ofrece su experiencia en el proyecto e implementación de instalaciones eléctricas. Dimensionar adecuadamente una instalación le evitará problemas a la hora de comenzar a producir en su negocio, por lo que nuestro servicio se enfoca en una comunicación continua con el cliente."
      />

      <CardLayout 
        classes={classes}
        href="/instalaciones"
        title="Instalaciones eléctricas"
        title2="Instalaciones eléctricas"
        desc="Suburled le ofrece su experiencia en el proyecto e implementación de instalaciones eléctricas. Dimensionar adecuadamente una instalación le evitará problemas a la hora de comenzar a producir en su negocio, por lo que nuestro servicio se enfoca en una comunicación continua con el cliente."
      />
    </GridContainer>
)}

export default LandingServices
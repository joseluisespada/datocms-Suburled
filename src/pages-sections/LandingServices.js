import React from 'react'
import { Link } from 'gatsby'
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
// import Info from "components/Typography/Info.js";
import Button from "components/CustomButtons/Button.js";
import Subject from "@material-ui/icons/Subject";
import Instalaciones from "assets/img/sections/bombilla1.jpg";
import Construccion from "assets/img/sections/construccion.jpg";
import Fontaneria from "assets/img/sections/fontaneria.jpg";
import Incendio from "assets/img/sections/incendio.jpg";
import Mantenimiento from "assets/img/sections/mantenimiento.jpg";
import Planos from "assets/img/sections/planos.jpg";


// const CardLayout = ({ classes, href, title, title2, desc }) => {

//   return (
//     <GridItem xs={12} md={6} lg={4}>
//       <Card blog>
//         <CardHeader image>
//           <Link to={href}>
//             <img src={Instalaciones} alt="..." />
//             <div className={classes.cardTitleAbsolute}>
//               {title}
//             </div>
//           </Link>
//           <div
//             className={classes.coloredShadow}
//             style={{
//               backgroundImage: `url(${Instalaciones})`,
//               opacity: "1"
//             }}
//           />
//         </CardHeader>
//         <CardBody>
//           <Info>
//             <h6 className={classes.cardCategory}>{title2}</h6>
//           </Info>
//           <div className={classes.cardDescription}>
//             {desc}
//           </div>
//         </CardBody>
//       </Card>
//     </GridItem>
// )};

const CardLayout = ({ classes, href, title, desc, img = Instalaciones }) => {
  return (
    <GridItem xs={12} md={6} lg={6}>
      <Card
        background
        style={{ backgroundImage: `url(${img})` }}
      >
      <Link to={href}>
        <CardBody background>
          <h3 className={classes.cardTitleWhite}>
            {title}
          </h3>
          <p className={classes.cardDescriptionWhite}>
            {desc}
          </p>
          <Button round color="danger">
            <Subject /> Ver más
          </Button>
        </CardBody>
      </Link>
      </Card>
    </GridItem>
)};

const LandingServices = ({ classes }) => {

  return (
    <div className={classes.wrapper}>
      <GridContainer>
        <CardLayout 
          classes={classes}
          img={Instalaciones}
          href="/instalaciones"
          title="Instalaciones eléctricas"
          desc="Suburled le ofrece su experiencia en el proyecto e implementación de instalaciones eléctricas. Dimensionar adecuadamente una instalación le evitará problemas a la hora de comenzar a producir en su negocio."
        />

        <CardLayout 
          classes={classes}
          img={Construccion}
          href="/construccion"
          title="Construcción"
          desc="Suburled lleva a cabo sus proyectos de construcción para viviendas, locales y oficinas, nuevos o a reformar."
        />

        <CardLayout 
          classes={classes}
          img={Fontaneria}
          href="/fontaneria"
          title="Fontaneria"
          desc={"Suburled le ofrece su amplia experiencia en servicios de fontanería, tanto en instalaciones domésticas como en instalaciones industriales."}
        />

        <CardLayout 
          classes={classes}
          img={Incendio}
          href="/instalaciones-contra-incendios"
          title="Instalaciones contra incendios"
          desc="Proteja su negocio. Suburled ofrece un abanico de servicios en materia de instalaciones de seguridad."
        />

        <CardLayout 
          classes={classes}
          img={Mantenimiento}
          href="/mantenimiento"
          title="Mantenimiento"
          desc="Suburled ofrece servicios de mantenimiento de instalaciones industriales domésticas y de hostelería, facilitando la operatividad contínua de su negocio, realizando reparaciones y trabajos de prevención."
        />

        <CardLayout 
          classes={classes}
          img={Planos}
          href="/arquitectura"
          title="Arquitectura"
          desc="Los servicios de arquitectura e ingeniería ofrecidos por Suburled abarcan todo el espectro que los clientes necesitan para planificar, diseñar y legalizar sus obras e instalaciones."
        />
      </GridContainer>
    </div>
)}

export default LandingServices
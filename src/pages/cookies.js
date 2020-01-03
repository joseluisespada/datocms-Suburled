import React from 'react'
// import { Link, graphql } from 'gatsby'
import classNames from "classnames";
import Layout from "layout/layout"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import mainPageStyle from "assets/jss/styles/pages/mainPageStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(mainPageStyle);


const Cookies = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Parallax /*image={require("assets/img/bg8.jpg")}*/ filter="info" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Política de Cookies</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

          <h2 id="acerca-de-las-cookies">POLÍTICA DE COOKIES</h2>

          <p>SuburLED S.L. ,operando la web www.suburled.com, informa a sus usuarios de que emplea COOKIES para hacer funcionar correctamente el sitio web, hacer efectivas herramientas de análisis estadístico y control del número de acceso de los usuarios, así como COOKIES diseñadas para recabar y almacenar datos mientras el usuario accede a esta página web.</p>

          <h2 id="acerca-de-las-cookies">ACERCA DE LAS COOKIES</h2>

          <p>Cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.. El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión actual ocupando un espacio de memoria mínimo y no perjudicando al ordenador. Las cookies no contienen ninguna clase de información personal específica, y la mayoría de las mismas se borran del disco duro al finalizar la sesión de navegador (las denominadas cookies de sesión).</p>

          <p>La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas.</p>

          <p>Sin su expreso consentimiento –mediante la activación de las cookies en su navegador- www.suburled.com no enlazará en las cookies los datos memorizados con sus datos personales proporcionados en el momento del registro o acceso a los servicios.</p>

          <h2 id="qu-tipo-de-cookies-emplea-este-sitio">QUÉ TIPO DE COOKIES EMPLEA ESTE SITIO</h2>

          <ul>
            <li>
              <p>COOKIES DE ANÁLISIS: Son aquéllas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma y para la elaboración de perfiles de navegación de los usuarios de dichos sitios, aplicaciones y plataformas, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</p>
            </li>
            <li>
              <p>COOKIES DE TERCEROS: La Web www.suburled.com puede utilizar servicios de terceros que recopilarán información con fines estadísticos, de uso del sitio web por parte del usuario y para la prestacion de otros servicios relacionados con la actividad del propio sitio web y otros servicios de Internet.</p>

              <ul>
                <li>
                  <p>Google Analytics: este sitio utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc. con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043. Para la prestación de estos servicios, estos utilizan cookies que recopilan la información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la Web Google.com. Incluyendo la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google. Puede extenderse la información del uso de cookies por parte de este proveedor en el siguiente enlace: http://www.google.es/intl/es/policies/technologies/cookies/</p>
                </li>
                <li>
                  <p>Google Maps: este sitio emplea Google Maps, utilizado para prestar información visual a los usuarios. Este servicio es prestado por Google, Inc. con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043. Puede extenderse la información del uso de cookies por parte de este proveedor en el siguiente enlace: http://www.google.es/intl/es/policies/technologies/cookies/</p>
                </li>
                <li>
                  <p>Youtube: este sitio emplea el reproductor empotrable de Youtube para mostrar vídeos directamente relacionados con la información que provee el sitio web. Youtube es un servicio prestado por Google, con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043.
            Puede extenderse la información del uso de cookies por parte de este proveedor en el siguiente enlace: http://www.google.es/intl/es/policies/technologies/cookies/</p>
                </li>
              </ul>
            </li>
          </ul>

          <h2 id="aceptacin-de-la-poltica-de-cookies">ACEPTACIÓN DE LA POLÍTICA DE COOKIES</h2>

          <p>El USUARIO queda plenamente informado del uso de las COOKIES y acepta y reconoce el uso de las mismas y su finalidad y al navegar por la presente web acepta y reconoce el uso de las referidas COOKIES.</p>

          <p>El USUARIO puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador:</p>

          <ul>
            <li>
              <p>Google Chrome: consulte https://support.google.com/chrome/answer/95647?hl=es</p>
            </li>
            <li>
              <p>Microsoft Internet Explorer: consulte http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9</p>
            </li>
            <li>
              <p>Mozilla Firefox: consulte http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-web</p>
            </li>
            <li>
              <p>Safari: consulte http://support.apple.com/kb/ph5042</p>
            </li>
          </ul>

          <p>El USUARIO dispone de alternativas a este método para controlar las cookies:</p>

          <ul>
            <li>
              <p>Herramientas de terceros, disponibles on line, que permiten a los usuarios detectar las cookies en cada sitio web que visita y gestionar su desactivación.</p>
            </li>
            <li>
              <p>Emplear el modo de navegación privado disponible en varios navegadores.</p>
            </li>
            <li>
              <p>Solicitar no ser rastreado en la configuración de los navegadores que aporten esta funcionalidad, como por ejemplo Mozilla Firefox.</p>
            </li>
          </ul>

        </div>
      </div>   
    </Layout>
)}

export default Cookies;


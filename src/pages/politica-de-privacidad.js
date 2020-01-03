
import React from 'react'
import classNames from "classnames";
import Layout from "layout/layout"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import mainPageStyle from "assets/jss/styles/pages/mainPageStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(mainPageStyle);


const Privacy = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Parallax /*image={require("assets/img/bg8.jpg")}*/ filter="info" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>Política de Privacidad</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

          <h2 id="poltica-de-privacidad">Política de privacidad</h2>

          <p>SUBURLED SL informa a los usuarios del sitio web (suburled.com) sobre su política respecto del tratamiento y protección de los datos de carácter personal de los usuarios y clientes que puedan ser recabados por la navegación o contratación de servicios a través de su sitio web.</p>

          <p>En este sentido, SUBURLED SL no recopila ni almacena datos de los usuarios del sitio web, no proporciona sesiones privadas de usuarios, ni admite el registro de usuarios en el sistema.</p>

          <p>El uso de esta web implica la aceptación de esta política de privacidad.</p>

          <h2 id="recogida-finalidad-y-tratamientos-de-datos">Recogida, finalidad y tratamientos de datos</h2>

          <p>SUBURLED SL tiene el deber de informar a los usuarios de su sitio web acerca de la recogida de datos de carácter personal que pueden llevarse a cabo, bien sea mediante el envío de correo electrónico o al cumplimentar los formularios incluidos en el sitio web. En este sentido, SUBURLED SL será considerada como responsable de los datos recabados mediante los medios anteriormente descritos.</p>

          <p>A su vez SUBURLED SL informa a los usuarios de que la finalidad del tratamiento de los datos recabados contempla: La atención de solicitudes realizadas por los usuarios, la inclusión en la agenda de contactos, la prestación de servicios, y la gestión de la relación comercial.</p>

          <p>Las operaciones, gestiones y procedimientos técnicos que se realicen de forma automatizada o no automatizada y que posibiliten la recogida, el almacenamiento, la modificación, la transferencia y otras acciones sobre datos de carácter personal, tienen la consideración de tratamiento de datos personales.</p>

          <p>Todos los datos personales, que sean recogidos a través del sitio web suburled.com, de SUBURLED SL, y por tanto tenga la consideración de tratamiento de datos de carácter personal, serán incorporados en los ficheros declarados ante la Agencia Española de Protección de Datos por SUBURLED SL.</p>

          <h2 id="comunicacin-de-informacin-a-terceros">Comunicación de información a terceros</h2>

          <p>SUBURLED SL informa a los usuarios de que sus datos personales no serán cedidos a terceras organizaciones, con la salvedad de que dicha cesión de datos este amparada en una obligación legal o cuando la prestación de un servicio implique la necesidad de una relación contractual con un encargado de tratamiento. En este último caso, solo se llevará a cabo la cesión de datos al tercero cuando SUBURLED SL disponga del consentimiento expreso del usuario.</p>

          <h2 id="derechos-de-los-usuarios">Derechos de los usuarios</h2>

          <p>La Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal concede a los interesados la posibilidad de ejercer una serie de derechos relacionados con el tratamiento de sus datos personales.</p>

          <p>En tanto en cuanto los datos del usuario son objeto de tratamiento por parte de SUBURLED SL. Los usuarios podrán ejercer los derechos de acceso, rectificación, cancelación y oposición de acuerdo con lo previsto en la normativa legal vigente en materia de protección de datos personales.</p>

          <p>Para hacer uso del ejercicio de estos derechos, el usuario deberá dirigirse mediante comunicación escrita, aportando documentación que acredite su identidad (DNI o pasaporte), a la siguiente dirección:
          SUBURLED SL, Calle: Avda. de las Flores Nº 22, local, Código postal: 08870, Sitges.</p>

          <p>Dicha comunicación deberá reflejar la siguiente información: Nombre y apellidos del usuario, la petición de solicitud, el domicilio y los datos acreditativos.</p>

          <p>El ejercicio de derechos deberá ser realizado por el propio usuario. No obstante, podrán ser ejecutados por una persona autorizada como representante legal del autorizado. En tal caso, se deberá aportar la documentación que acredite esta representación del interesado.</p>

        </div>
      </div>   
    </Layout>
)}

export default Privacy;


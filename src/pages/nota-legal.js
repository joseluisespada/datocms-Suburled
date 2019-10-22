import React from 'react'
import classNames from "classnames";
import Layout from "layout/layout"
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import mainPageStyle from "public/jss/nextjs-material-kit-pro/pages/mainPageStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(mainPageStyle);


const LegalNote = ({ data }) => {
  const classes = useStyles();
  return (
    <Layout>
      <Parallax /*image={require("public/img/bg8.jpg")}*/ filter="info" small>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h1 className={classes.title}>AVISO LEGAL</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>

<p>1.- INFORMACIÓN GENERAL</p>

<p>SUBURLED, S.L. presta este sitio web (www.suburled.com) con carácter informativo y comercial.
El acceso a la página web es gratuito.
Los servicios de la presente web para los usuarios están sometidos a condiciones particulares que, en su caso, completan la información ofrecida en este Aviso Legal y son aceptadas por el Usuario antes de iniciarse la prestación del servicio correspondiente.</p>

<ol>
  <li>PROPIEDAD INTELECTUAL E INDUSTRIAL</li>
</ol>

<p>Todos los contenidos que conforman esta web son Propiedad Intelectual de SUBURLED, S.L. y quedan totalmente prohibida la reproducción total o parcial, sin el consentimiento de su autor o titular, de su contenido. En especial se consideran de Propiedad Intelectual de la empresa las FOTOGRAFÍAS, las IMÁGENES y los TEXTOS que componen esta web.</p>

<ol>
  <li>CONDICIONES DE USO DE LA WEB</li>
</ol>

<p>3.1 General
El Usuario se obliga a hacer un uso correcto de esta web de conformidad con la Ley y el presente Aviso Legal. El Usuario responderá frente a suBURlED, S.L. o frente a terceros, de cualesquiera daños y perjuicios que pudieran causarse como consecuencia del incumplimiento de dicha obligación.
Queda expresamente prohibido el uso de esta web con fines oscuros, maliciosos o malintencionados en contra de SUBURLED, S.L. o de terceros usuarios o que de cualquiera otras personas que dañen o inutilicen las redes, servidores y demás equipos informáticos y aplicaciones informáticas propiedad de SUBURLED, S.L. o de terceros.</p>

<p>3.2 Contenidos de la web
Los usuarios del presente portal se comprometen a no distribuir reproducir, comunicar públicamente, transformar o modificar el contenido de la presente web sin la correspondiente autorización de SUBURLED, S.L. y, por tanto, a respetar el contenido de la presente página web tal y como la muestra su titular.</p>

<p>3.3 Formularios de recogida de datos
Sin perjuicio de lo expuesto en el apartado correspondiente a políticas de privacidad y los distintas informaciones concretas relativas al tratamiento de los datos personales de los clientes – usuarios de esta web, la contratación de algunos de los servicios o planes especiales ofrecidos por SUBURLED, S.L. están condicionados a la previa cumplimentación del correspondiente registro del cliente – usuario.
La información que ofrezca el cliente – usuario a través de los formularios de la presente web deberá ser cierta y real de tal forma que es el propio cliente – usuario quién garantiza la autenticidad de todos aquellos datos que comunique a SUBURLED, S.L. debiendo actualizar dichos datos si en algún momento cambiaran o sufrieran alguna modificación, siendo de su responsabilidad el hecho de que los datos que faciliten sean inciertos, irreales o no auténticos.</p>

<p>3.4 Introducción de enlaces a la web
Queda prohibido en aplicación de la legislación vigente establecer frames o marcos de cualquier tipo que envuelvan a la web o que redireccionen esta web a otras direcciones que no sean www.suburled.com y, en cualquier caso, cuando se visualicen conjuntamente con contenidos ajenos a la misma produciendo en sus usuarios – clientes o meros usuarios error, confusión o engaño sobre el verdadera origen de esta web
Queda prohibido todo acto imitación desleal que permita un aprovechamiento de la situación de mercado de SUBURLED, S.L., llevando a confusión a sus clientes – usuarios o sus meros usuarios, así como, queda totalmente prohibido realizar desde la web página que enlaza ningún tipo de manifestación falsa, inexacta o incorrecta sobre SUBURLED, S.L. o sus clientes – usuarios o sobre la calidad de los servicios que presta.</p>

<p>4.- EXCLUSIÓN DE RESPONSABILIDAD</p>

<p>4.1 De la Información
El acceso a esta web supone la obligación por parte de SUBURLED, S.L. de comprobar la veracidad, exactitud, idoneidad, exhaustividad y actualización de la información de la misma, toda vez que el contenido de la misma constituye la oferta comercial de los servicios para los que ha sido constituida.</p>

<p>4.2 De la calidad del servicio
El acceso a esta web no supone la obligación de SUBURLED, S.L. de asegurar la inexistencia de algún tipo de virus informático o cualquier otro MALWARE, debiendo ser el propio cliente – usuario o mero usuario quién disponga de las herramientas que permitan su detención.
SUBURLED, S.L. no se responsabiliza por tanto de los daños que pudiera provocar en los sistemas informáticos de los clientes – usuarios o meros usuarios de la web.</p>

<p>4.3 De la disponibilidad del Servicio
El acceso a esta web necesita del servicio y suministro de terceros cuya disponibilidad permanente no depende SUBURLED, S.L., por tanto, esta web puede quedar suspendida, descolgada o no disponible por el fallo en el servicio de esos terceros sin que pueda ser responsable de nada por ello.</p>

<p>5.- LEGISLACIÓN</p>

<p>A los efectos de la legislación vigente en materia de comercio electrónico, SUBURLED, S.L. tiene la consideración de prestador de servicios de la sociedad de la información establecida en España.
Se entenderá que un prestador de servicios está establecido en España cuando su residencia o domicilio social se encuentren en territorio español, siempre que éstos coincidan con el lugar en que esté efectivamente centralizada la gestión administrativa y la dirección de sus negocios.
Cómo así ocurre en el presente caso, SUBURLED, S.L. está sujeta a las demás disposiciones del ordenamiento jurídico español que les sean de aplicación, con independencia de la utilización de medios electrónicos para su realización.</p>

        </div>
      </div>   
    </Layout>
)}

export default LegalNote;


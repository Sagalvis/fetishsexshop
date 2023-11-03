import Footer from "../Footer";
import Header from "../Header";
import {
  ContentMain,
  ContentShop,
  ContentText,
  Hh2,
  Img,
  Text,
} from "./styles/styledPoliticas";
import image1 from "../../assets/politicas/7-dias.png";
// import image2 from '../../assets/nosotros/sex-shop2.png'     //en espera.

const Politicas = () => {
  return (
    <>
      <Header />

      <ContentMain>
        <ContentShop>
          <Img src={image1} alt="image" />
        </ContentShop>

        <ContentText>
          <Hh2>Politicas de devolución</Hh2>
          <Text>
            Realizamos la entrega de nuestros productos con el adecuado embalaje
            para protegerlo durante la cadena de distribución. <br />Es por esto que
            ofrecemos el servicio de devolución de productos. Motivos de
            devolución. <br />
            - Que el producto alcance su fecha de vencimiento. <br />
            - Que el embalaje sea visiblemente vulnerado. <br />
            - Que el producto no sea el mismo que usted haya ordenado, una vez pasados 7 días después de la entrega no se aceptan devoluciones. <br /> <br />
            Para el servicio de devoluciones
            debe comunicarse con nuestros asesores a través de WhatsApp o a
            través de nuestro correo electrónico ###########, se analizará el
            caso y se darán instrucciones.
          </Text>
        </ContentText>
      </ContentMain>

      <Footer />
    </>
  );
};

export default Politicas;

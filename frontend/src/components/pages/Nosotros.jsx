import Footer from "../Footer";
import Header from "../Header";
import { ContentMain, ContentShop, ContentText, Hh2, Img, Span, Text } from "./styles/styledNosotros";
import image1 from '../../assets/nosotros/sex-shop.png'
// import image2 from '../../assets/nosotros/sex-shop2.png'     //en espera.

const Nosotros = () => {
  return (
    <>
    <Header/>

    <ContentMain>

    <ContentShop>
      <Img src={image1} alt="image"/>
    </ContentShop>

    <ContentText>
      <Hh2>Acerca de nosotros</Hh2>
      <Text>Somos una empresa legalmente constituida, ubicada en <Span>Barrancabermeja, Santander</Span>. Tenemos experiencia en el manejo y venta de productos y accesorios para la necesidad de cada cliente.<br></br> Damos a conocer a detalle cada producto que vendemos para que el cliente se sienta seguro de lo que está adquiriendo con nosotros.</Text>
    </ContentText>

    </ContentMain>

    <Footer/>
    </>
  );
};

export default Nosotros;
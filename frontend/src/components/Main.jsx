import { ButtonWp, Cards, Content, ContentMain, ContentProductCards, H2, ImgProduct, Info, InfoPriceProduct, InfoTitle, TagA } from "./styles/styledMain";
import pdt1 from '../assets/imgproducts/imageprueba.jpg'

const Main = ({price, infoPrice}) => {
  return (
    <>
    <ContentMain>
      <InfoTitle>
        <H2>Información de productos promocionales</H2>
      </InfoTitle>

      <ContentProductCards>
        <Cards>
          <Content>
            <ImgProduct src={pdt1} alt="product"/>
          </Content>
          <InfoPriceProduct>
            <Info>{price}</Info>
            <Info>{infoPrice}</Info>

            <TagA href="https://w.app/prueba" target=".
            .
            _blank"><ButtonWp>
            <i className="fa-brands fa-whatsapp"></i>
            Comprar en Whatsapp</ButtonWp></TagA>
          </InfoPriceProduct>
        </Cards>

      </ContentProductCards>
    </ContentMain>
    </>
  );
}

export default Main;
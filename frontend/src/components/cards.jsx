import { ButtonWp, Card, Content, ImgProduct, Info, InfoPriceProduct, TagA } from "./styles/styledCards";
import pdt1 from '../assets/imgproducts/imageprueba.jpg'

const Cards = ({infoPrice, info}) => {
  return (
    <>
        <Card>
          <Content>
            <ImgProduct src={pdt1} alt="product"/>
          </Content>
          <InfoPriceProduct>
            <Info>{infoPrice}</Info>
            <Info>{info}</Info>

            <TagA href="https://w.app/prueba" target="_blank"><ButtonWp>
            <i className="fa-brands fa-whatsapp"></i>
            Comprar en Whatsapp</ButtonWp></TagA>
          </InfoPriceProduct>
        </Card>
    </>
  );
}

export default Cards;
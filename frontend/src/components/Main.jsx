import { ButtonWp, Cards, Content, ContentMain, ContentProductCards, H2, ImgProduct, Info, InfoPriceProduct, InfoTitle, TagA } from "./styles/styledMain";
import pdt1 from '../assets/imgproducts/imageprueba.jpg'

const Main = () => {
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
            <Info>1 Unidad por solo 100.000 pesos</Info>
            <Info>+ 10.000 pesos de envio por todo el país</Info>

            <TagA href="https://w.app/prueba" target="_blank"><ButtonWp>
            <i className="fa-brands fa-whatsapp"></i>
            Comprar en Whatsapp</ButtonWp></TagA>
          </InfoPriceProduct>
        </Cards>

        <Cards>
          <Content>
            <ImgProduct src={pdt1} alt="product"/>
          </Content>
          <InfoPriceProduct>
            <Info>1 Unidad por solo 100.000 pesos</Info>
            <Info>+ 10.000 pesos de envio por todo el país</Info>

            <TagA href="https://w.app/prueba" target="_blank"><ButtonWp>
            <i className="fa-brands fa-whatsapp"></i>
            Comprar en Whatsapp</ButtonWp></TagA>
          </InfoPriceProduct>
        </Cards>

        <Cards>
          <Content>
            <ImgProduct src={pdt1} alt="product"/>
          </Content>
          <InfoPriceProduct>
            <Info>1 Unidad por solo 100.000 pesos</Info>
            <Info>+ 10.000 pesos de envio por todo el país</Info>

            <TagA href="https://w.app/prueba" target="_blank"><ButtonWp>
            <i className="fa-brands fa-whatsapp"></i>
            Comprar en Whatsapp</ButtonWp></TagA>
          </InfoPriceProduct>
        </Cards>

        <Cards>
          <Content>
            <ImgProduct src={pdt1} alt="product"/>
          </Content>
          <InfoPriceProduct>
            <Info>1 Unidad por solo 100.000 pesos</Info>
            <Info>+ 10.000 pesos de envio por todo el país</Info>

            <TagA href="https://w.app/prueba" target="_blank"><ButtonWp>
            <i className="fa-brands fa-whatsapp"></i>
            Comprar en Whatsapp</ButtonWp></TagA>
          </InfoPriceProduct>
        </Cards>

        <Cards>
          <Content>
            <ImgProduct src={pdt1} alt="product"/>
          </Content>
          <InfoPriceProduct>
            <Info>1 Unidad por solo 100.000 pesos</Info>
            <Info>+ 10.000 pesos de envio por todo el país</Info>

            <TagA href="https://w.app/prueba" target="_blank"><ButtonWp>
            <i className="fa-brands fa-whatsapp"></i>
            Comprar en Whatsapp</ButtonWp></TagA>
          </InfoPriceProduct>
        </Cards>

        <Cards>
          <Content>
            <ImgProduct src={pdt1} alt="product"/>
          </Content>
          <InfoPriceProduct>
            <Info>1 Unidad por solo 100.000 pesos</Info>
            <Info>+ 10.000 pesos de envio por todo el país</Info>

            <TagA href="https://w.app/prueba" target="_blank"><ButtonWp>
            <i className="fa-brands fa-whatsapp"></i>
            Comprar en Whatsapp</ButtonWp></TagA>
          </InfoPriceProduct>
        </Cards>

        <Cards>
          <Content>
            <ImgProduct src={pdt1} alt="product"/>
          </Content>
          <InfoPriceProduct>
            <Info>1 Unidad por solo 100.000 pesos</Info>
            <Info>+ 10.000 pesos de envio por todo el país</Info>

            <TagA href="https://w.app/prueba" target="_blank"><ButtonWp>
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
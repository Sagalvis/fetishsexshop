import {
  ButtonWp,
  Card,
  Content,
  ImgProduct,
  Info,
  InfoPriceProduct,
  TagA,
} from "./styles/styledCards";
import { useEffect, useState } from "react";
import axios from "axios";

const Cards = ({ infoPrice, info }) => {
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    try {
      const result = await axios.get("http://localhost:3005/getProduct");
      setProduct(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, [setProduct]);
  return (
    <>
      <Card>
        <Content>
          <ImgProduct src={pdt1} alt="product" />
        </Content>
        <InfoPriceProduct>
          <Info>{infoPrice}</Info>
          <Info>{info}</Info>

          <TagA href="https://w.app/prueba" target="_blank">
            <ButtonWp>
              <i className="fa-brands fa-whatsapp"></i>
              Comprar en Whatsapp
            </ButtonWp>
          </TagA>
        </InfoPriceProduct>
      </Card>
    </>
  );
};

export default Cards;

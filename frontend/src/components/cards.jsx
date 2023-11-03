/* eslint-disable react/prop-types */
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

const Cards = () => {
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
      {product.map((item, index) => (
        <Card key={index}>
          <Content>
            <ImgProduct src={`http://localhost:3005/uploads/${item.ruta_img}`} alt="img"/>
          </Content>
          <InfoPriceProduct>
            <Info className="title">{item.nomb_producto}</Info>
            <Info className="descrip">{item.descripcion}</Info>
            <TagA href="https://api.whatsapp.com/send?phone=+573146763972&text=Hola,%20me%20interesaria%20 comprar%20el%20Un%20camisa%20Por%20Valor%20de este mercado" target="_blank">
              <ButtonWp>
                <i className="fa-brands fa-whatsapp"></i>
                Comprar en Whatsapp
              </ButtonWp>
            </TagA>
          </InfoPriceProduct>
        </Card>
      ))}
    </>
  );
};

export default Cards;

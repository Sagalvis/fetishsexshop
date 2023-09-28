import styled from "styled-components";

export const ContentMain = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 24px;
  /* background-color: blue; */
`;

export const InfoTitle = styled.div`
  /* background-color: #fff; */
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: #f5f5f5 solid 1px;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 15px;
`;

export const ContentProductCards = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 15px;
  /* background-color: green; */
  width: 100%;
  height: auto;
`;

export const Cards = styled.div`
  background-color: #fff;
  width: 320px;
  height: 450px;
  box-shadow: 5px 6px 33px -16px rgba(0, 0, 0, 0.225);
  border-radius: 5px;
  cursor: pointer;

  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Content = styled.div`
  background-color: #fff;
  width: 100%;
  height: 70%;
`;

export const ImgProduct = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

export const InfoPriceProduct = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 30%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Info = styled.p`
  
`;

export const TagA = styled.a`
  text-decoration: none;
`;

export const ButtonWp = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 15px;
  padding: 10px;
  border: none;
  background: #1edc1e;
  border-radius: 3px;
  cursor: pointer;
  font-family: 'Nunito';
  color: #fff;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;

  &:hover {
    background-color: #1bc71b;
  }

  .fa-whatsapp {
    font-size: 18px;
  }
`;
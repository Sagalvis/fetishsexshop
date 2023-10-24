import styled from 'styled-components';

export const Card = styled.div`
  background-color: #ab1d26b5;
  width: 320px;
  height: 60vh;
  box-shadow: 5px 6px 33px -16px rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  cursor: pointer;
  color: white;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

export const Content = styled.div`
  background-color: #eee;
  width: 100%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px 5px 0 0;
`;

export const ImgProduct = styled.img`
  width: 90%;
  height: 100%;
  
`;

export const InfoPriceProduct = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 40%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const Info = styled.p`
  &.title{
    margin: 0;
    font-size: 30px;
    font-weight: 800;
    text-align: start;
  }
  &.descrip{
    margin: 0;
    text-align: center;
  }
`;

export const TagA = styled.a`
  text-decoration: none;
      display: flex;
    align-items: center;
    justify-content: center;
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
import styled from 'styled-components';

export const ContentMain = styled.div`
  /* background-color: green; */
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;

export const ContentShop = styled.div`
  /* background-color: red; */
  width: 50%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const Img = styled.img`
  width: 270px;
  
`;

export const ContentText = styled.div`
  /* background-color: green; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 25px;
  width: 100%;
`;

export const Hh2 = styled.h2`
`;

export const Text = styled.p`
  text-align: justify;
  
`;
import styled from 'styled-components';

export const ContainerFooter = styled.div`
  display: block;
  background-color: #222;
  box-sizing: border-box;
  padding: 25px;
  width: 100%;
  height: auto;
`;

export const FooterInfo = styled.div`
  /* background-color: #fff; */
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentImg = styled.div`
  /* background-color: #fff; */
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  width: auto;
`;

export const ImgLogo = styled.img`
  /* pendiente */
`;

export const ContentAbout = styled.div`
  /* background-color: #fff; */
  width: 35%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const H2 = styled.h2`
  color: #fff;

  &.title {
    margin-bottom: 10px;
  }
`;

export const P = styled.p`
  color: #fff;
  &.justify {
    text-align: justify;
  }
`;

export const ContentRedSocial = styled.div`
  /* background-color: #fff; */
`;

export const A = styled.a`
  margin-right: 10px;
  /* background: #fff; */

  .fa-whatsapp {
    font-size: 25px;
    padding: 5px;
    transition: .3s all ease;
    color: #fff;

    &:hover {
      background-color: #3333336c;
    }
  }
  .fa-instagram {
    font-size: 25px;
    padding: 5px;
    color: #fff;

    &:hover {
      background-color: #3333336c;
    }
  }
  .fa-facebook {
    font-size: 25px;
    padding: 5px;
    color: #fff;

    &:hover {
      background-color: #3333336c;
    }
  }
`;

export const ContentCopyright = styled.div`
  background-color: #333;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
`;

export const Copyright = styled.div`
`;
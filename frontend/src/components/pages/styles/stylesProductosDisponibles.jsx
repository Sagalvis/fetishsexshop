import styled from 'styled-components';

export const Aquih1 = styled.h1`
  font-size: 2.7rem;
  letter-spacing: 1px;
`;

export const Segundocontenedor = styled.div`
  margin: 4rem 2rem;
  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }

  @media (max-height: 652px) {
    margin: 0;
  }
`;

export const Contenedortext = styled.div`
  width: 40%;
  /* text-align: start; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Aquih2 = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: 1px;
  padding-bottom: 1rem;

  &.info {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Aqui2p = styled.p`
  text-align: justify;

  @media (max-height: 652px) {
    font-size: 14px;
  }
`;

export const Ul = styled.ul`
  margin-left: 30px;
`;

export const Li = styled.li`
  
`;

export const Span = styled.span`
  font-weight: 700;
`;

export const A = styled.a`

`;

export const AquiPAbout = styled.p`
  width: 70%;
  padding: 0 5rem;
  font-size: 1.3rem;
  font-weight: 300;
`;

export const ContentImg = styled.div`
  /* background: green; */
  width: 30%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  @media (max-height: 652px) {
    height: 300px;
  }
`;
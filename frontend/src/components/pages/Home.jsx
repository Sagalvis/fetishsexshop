import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import styled from "styled-components";
import img1 from "../../assets/pruebaslider/banner1.png"

const Home = () => {
  return (
    <>
      {/* Componente HEADER  */}
      <Header />

      <BackgroundHome>
        <ImgHome src={img1} alt="imagen"/>
      </BackgroundHome>

      {/* Compoenente MAIN  */}
      <Main 
      showCards={true}
      />

      {/* Componente FOOTER  */}
      <Footer />
    </>
  );
};

export default Home;

const BackgroundHome = styled.div`
  width: 100%;
  height: 75vh;
  background-color: black;

  @media (max-width: 768px) {
    height: auto;
  }
`
const ImgHome = styled.img`
  width: 100%;
  height: 75vh;

  @media (max-width: 768px) {
    height: auto;
  }
`

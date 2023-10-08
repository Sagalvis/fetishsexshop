import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Slider from "../slider";

const Home = () => {
  return (
    <>
      {/* Componente HEADER  */}
      <Header />

      {/* Componente SLIDER */}
      <Slider />

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

import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer"
import Slider from "../slider";

const Home = () => {
  return (
    <>
        {/* Componente HEADER  */}
        <Header/>

        {/* Componente SLIDER */}
        <Slider />
        
        {/* Compoenente MAIN  */}
        <Main
        price={'1 Unidad por solo 100.000 pesos'}
        infoPrice={'+ 10.000 pesos de envio por todo el país'}
        />

        {/* Componente FOOTER  */}
        <Footer/>
    </>
  );
}

export default Home;
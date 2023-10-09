import Header from './Header'
import Footer from './Footer'
import MainProducts from './pages/main';

const Products = () => {
  return (
    <>
    {/* Componente HEADER  */}
    <Header />

    {/* Componente ?  */}
    <MainProducts 
    showProduct={true}
    />

    {/* Componente FOOTER  */}
    <Footer />
    </>
  );
}

export default Products;
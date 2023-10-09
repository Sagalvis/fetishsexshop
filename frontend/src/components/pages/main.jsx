/* eslint-disable react/prop-types */
import ProductosDisponibles from "./Products/productosDisponibles";
import { ContentMainProducts } from "./Products/styledMainProducts";

const MainProducts = ({showProduct}) => {
  return (
    <>
    <ContentMainProducts>
      {showProduct && (
        <ProductosDisponibles/>
      )}
    </ContentMainProducts>
    </>
  );
}

export default MainProducts;
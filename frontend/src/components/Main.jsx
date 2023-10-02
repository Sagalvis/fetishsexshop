/* eslint-disable react/prop-types */
import { ContentMain, ContentProductCards, H2, InfoTitle } from "./styles/styledMain";
import Cards from "./cards";

const Main = ({showCards}) => {
  return (
    <>
    <ContentMain>

      <InfoTitle>
        <H2>Información de productos promocionales</H2>
      </InfoTitle>

      {/* Operador logico para mostrar las cards */}
      {showCards && (
        <ContentProductCards>
          <Cards/>
        </ContentProductCards>
      )}
    </ContentMain>
    </>
  );
}

export default Main;
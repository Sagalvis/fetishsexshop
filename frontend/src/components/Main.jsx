/* eslint-disable react/prop-types */
import { ContentMain, ContentProductCards, H2t, InfoTitle } from "./styles/styledMain";
import Cards from "./cards";

const Main = ({showCards}) => {
  return (
    <>
    <ContentMain>

      <InfoTitle>
        <H2t>Información de productos promocionales</H2t>
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
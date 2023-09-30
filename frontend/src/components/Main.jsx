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
          <Cards 
          infoPrice={'1 Unidad por solo 100.000 pesos'}
          info={'+ 10.000 pesos de envio por todo el país'}
          />
          <Cards 
          infoPrice={'1 Unidad por solo 100.000 pesos'}
          info={'+ 10.000 pesos de envio por todo el país'}
          />
          <Cards 
          infoPrice={'1 Unidad por solo 100.000 pesos'}
          info={'+ 10.000 pesos de envio por todo el país'}
          />
        </ContentProductCards>
      )}
    </ContentMain>
    </>
  );
}

export default Main;
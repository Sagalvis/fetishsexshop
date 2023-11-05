import {
  Aa,
  Aqui2p,
  Aquih2,
  Contenedortext,
  ContentImg,
  Img,
  Li,
  Segundocontenedor,
  Span,
  Ul,
} from "../styles/stylesProductosDisponibles";
import imgprueba from "../../../assets/imgproducts/sss.png";
import { ButtonWp } from "../../styles/styledCards";

const ProductosDisponibles = () => {
  return (
    <>
      <Segundocontenedor>
        <Contenedortext>
          <Aquih2>Erogan</Aquih2>
          <Aqui2p>
            Erogan es un suplemento dietario en píldoras utilizado como
            potencializador sexual el cual ayuda con el aumento en los niveles
            de testosterona para mejorar el equilibrio hormonal en el hombre.{" "}
            <br /> <br />
            Erogan le va a permitir erecciones prolongadas durante la relación
            sexual y aumentara la sensación y el placer en usted y su pareja.{" "}
            <br /> <br />
            <Aqui2p>Erogan ayudara a prevenir problemas como:</Aqui2p>
            <Ul>
              <Li>Débil deseo sexual o ausencia</Li>
              <Li>Falta de emoción durante el acto sexual</Li>
              <Li>Eyaculación precoz</Li>
              <Li>
                Fracaso en la erección del pene durante el acto sexual{" "}
                <Span>(disfunción eréctil)</Span>
              </Li>
            </Ul>
          </Aqui2p>

          <ButtonWp>WhatsApp</ButtonWp>
        </Contenedortext>

        <ContentImg>
          <Img src={imgprueba} alt="" />

          <Aquih2 className="info">Información de envio</Aquih2>
          <Aqui2p>
            Se aceptan pagos contra entrega en ciudades principales y
            municipios, pregúntanos si aplica para tu región. Los pedidos se
            envían el mismo día de la compra y tardan entre 2 y 3 días en llegar
            a su domicilio. <br /> <br />
            Te brindamos asesoría a través de WhatsApp y llamadas por teléfono
            movil,{" "}
            <Span>
              <Aa href="" target="_blank">Click aquí</Aa>
            </Span>
          </Aqui2p>
        </ContentImg>
      </Segundocontenedor>
    </>
  );
};

export default ProductosDisponibles;

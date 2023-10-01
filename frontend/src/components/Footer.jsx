import { A, ContainerFooter, ContentAbout, ContentCopyright, ContentImg, ContentRedSocial, Copyright, FooterInfo, H2, ImgLogo, P } from "./styles/styledFooter";

const Footer = () => {
  return (
    <>
    <ContainerFooter>
      <FooterInfo>

        <ContentImg>
          <H2>dev.beecodes</H2>
          {/* <ImgLogo src="" alt=""/> */}
        </ContentImg>

        <ContentAbout>
          <H2 className="title">Sobre nosotros</H2>
          <P className="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex quam fugiat voluptatum reprehenderit! Nam dolorum fuga quisquam incidunt eum, tempore quae, obcaecati ratione quam aliquam accusantium corporis quas debitis!</P>

        </ContentAbout>

        <ContentRedSocial>
          <H2 className="title">Redes sociales</H2>
          <A href="http://" target="_blank"><i className="fa-brands fa-whatsapp"></i></A>
          <A href="http://" target="_blank"><i className="fa-brands fa-instagram"></i></A>
          <A href="http://" target="_blank"><i className="fa-brands fa-facebook"></i></A>
        </ContentRedSocial>
      </FooterInfo>

    </ContainerFooter>
      <ContentCopyright>
        <Copyright>
          <P>Copyright &copy; 2023 dev.beecodes. All Rights</P>
        </Copyright>
      </ContentCopyright>
    </>
  );
}

export default Footer ;
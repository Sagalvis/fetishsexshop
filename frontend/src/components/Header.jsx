import {A, ContainerHeader, Div, Label, Li, Logo, Nav, TextLogo, Ul} from "./styles/styledHeader";

const Header = () => {

  return (
    <>
      <ContainerHeader>
        <Logo>
          <TextLogo>dev.beecodes</TextLogo>
        </Logo>

        <Nav>
          <Ul>
            <Li>
              <A href="" className="active">Inicio</A>
            </Li>

            <Li>
              <A href="">Nosotros</A>
            </Li>

            <Li>
              <A href="">Politicas</A>
            </Li>
          </Ul>
        </Nav>
        <Label className="hamburger">
          <Div></Div>
          <Div></Div>
          <Div></Div>
        </Label>
      </ContainerHeader>
    </>
  );
}

export default Header;
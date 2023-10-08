import {A, Button, ContainerHeader, Li, Logo, Navbar, Span, TextLogo, Ul} from "./styles/styledHeader";

const Header = () => {

  return (
    <>
      <ContainerHeader>
        <Logo>
          <TextLogo>Fetish<Span>Sex</Span></TextLogo>
        </Logo>

        <Navbar>
          <Ul>
            <Li>
              <A className='hover active' href="">Inicio</A>
            </Li>

            <Li>
              <A className='hover' href="">Nosotros</A>
            </Li>

            <Li>
              <A className='hover' href="">Politicas</A>
            </Li>
          </Ul>
        </Navbar>

          <A href="http://" target="_blank"><Button>Contactanos</Button></A>
      </ContainerHeader>
    </>
  );
}

export default Header;
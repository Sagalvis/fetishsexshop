import { useLocation } from "react-router-dom";
import {LintConten, Button, ContainerHeader, Li, Logo, Navbar, Span, TextLogo, Ul} from "./styles/styledHeader";
const Header = () => {
const {pathname} = useLocation();
  return (
    <>
      <ContainerHeader>
        <Logo to="/">
          <TextLogo className="tittle">Fetish<Span className="tittle2">Sex</Span></TextLogo>
        </Logo>

        <Navbar>
          <Ul >
            <Li >
              <LintConten $isactive={pathname === "/"} className='hover' to="/">Inicio</LintConten>
            </Li>

            <Li >
              <LintConten $isactive={pathname === "/nosotros"} className='hover' to="/nosotros">Nosotros</LintConten>
            </Li>

            <Li >
              <LintConten $isactive={pathname === "/politicas"} className='hover' to="/politicas">Politicas</LintConten>
            </Li>
          </Ul>
        </Navbar>

          <LintConten to="https://api.whatsapp.com/send?phone= +573045299413&text=Hola,%20me%20interesaria%20 saber%20mas%20de%20sus%20Productos%20de%20la%20pagina" target="_blank"><Button>Contactanos</Button></LintConten>
      </ContainerHeader>
    </>
  );
}

export default Header;
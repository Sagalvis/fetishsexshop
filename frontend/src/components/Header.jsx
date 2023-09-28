import { useState } from "react";
import { /* ButtonWhatsapp */ ContainerHeader, Label, NavItem, NavLink, NavLogoContain, NavToggle, NavbarContain, Span } from "./styles/styledHeader";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return ( <>
    <ContainerHeader>
      <NavbarContain>
        <NavLogoContain>

        </NavLogoContain>
        <NavItem className={` ${isOpen && "open"}`}>
          <NavLink>
            <Label>Inicio</Label>
          </NavLink>
          <NavLink>
            <Label>Nosotros</Label>
          </NavLink>
          <NavLink>
            <Label>Politicas</Label>
          </NavLink>
        </NavItem>
{/*         <ButtonWhatsapp>
          botton whatsapp
        </ButtonWhatsapp> */}
        <NavToggle className={` ${isOpen && "open"}`}
        onClick={()=> setIsOpen(!isOpen)}
        >
          <Span></Span>
          <Span></Span>
          <Span></Span>
        </NavToggle>
      </NavbarContain>
    </ContainerHeader>
  </> );
}

export default Header;
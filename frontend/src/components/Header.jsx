import { ContainerHeader, Label, NavItem, NavLink, NavLogoContain, NavbarContain } from "./styles/styledHeader";

const Header = () => {
  return ( <>
    <ContainerHeader>
      <NavbarContain>
        <NavLogoContain>

        </NavLogoContain>
        <NavItem>
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
      </NavbarContain>
    </ContainerHeader>
  </> );
}

export default Header;
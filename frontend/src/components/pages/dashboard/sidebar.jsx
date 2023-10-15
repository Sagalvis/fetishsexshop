/* eslint-disable react-hooks/exhaustive-deps */
import { Span} from "../../styles/styledHeader";
import {
  ButtonLog,
  ContaiSidebar,
  ContainAll,
  ContainLogo,
  ContentLogout,
  ContentName,
  ContentProfile,
  LogoSidebar,
  NavConten,
  NavIcon,
  NavLinks,
  NavTittle,
  Navbar,
  NavbarContain,
} from "../styles/styledSidebar";

import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <ContaiSidebar>
      <ContainAll>
        <ContainLogo>
        <LogoSidebar className="tittle">Fetish<Span style={{color:"red"}} className="tittle2">Sex</Span></LogoSidebar>
        </ContainLogo>

        <Navbar>
          <NavbarContain>
            {ButtonNarbar1.map((item) => (
              <NavConten key={item.id} $isactive={pathname === item.to}>
                <NavLinks to={item.to} $isactive={pathname === item.to}>
                  <NavIcon> {item.icon} </NavIcon>
                  <NavTittle>{item.title}</NavTittle>
                </NavLinks>
              </NavConten>
            ))}
          </NavbarContain>

          <ContentProfile>
            <ContentName>Velki Daza</ContentName>
            <ContentLogout>
              <ButtonLog>Cerrar sesión</ButtonLog>
            </ContentLogout>
          </ContentProfile>
        </Navbar>
      </ContainAll>
    </ContaiSidebar>
  );
};

export default Sidebar;

const ButtonNarbar1 = [
  {
    id: 1,
    title: "Productos",
    icon: <i className="fa-solid fa-store"></i>,
    to: "/dashboard",
  },
  {
    id: 2,
    title: "Empleado",
    icon: <i className="fa-solid fa-clipboard-user"></i>,
    to: "/dashboard/staff"
  }
];

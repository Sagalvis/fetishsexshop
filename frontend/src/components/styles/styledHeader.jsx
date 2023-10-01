import styled from 'styled-components';

export const ContainerHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 0 auto;
  height: 10%;
  width: 100%;
  box-sizing: border-box;
  background-color: black; 
  color: #fff;
`;

export const Logo = styled.div`
  @media (max-width: 768px) {
    display: block;
    height: 70px;
    display: flex;
    align-items: center;
  };
`;

export const TextLogo = styled.p`
  
`;

export const Nav = styled.nav`
  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 999;
    width: 280px;
    height: 100vh;
    background-color: red;
    transition: .2s;
    box-shadow: 2px 0 20px 0 rgba(0, 0, 0, 0.05);
  };
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  
`;

export const A = styled.a`
  color: #fff;
  display: block;
  margin: 0 2px;
  font-weight: 600;
  padding: 8px 18px;
  transition: .2s all ease;
  border-radius: 5px;

  &:hover {
    background: #f6f4ff;
    color: #222;
  }

  &.active {
    background: red;
    color: #fff;
  }
`;

export const Label = styled.label`
  &.hamburger {
    display: none;
    height: fit-content;
    cursor: pointer;
    padding: 3px 8px;
    border-radius: 5px;
    transition: .2s all ease;
  }

  &.hamburger:hover {
    background: #f6f4ff;
  }
`;

export const Div = styled.div`
  width: 30px;
  height: 2px;
  margin: 6px 0;
  background: #212526;
`;
import styled from 'styled-components';
import {Link} from "react-router-dom"
export const ContainerHeader = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: #690c12; 
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: .2s;
  }
`;

export const Logo = styled.div`
  /* background: red; */

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const TextLogo = styled.p`
  font-weight: 200;
  font-size: 4rem;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Span = styled.span`
  font-weight: bold;
`;

export const Navbar = styled.div`
  /* background: blue; */
  display: flex;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const Ul = styled.ul`
  display: flex;
  gap: 5px;
`;

export const Li = styled.li`
  padding: 5px 10px;
  
`;

export const LintConten = styled(Link)`
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  padding: 8px 10px;
  transition: .2s;
  border-radius: 3px;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  &.hover {
    &:hover {
      background: #fff;
      color: #222;
      border-radius: 3px;
    }
  }

  &.active {
    background-color: #fff;
    border-radius: 5px;
    color: black;

    @media (max-width: 768px) {
    background: none;
    color: #fff;
  }
  }
`;

export const Button = styled.button`
  font-size: 1.1rem;
  font-weight: 300;
  border: none;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  color: #fff;
  background-color: black;
  transition: .2s;

  &:hover {
    background: green;
  }

  @media (max-width: 768px) {
    background-color: #fff;
    color: black;
    font-size: 1.1rem;
    padding: 12px 100px;
  }
`;
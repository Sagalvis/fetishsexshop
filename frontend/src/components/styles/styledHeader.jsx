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
  background-color: #000000; 
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: .2s;
  }
`;

export const Logo = styled(Link)`
  /* background: red; */

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
  .tittle{
    font-family: 'Comic Neue', cursive;
    color: #ffffff;
    text-shadow:
		0 0 5px #ffffff,
		0 0 10px #ffffff,
		0 0 20px #ffffff,
		0 0 40px #202020,
		0 0 80px #000000,
		0 0 90px #000000,
		0 0 100px #000000,
		0 0 140px #3c3a3a,
		0 0 180px #000000;
  }
  span{
    color: #ff0000;
    text-shadow:
		0 0 5px #690c12,
		0 0 10px #690c12,
		0 0 20px #690c12,
		0 0 40px #570c11,
		0 0 80px #570c11,
		0 0 90px #570c11,
		0 0 100px #570c11,
		0 0 140px #570c11,
		0 0 180px #570c11;
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
  transition: all .2s ease-in;
  border-radius: 3px;
  border-bottom: ${({$isactive}) => (!$isactive ? `transparent` : `1px solid #fff`)};
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  &.hover {
    &:hover {
      border-bottom: ${({$isactive}) => ($isactive ? `1px solid #fff` : `1px solid #fff`)};
      color: #ffffff;
      border-radius: 5px;
      transition: all .2s ease-in;
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
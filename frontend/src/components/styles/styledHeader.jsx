import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const ContainerHeader = styled.div `
  height: 10%;
  width: 100%;
  box-sizing: border-box;
  background-color: black; 
`; 

export const NavbarContain = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  @media (max-width:768px){
    display: flex;
    justify-content: space-around;
  }
`;

export const NavLogoContain = styled.div`
  background-color: aliceblue;
  width: 30%;
  height: 10%;
  margin-left: 10px;
  @media (max-width:768px){
    width: 80%;
    height: 100%;
  }
`;

export const NavItem = styled.div`
    position: relative;
    width: 40%;
    background-color: red;
    display: flex;
    justify-content: space-around;

  @media (max-width:768px){
    position: absolute;
    top: 10%;
    left: 0;
    background-color: #0dff00;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 30%;
    opacity: 0;
    &.open{
      transition:.3s ease;
      opacity: 1;
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const Label = styled.p`
  margin: 0;
`


export const NavToggle = styled.div`
  display: none;
  @media (max-width:768px){
    display: flex;
    flex-direction: column;
    & span{
      width: 30px;
      height: 4px;
      background-color: white;
      margin-bottom: 5px;
      border-radius: 2px;
      transform-origin: 5px 0;
      transition: all .2s linear;
      cursor: pointer;
    }
    &.open > span {
      transform: rotate(45deg) translate(0, 0);
    }

    &.open > span:nth-child(2){
      display: none;
    }
    &.open > span:nth-child(3){
      transform:  rotate(-45deg) translate(-5px, 1px);
    }
  }
`;

export const Span = styled.span`
  
`;

export const ButtonWhatsapp = styled.div`
position: relative;
  background-color: green;
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width:768px){
    position: absolute;
    top: 60px;
    left: 0;
    background-color: red;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: -webkit-fill-available;
    transform: translateX(-100%);
    transition: all .3s ease;
  }
`

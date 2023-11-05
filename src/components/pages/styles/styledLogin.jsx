import styled from "styled-components";
import {Link} from "react-router-dom"
export const ContainerMainLogin = styled.div`
  background-color: #667492;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerFormL = styled.div`
  background-color: #ffffff;
  width: 380px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
`;

export const ContenFormLogin = styled.div`
  background-color: transparent;
  width: 80%;
  height: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const TitleLogin = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: black;
`;

export const FormLogin = styled.div`
  background-color: transparent;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
`;

export const ContainerInput = styled.div`
  background-color: transparent;
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  align-items: center;
`;


export const LabelLogin = styled.div`
  font-size: .8rem;
  color: #727171;
  width: 100%;
  height: auto;
`

export const InputLogin = styled.input`
  width: 100%;
  height: 60%;
  border: none;
  border-radius: 10px;
  background-color: #eff3f6;
  color: #918c8c;
  padding: 2%;
  font-size: 1rem;
  outline-color: #918c8c;
`

export const ContainerButton = styled(Link)`
  width: 100%;
  height: 10%;
`

export const ButtonLogin = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #4161ed;
  font-size: 1.3rem;
  color: #eee;
  transition: all .2s ease;
  &:hover{
    background-color: #3448a5 ;
  }
`
export const ContenCopyRigth = styled.div`
  background-color: transparent;
  width: 80%;
  height: 10%;
  font-size: 0.92rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios"
const Login = () => {
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  const apiBaseFront = import.meta.env.VITE_URL_FRONTEND;
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  //Funcion para LogIn
  const Login = async () => {
    try {
      const Log = await axios.post(`${apiBaseBack}/Login`,{
        correo: correo,
        contraseña: contraseña
      })
      if(Log.status === 200){
        const token = Log.data.token
        localStorage.setItem("user", JSON?.stringify(token))
        setTimeout(()=>{
          window.location.href=`${apiBaseFront}/&/dashboard`
        },300)
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <ContainerMainLogin>
      <FormLogin>
        <TitleForm>Bienvenido de nuevo</TitleForm>
        <FormL>
          <ContenInput>
            <LabelLogin>Correo</LabelLogin>
            <InputLogin onChange={(e)=>{setCorreo(e.target.value)}}/>
          </ContenInput>
          <ContenInput>
            <LabelLogin>Contraseña</LabelLogin>
            <InputLogin onChange={(e)=>{setContraseña(e.target.value)}}/>
          </ContenInput>
        </FormL>
        <ContainerButtton /* to={"/dashboard"} */>
          <ButtonLogin onClick={()=>Login()}>Login</ButtonLogin>
        </ContainerButtton>
      </FormLogin>
      <InfoLogin>
        Fetish <span>Sex</span>
      </InfoLogin>
    </ContainerMainLogin>
  );
};

export default Login;

const ContainerMainLogin = styled.div`
  background-color: rgb(35, 3, 31);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FormLogin = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 500px;
  border-radius: 15px;
  box-shadow: 2px 2px 8px rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 768px) {
    width: 320px;
    height: 75%;
  }
  @media (max-width: 425px) {
    width: 75%;
    height: 75%;
  }
`;

export const TitleForm = styled.h2`
  margin: 0;
`;
export const FormL = styled.div`
  background-color: blue;
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ContenInput = styled.div`
  height: 20%;
  width: 90%;
  background-color: red;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;

export const LabelLogin = styled.label``;
export const InputLogin = styled.input`
  width: 100%;
  height: 30%;
  border: none;
`;

export const ButtonLogin = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;
export const InfoLogin = styled.div`
  background-color: #ffffff;
  width: 40%;
  height: 10%;
  border-radius: 15px;
  margin: 0;
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: #92000a;
  }
  @keyframes bhnqyQ {
    0% {
      text-shadow: rgb(104, 4, 92) 0px 0px 10px, rgb(104, 4, 92) 0px 0px 20px,
        rgb(104, 4, 92) 0px 0px 30px, rgb(104, 4, 92) 0px 0px 40px,
        rgb(104, 4, 92) 0px 0px 50px, rgb(104, 4, 92) 0px 0px 60px,
        rgb(104, 4, 92) 0px 0px 70px, rgb(104, 4, 92) 0px 0px 90px;
    }
  }
  @media (max-width: 1006px) {
    font-size: 4rem;
  }
  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 340px) {
    font-size: 3rem;
  }
`;

export const ContainerButtton = styled(Link)`
  background-color: aqua;
  width: 30%;
  height: 5%;
`;

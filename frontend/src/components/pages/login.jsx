import { useState } from "react";
import { ButtonLogin, ContainerButton, ContainerFormL, ContainerInput, ContainerMainLogin, ContenCopyRigth, ContenFormLogin, FormLogin, InputLogin, LabelLogin, TitleLogin } from "./styles/styledLogin";
import axios from "axios";
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
    <>
      <ContainerMainLogin>
        <ContainerFormL>
          <ContenFormLogin>
            <TitleLogin>Login</TitleLogin>
            <FormLogin>
              <ContainerInput>
                <LabelLogin>EMAIL</LabelLogin>
                <InputLogin
                type="email"
                onChange={(e)=>setCorreo(e.target.value)}
                required
                />
              </ContainerInput>
              <ContainerInput>
                <LabelLogin>PASSWORD</LabelLogin>
                <InputLogin 
                type="password"
                onChange={(e)=>setContraseña(e.target.value)}
                required
                />
              </ContainerInput>
            </FormLogin>
            <ContainerButton >

            <ButtonLogin onClick={Login}>
              Login
            </ButtonLogin>
            </ContainerButton>
          </ContenFormLogin>
          <ContenCopyRigth>
          Copyright &copy; 2023 devSershCodes. All Rights
          </ContenCopyRigth>
        </ContainerFormL>
      </ContainerMainLogin>
    </>
  );
};

export default Login;

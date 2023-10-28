import { ButtonLogin, ContainerButton, ContainerFormL, ContainerInput, ContainerMainLogin, ContenCopyRigth, ContenFormLogin, FormLogin, InputLogin, LabelLogin, TitleLogin } from "./styles/styledLogin";

const Login = () => {
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
                required
                />
              </ContainerInput>
              <ContainerInput>
                <LabelLogin>PASSWORD</LabelLogin>
                <InputLogin 
                type="password"
                required
                />
              </ContainerInput>
            </FormLogin>
            <ContainerButton to={"/&/dashboard"}>

            <ButtonLogin>
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

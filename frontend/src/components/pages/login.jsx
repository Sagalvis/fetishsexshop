import styled from "styled-components";

const Login = () => {
  return (
    <ContainerMainLogin>
      <FormLogin>
        <TitleForm>Bienvenido de nuevo</TitleForm>
        <FormL>
          <ContenInput>
            <LabelLogin>Correo</LabelLogin>
            <InputLogin />
          </ContenInput>
          <ContenInput>
            <LabelLogin>Contraseña</LabelLogin>
            <InputLogin />
          </ContenInput>
        </FormL>
        <ButtonLogin>Login</ButtonLogin>
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
  width: 60%;
  height: 7%;
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

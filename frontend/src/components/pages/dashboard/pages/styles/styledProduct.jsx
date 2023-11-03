import styled from "styled-components";

export const ContainerMainDashboard = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderDashboard = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #969696;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContenDashboard = styled.div`
  width: 100%;
  height: 70.5%;
  border-bottom: 1px solid #969696;
`;

export const FooterDashboard = styled.div`
  width: 100%;
  height: 19.5%;
`;

export const ContainerTitle = styled.div`
  /* background-color: red; */
  width: 30%;
  height: 100%;
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  .fa-store{
    font-size: 1.5rem;
    margin-right: 10px;
  }
`;

export const ContainerButton = styled.div`
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: all .3s ease;
  border-radius: 4px;
  color: #000000;

  &:hover {
    background: #cecece;
  }
`;
export const ButtonDashboard = styled.button`
  border: none;
  background: none;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-family: "Outfit";

  &.input-display {
    width: 50%;
  }
  &.width {
    width: 50%;
  }

  &::placeholder {
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0;
  resize: none;
  box-sizing: border-box;
  padding: 10px;
  font-family: "Outfit";
  font-size: 15px;
`;

export const ButtonRegister = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  margin-bottom: 2%;
  padding-right: 5px;
  gap: 10px;
`;

export const BtnRegister = styled.button`
  display: inline-block;
  padding: 8px 30px;
  background-color: #4360ef;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #000000;
    color: white;
  }
  .Delete{
    background-color: red;
  }
`;

export const ContentInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.display {
    display: flex;
    flex-direction: row;
    gap: 3px;
  }

  .btn {
    width: 50%;
    display: flex;
    justify-content: center;
    letter-spacing: 1.5px;
  }
`;

export const ContainTable = styled.div`
  background-color: #fff;
  width: 100%;
  max-height: 80%;
  margin-bottom: 15px;
  overflow-y: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  background-color: #f9f9f9;
  color: #333;
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

export const Tr = styled.tr`
  &:nth-child(odd) {
    background-color: #efefef;
  }
`;

export const Th = styled.th`
  background-color: #f9f9f9;
  color: #333;
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ccc;
`;

export const Tbody = styled.tbody`
  padding: 10px;
  border-bottom: 1px solid #ccc;

  &:nth-child(odd) {
    background-color: #f9f9f9;
  }
`;

export const Td = styled.td`
  padding: 10px;
  text-transform: capitalize;
  border-bottom: 1px solid #ccc;

  &.email {
    text-transform: lowercase;
  }
`;

export const ButtonOptions = styled.div`
  .fa-pen-to-square {
    font-size: 15px;
  }

  .fa-car {
    font-size: 15px;
  }

  .fa-trash-can {
    font-size: 15px;
  }
  .fa-clipboard-check {
    font-size: 15px;
  }
`;

// Boton de Opciones independiente del de crear un cliente.
export const Buttons = styled.button`
  background: none;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all .4s ease;

  &:hover {
    background: #d3d3d3;
    border-radius: 4px;
    
  }
`;
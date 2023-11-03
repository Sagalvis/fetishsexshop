/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  BtnRegister,
  ButtonDashboard,
  ButtonOptions,
  ButtonRegister,
  Buttons,
  ContainTable,
  ContainerButton,
  ContainerMainDashboard,
  ContainerTitle,
  ContenDashboard,
  ContentInput,
  HeaderDashboard,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./styles/styledProduct";
import axios from "axios";
import Modals from "../../modal";
import { ContainInfoModal, Paragraph } from "../../styles/styledModal";

const StaffDashboard = () => {
  const [getEmails, setGetEmails] = useState([]);
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;
  const [handleClose, setHandleClose] = useState(false);
  const [handleEdit, setHandleEdit] = useState(false);
  const [handleDelete, setHandleDelete] = useState(false);

  const getStaff = async () => {
    try {
      const res = await axios.get(`${apiBaseBack}/emails`);
      setGetEmails(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const DeleteProduct = () => {
    setHandleDelete(!handleDelete);
  };

  useEffect(() => {
    getStaff();
  }, []);
  return (
    <>
      <ContainerMainDashboard>
        <HeaderDashboard>
          <ContainerTitle>
            <i className="fa-solid fa-store"></i>Cuentas
          </ContainerTitle>
          <ContainerButton>
            <ButtonDashboard title="Crear cuenta"
            onClick={() => setHandleClose(!handleClose)}
            >
              
              <i className="fa-solid fa-plus"></i>
            </ButtonDashboard>
          </ContainerButton>
        </HeaderDashboard>
        <ContenDashboard>
          <ContainTable>
            <Table>
              <Thead>
                <Tr>
                  <Th>ID Correos</Th>
                  <Th>Correo</Th>
                  <Th>Estado</Th>
                  <Th>Opciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {getEmails.map((item, i) => (
                  <Tr key={i}>
                    <Td>{(i + 1).toString().padStart(2, "0")}</Td>
                    <Td>{item.correo}</Td>
                    <Td>{item.estado}</Td>
                    <Td>
                      <ButtonOptions>
                        <Buttons
                          onClick={() => setHandleEdit(!handleEdit)}
                          title="Editar producto"
                        >
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Buttons>
                        <Buttons
                          onClick={() => DeleteProduct()}
                          title="Eliminar producto"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </Buttons>
                      </ButtonOptions>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ContainTable>
        </ContenDashboard>
      </ContainerMainDashboard>
      <Modals
        status={handleClose}
        changeStatus={setHandleClose}
        changeposition={"start"}
        showHeader={true}
        showCloseButton={true}
        titleModal={"Crear cuenta"}
      >
        <ContainInfoModal>
          <ContentInput>
            <Input
              type="email"
              placeholder="Correo"
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="password"
              placeholder="Contraseña"
            />
          </ContentInput>
          <ButtonRegister className="gap">
            <BtnRegister
            >
              Crear cuenta
            </BtnRegister>
          </ButtonRegister>
        </ContainInfoModal>
      </Modals>
      <Modals
        status={handleEdit}
        changeStatus={setHandleEdit}
        titleModal={"Editar correo"}
        changeposition={"start"}
        showHeader={true}
        showCloseButton={true}
      >
        <ContainInfoModal>
          <ContentInput>
            <Input 
            type="email"
            placeholder="correo" />
          </ContentInput>
          <ContentInput>
            <Input 
            type="password"
            placeholder="contraseña" />
          </ContentInput>
          <ButtonRegister className="gap">
            <BtnRegister
            >
              Actualizar 
            </BtnRegister>
          </ButtonRegister>
        </ContainInfoModal>
      </Modals>
      <Modals
        status={handleDelete}
        changeStatus={setHandleDelete}
        titleModal={"Eliminar cuenta"}
        changeposition={"start"}
        showHeader={true}
        showCloseButton={true}
      >
        <ContainInfoModal>
          <Paragraph>
            ¿Estas seguro de que quieres eliminar esta cuenta?
          </Paragraph>
          <ButtonRegister>
            <BtnRegister className="Delete">No, Desactivar</BtnRegister>
            <BtnRegister className="Delete">Si, Eliminar</BtnRegister>
          </ButtonRegister>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default StaffDashboard;

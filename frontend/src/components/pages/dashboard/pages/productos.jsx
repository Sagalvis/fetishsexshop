import { useState } from "react";

import Modals from "../../modal";
import { ContainInfoModal } from "../../styles/styledModal";
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
  FooterDashboard,
  HeaderDashboard,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "./styles/styledProduct";
const ProductosDashboard = () => {
  const [handleClose, setHandleClose] = useState(false);

  const handleSumitProduct = async (e) => {
    e.preventDefault();
    console.log("Crear query para los productos");
  };
  return (
    <>
      <ContainerMainDashboard>
        <HeaderDashboard>
          <ContainerTitle>
            <i className="fa-solid fa-store"></i>Productos
          </ContainerTitle>
          <ContainerButton>
            <ButtonDashboard
              title="Crear producto"
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
                  <Th>ID Producto</Th>
                  <Th>Nombre Producto</Th>
                  <Th>Descripcion breve</Th>
                  <Th>Opciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Borojo power</Td>
                  <Td>Sirve hasta para lo que tu menos crees</Td>
                  <Td>
                  <ButtonOptions>
                    <Buttons
                      title="Editar producto"
                    >
                      <i className="fa-solid fa-pen-to-square"></i>
                      
                    </Buttons>
                    <Buttons
                      title="Eliminar producto"
                    >
                      <i className="fa-solid fa-trash-can"></i>
                    </Buttons>
                  </ButtonOptions>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </ContainTable>
        </ContenDashboard>
        <FooterDashboard>Aqui va el footer</FooterDashboard>
      </ContainerMainDashboard>
      <Modals
        status={handleClose}
        changeStatus={setHandleClose}
        changeposition={"start"}
        showHeader={true}
        showCloseButton={true}
        titleModal={"Crear producto"}
      >
        <ContainInfoModal>
          <ContentInput>
            <Input placeholder="Nombre del producto" />
          </ContentInput>
          <ContentInput>
            <Input placeholder="Descripcion breve del producto" />
          </ContentInput>
          <ContentInput>
            <Input type="file" />
          </ContentInput>
          <ButtonRegister className="gap">
            <BtnRegister
              onClick={() => {
                handleSumitProduct();
              }}
            >
              Crear Producto
            </BtnRegister>
          </ButtonRegister>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default ProductosDashboard;

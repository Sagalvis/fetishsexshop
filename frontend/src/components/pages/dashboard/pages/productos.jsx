import { useState } from "react";
import axios from "axios";
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
  const [product, setProduct] = useState("");
  const [descrip, setDescrip] = useState("");
  const [imgruta, setImgruta] = useState(null);
  const apiBaseBack = import.meta.VITE_URL_BACKEND

  const handleSumitProduct = async (e) => { 
    try {
      e.preventDefault()
      const formData = new FormData();
      formData.append("nomb_producto", product);
      formData.append("description", descrip);
      formData.append("ruta_img", imgruta);
      await axios.post(`${apiBaseBack}/postproducto`,formData)
    } catch (error) {
      console.log("Ocurrió un error", error);
    }
    console.log("creado con exito");
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
            <Input 
            type="text"
            placeholder="Nombre del producto" 
            onChange={(e)=> setProduct(e.target.value)}
            />
          </ContentInput>
          <ContentInput>
            <Input 
            type="text"
            placeholder="Descripcion breve del producto" 
            onChange={(e)=> setDescrip(e.target.value)}
            />
          </ContentInput>
          <ContentInput>
            <Input 
            type="file" 
            onChange={(e)=> setImgruta(e.target.files[0])}
            />
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

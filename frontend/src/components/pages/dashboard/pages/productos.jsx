import { useEffect, useState } from "react";

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
  TextArea,
  Th,
  Thead,
  Tr,
} from "./styles/styledProduct";
import axios from "axios"
const ProductosDashboard = () => {
  const [handleClose, setHandleClose] = useState(false);
  const [handleEdit, setHandleEdit] = useState(false);
  const [inventory, setInventory] = useState([]);

  const getProduct = async() => {
    const res = await axios.get(`${apiBaseBack}/getProduct`)
    setInventory(res.data)
  }
  useEffect(()=>{
    getProduct();
  },[])
  const [product, setProduct] = useState("");
  const [descrip, setDescrip] = useState("");
  const [imgruta, setImgruta] = useState(null);
  const [des_completa, setDes_completa] = useState("");
  const apiBaseBack = import.meta.VITE_URL_BACKEND

  const handleSumitProduct = async () => { 
    try {
      
      const formData = new FormData();
      formData.append("nomb_producto", product);
      formData.append("description", descrip);
      formData.append("ruta_img", imgruta);
      formData.append("descrip_completa", des_completa)
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
              {inventory.map((item,i)=>(
                <Tr key={i}>
                  <Td>{item.id_producto}</Td>
                  <Td>{item.nomb_producto}</Td>
                  <Td>{item.descripcion}</Td>
                  <Td>
                  <ButtonOptions>
                    <Buttons
                      onClick={() =>  setHandleEdit(!handleEdit)}
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
              ))}
                
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
          <ContentInput>
            <TextArea 
            placeholder="Descripcion completa"
            onChange={(e)=> setDes_completa(e.target.value)}
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
      <Modals
        status={handleEdit}
        changeStatus={setHandleEdit}
        titleModal={"Editar producto"}
        changeposition={"start"}
        showHeader={true}
        showCloseButton={true}
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
          <ContentInput>
            <TextArea placeholder="Descripcion completa"/>
          </ContentInput>
          <ButtonRegister className="gap">
            <BtnRegister
              onClick={() => {
                handleSumitProduct();
              }}
            >
              Actualizar 
            </BtnRegister>
          </ButtonRegister>
        </ContainInfoModal>
      </Modals>
    </>
  );
};

export default ProductosDashboard;

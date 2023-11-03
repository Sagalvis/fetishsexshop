/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

import Modals from "../../modal";
import { ContainInfoModal, Paragraph } from "../../styles/styledModal";
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
import axios from "axios";
const ProductosDashboard = () => {
  const [handleClose, setHandleClose] = useState(false);
  const [handleEdit, setHandleEdit] = useState(false);
  const [handleDelete, setHandleDelete] = useState(false);
  const [inventory, setInventory] = useState([]);
  const [product, setProduct] = useState("");
  const [descrip, setDescrip] = useState("");
  const [imgruta, setImgruta] = useState(null);
  const [des_completa, setDes_completa] = useState("");
  const [update, setUpdate] = useState([]);
  const [idproducto, setIdproduct] = useState("");
  const apiBaseBack = import.meta.env.VITE_URL_BACKEND;

  const getProduct = async () => {
    const res = await axios.get(`${apiBaseBack}/productdash`);
    setInventory(res.data);
    console.log(res.data);
  };

  const handleSumitProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("nomb_producto", product);
      formData.append("descripcion", descrip);
      formData.append("descr_completa", des_completa);
      formData.append("file", imgruta);
      await axios.post(`${apiBaseBack}/postproducto`, formData);
      alert("creado con exito");
    } catch (error) {
      alert("Ocurrió un error", error);
    }
  };

  const captura = (item) => {
    setUpdate(item)
    setIdproduct(item.id_producto)
    setHandleEdit(!handleEdit)
  }
  const UpdateProduct = async () => {
    try {
      const formData = new FormData();
      formData.append("nomb_producto", product);
      formData.append("descripcion", descrip);
      formData.append("descr_completa", des_completa);
      formData.append("file", imgruta);
      await axios.patch(`${apiBaseBack}/product/${idproducto}`, formData)
      alert('Actualizado con exito')
    } catch (error) {
      console.log(error);
    }
  }
  const DeleteProduct = () => {
    setHandleDelete(!handleDelete);
  };
  useEffect(() => {
    getProduct();
  }, []);
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
                  <Th>Nombre img</Th>
                  <Th>Estado</Th>
                  <Th>Opciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {inventory.map((item, i) => (
                  <Tr key={i}>
                    <Td>{(i + 1).toString().padStart(2, "0")}</Td>
                    <Td>{item.nomb_producto}</Td>
                    <Td>{item.descripcion}</Td>
                    <Td>{item.ruta_img}</Td>
                    <Td>{item.estado}</Td>
                    <Td>
                      <ButtonOptions>
                        <Buttons 
                        onClick={() => {
                          captura(item)
                        }}
                        title="Editar producto">
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
              onChange={(e) => setProduct(e.target.value)}
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="text"
              placeholder="Descripcion breve del producto"
              onChange={(e) => setDescrip(e.target.value)}
            />
          </ContentInput>
          <ContentInput>
            <Input
              type="file"
              onChange={(e) => setImgruta(e.target.files[0])}
            />
          </ContentInput>
          <ContentInput>
            <TextArea
              placeholder="Descripcion completa"
              onChange={(e) => setDes_completa(e.target.value)}
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
            <Input 
            value={update.nomb_producto}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Nombre del producto" 
            />
          </ContentInput>
          <ContentInput>
            <Input 
            value={update.descripcion}
            onChange={(e) => setDescrip(e.target.value)}
            placeholder="Descripcion breve del producto" 
            />
          </ContentInput>
          <ContentInput>
            <Input 
            type="file"
            onChange={(e) => setImgruta(e.target.value)} 
            />
          </ContentInput>
          <ContentInput>
            <TextArea 
            value={update.descr_completa}
            onChange={(e) => setDes_completa(e.target.value)}
            placeholder="Descripcion completa" 
            />
          </ContentInput>
          <ButtonRegister className="gap">
            <BtnRegister
              onClick={() => {
                UpdateProduct();
              }}
            >
              Actualizar
            </BtnRegister>
          </ButtonRegister>
        </ContainInfoModal>
      </Modals>
      <Modals
        status={handleDelete}
        changeStatus={setHandleDelete}
        titleModal={"Eliminar producto"}
        changeposition={"start"}
        showHeader={true}
        showCloseButton={true}
      >
        <ContainInfoModal>
          <Paragraph>
            ¿Estas seguro de que quieres eliminar este producto?
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

export default ProductosDashboard;

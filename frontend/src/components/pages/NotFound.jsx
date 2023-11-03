import "./styles/styledNotFound.css"
import styled from "styled-components";
const NotFound = () => {
  return (
    <ContainerNotFound>
      <div className="error">404</div>
      <span className="info">File not found</span>
    </ContainerNotFound>
  );
};

export default NotFound;

const ContainerNotFound =  styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
`
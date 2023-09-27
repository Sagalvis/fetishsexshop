import { ContainerHome, ContenMain } from "./styles/styledHome";
import Header from "../Header";
import Footer from "../Footer"
const Home = () => {
  return (
    <>
      <ContainerHome>
        <Header></Header>
        <ContenMain></ContenMain>
        <Footer></Footer>
      </ContainerHome>
    </>
  );
}

export default Home;
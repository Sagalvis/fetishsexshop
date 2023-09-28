import { Route, Routes } from "react-router-dom";
import {ContainerIndexRouter} from "./styles/styledIndexRouter"
import Home from "./pages/home";
import Nosotros from "./pages/Nosotros";
import Politicas from "./pages/Politicas";
import NotFound from "./pages/NotFound";
const IndexRouterMain = () => {
  return ( 
    <ContainerIndexRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/politicas" element={<Politicas/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </ContainerIndexRouter>
  );
}

export default IndexRouterMain;
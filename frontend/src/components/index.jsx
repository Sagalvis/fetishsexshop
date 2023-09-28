import { Route, Routes } from "react-router-dom";
import {ContainnerMain} from "./styles/styledMain"
import Home from "./pages/home";
import Nosotros from "./pages/Nosotros";
import Politicas from "./pages/Politicas";
import NotFound from "./pages/NotFound";
const IndexRouterMain = () => {
  return ( 
    <ContainnerMain>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/politicas" element={<Politicas/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </ContainnerMain>
  );
}

export default IndexRouterMain;
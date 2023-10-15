import { Route, Routes } from "react-router-dom";
import {ContainerIndexRouter} from "../components/styles/styledIndexRouter"
import Home from "../components/pages/home";
import Nosotros from "../components/pages/Nosotros";
import Politicas from "../components/pages/Politicas";
import NotFound from "../components/pages/NotFound";
import Products from "../components/Products";
import * as Rutas from "./routes"
import Login from "../components/pages/login";
import Dashboard from "../components/pages/dashboard"

const IndexRouterMain = () => {
  return ( 
    <ContainerIndexRouter>
      <Routes>
        <Route path={Rutas.HOME} element={<Home/>}/>
        <Route path={Rutas.NOSOTROS} element={<Nosotros/>}/>
        <Route path={Rutas.POLITICAS} element={<Politicas/>}/>
        <Route path={Rutas.PRODUCTOS} element={<Products/>}/>
        <Route path={Rutas.PRIVATED} element={<Dashboard/>}/>
        <Route path={Rutas.PRIVATE} element={<Login/>}/>
        <Route path={Rutas.NOTFOUND} element={<NotFound/>}/>
      </Routes>
    </ContainerIndexRouter>
  );
}

export default IndexRouterMain;
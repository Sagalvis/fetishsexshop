import { Route, Routes } from "react-router-dom";
import ProductosDashboard from "./pages/productos";
import StaffDashboard from "./pages/staff";

const RouteDashboard = () => {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<ProductosDashboard/>} />
      <Route path="/staff" element={<StaffDashboard/>} />
    </Routes>
    </>
  );
}

export default RouteDashboard;
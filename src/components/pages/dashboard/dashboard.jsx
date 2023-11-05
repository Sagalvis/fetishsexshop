import styled from "styled-components";
import Layout from "../layout/layout";
import RouteDashboard from "./dashboard.routes";
const Dashboard = () => {
  return (
    <ContainDashboard>
      <Layout>
        <RouteDashboard/>
      </Layout>
    </ContainDashboard>
  );
};

export default Dashboard;

export const ContainDashboard = styled.div`
  width: 100vw;
  height: 100vh;
`;

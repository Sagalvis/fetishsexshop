import { ButtonLogin, ContainerButtton } from "./login";

const Dashboard = () => {
  return (
    <div>
      <h1>dashboard</h1>
      <ContainerButtton to={"/&/login"}>
        <ButtonLogin>Logout</ButtonLogin>
      </ContainerButtton>
    </div>
  );
};

export default Dashboard;

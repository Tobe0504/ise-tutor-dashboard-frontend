import Layout from "../Components/Layout/Layout";
import DashboardMain from "../Containers/DashboardMain/DashboardMain";
// import EligibleuserDashboard from "../Containers/EligibleuserDashboard/EligibleuserDashboard";
// import NullStateDashboard from "../Containers/NullStateDashboard/NullStateDashboard";

const Dashboard = () => {
  return (
    <Layout displayRightCta>
      {/* <NullStateDashboard /> */}
      {/* <EligibleuserDashboard /> */}
      <DashboardMain />
    </Layout>
  );
};

export default Dashboard;

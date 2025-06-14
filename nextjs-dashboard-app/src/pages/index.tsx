import DashboardLayout from '../components/templates/DashboardLayout';

const Home = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Welcome to the Sales Dashboard</h1>
      <p className="mt-4">Navigate to the dashboard to view detailed sales charts.</p>
    </DashboardLayout>
  );
};

export default Home;
import React from 'react';
import DashboardLayout from '../components/templates/DashboardLayout';
import SalesChart from '../components/organisms/SalesChart';

const Dashboard: React.FC = () => {
    return (
        <DashboardLayout>
            <SalesChart />
        </DashboardLayout>
    );
};

export default Dashboard;
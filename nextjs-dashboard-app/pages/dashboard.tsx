import React from 'react';
import DashboardLayout from '../src/components/templates/DashboardLayout';
import SalesChart from '../src/components/organisms/SalesChart';

const Dashboard: React.FC = () => {
    return (
        <DashboardLayout>
            <SalesChart />
        </DashboardLayout>
    );
};

export default Dashboard;
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { SalesData } from '../../types/sales';
import parseCSV from '../../utils/parseCSV';

const SalesChart: React.FC = () => {
    const [salesData, setSalesData] = useState<SalesData[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await parseCSV('/data/sales_data.csv');
            setSalesData(data);
        };
        fetchData();
    }, []);

    const chartData = {
        labels: salesData.map(data => data.year),
        datasets: [
            {
                label: 'Sales Amount',
                data: salesData.map(data => data.amount),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Sales Data Overview</h2>
            <Bar data={chartData} />
        </div>
    );
};

export default SalesChart;
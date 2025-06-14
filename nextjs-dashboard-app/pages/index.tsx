import DashboardLayout from '../src/components/templates/DashboardLayout';
import { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const sales2024 = [1200, 1900, 3000, 2500, 2200, 2100, 2600, 2300, 2000, 2400, 2800, 3000];
const sales2023 = [1000, 1700, 2800, 2300, 2000, 1800, 2200, 2100, 1900, 2000, 2500, 2700];
const sales2022 = [900, 1500, 2500, 2000, 1700, 1600, 2000, 1800, 1700, 1800, 2200, 2500];

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '2024',
      data: sales2024,
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
      borderWidth: 1,
    },
    {
      label: '2023',
      data: sales2023,
      backgroundColor: 'rgba(16, 185, 129, 0.5)',
      borderColor: 'rgba(16, 185, 129, 1)',
      borderWidth: 1,
    },
    {
      label: '2022',
      data: sales2022,
      backgroundColor: 'rgba(234, 179, 8, 0.5)',
      borderColor: 'rgba(234, 179, 8, 1)',
      borderWidth: 1,
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' as const },
    title: { display: true, text: 'Yearly Sales (Bar Chart)' },
  },
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' as const },
    title: { display: true, text: 'Yearly Sales (Line Chart)' },
  },
};

const pieData = {
  labels: ['2024', '2023', '2022'],
  datasets: [
    {
      label: 'Total Sales',
      data: [
        sales2024.reduce((a, b) => a + b, 0),
        sales2023.reduce((a, b) => a + b, 0),
        sales2022.reduce((a, b) => a + b, 0),
      ],
      backgroundColor: [
        'rgba(59, 130, 246, 0.7)',
        'rgba(16, 185, 129, 0.7)',
        'rgba(234, 179, 8, 0.7)',
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(234, 179, 8, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  responsive: true,
  plugins: {
    legend: { position: 'top' as const },
    title: { display: true, text: 'Total Sales by Year (Pie Chart)' },
  },
};

const chartContainerClass = "bg-white rounded-lg shadow p-4 flex items-center justify-center min-h-[500px] max-w-2xl mx-auto";

const Home = () => {
  const [chartType, setChartType] = useState<'bar' | 'line' | 'pie'>('bar');

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">Welcome to the Sales Dashboard</h1>
      <p className="mt-4 mb-8">Navigate the dashboard to view detailed sales charts.</p>
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${chartType === 'bar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setChartType('bar')}
        >
          Bar Chart
        </button>
        <button
          className={`px-4 py-2 rounded ${chartType === 'line' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setChartType('line')}
        >
          Line Chart
        </button>
        <button
          className={`px-4 py-2 rounded ${chartType === 'pie' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setChartType('pie')}
        >
          Pie Chart
        </button>
      </div>
      <div className={chartContainerClass}>
        {chartType === 'bar' && <Bar data={salesData} options={{ ...barOptions, maintainAspectRatio: false }} width={700} height={400} />}
        {chartType === 'line' && <Line data={salesData} options={{ ...lineOptions, maintainAspectRatio: false }} width={700} height={400} />}
        {chartType === 'pie' && <Pie data={pieData} options={{ ...pieOptions, maintainAspectRatio: false }} width={700} height={400} />}
      </div>
    </DashboardLayout>
  );
};

export default Home;
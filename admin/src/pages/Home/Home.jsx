import React, { useEffect, useState } from 'react';
import './Home.css';
import { Line, Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, ArcElement, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ArcElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const Home = ({ url }) => {
  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [aovData, setAovData] = useState(null);
  const [statusData, setStatusData] = useState(null);

  // Fetch data for the line chart (Number of orders per month)
  useEffect(() => {
    const fetchOrdersPerMonth = async () => {
      try {
        const response = await axios.get(`${url}/api/order/orders-per-month`);
        if (response.data.success) {
          const labels = response.data.data.map(item => item.month);
          const data = response.data.data.map(item => item.orderCount);

          setLineData({
            labels,
            datasets: [
              {
                label: 'Number of Orders',
                data,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(75,192,192,1)',
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error fetching orders per month:', error);
      }
    };

    fetchOrdersPerMonth();
  }, [url]);

  // Fetch data for the bar chart (Amount per month)
  useEffect(() => {
    const fetchAmountPerMonth = async () => {
      try {
        const response = await axios.get(`${url}/api/order/amount-per-month`);
        if (response.data.success) {
          const labels = response.data.data.map(item => item.month);
          const data = response.data.data.map(item => item.totalAmount);

          setBarData({
            labels,
            datasets: [
              {
                label: 'Total Amount',
                data,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error fetching amount per month:', error);
      }
    };

    fetchAmountPerMonth();
  }, [url]);

  useEffect(() => {
    const fetchAovData = async () => {
      try {
        const response = await axios.get(`${url}/api/order/average-order-value`);
        if (response.data.success) {
          const labels = response.data.data.map(item => item.month);
          const data = response.data.data.map(item => item.averageOrderValue);

          setAovData({
            labels,
            datasets: [
              {
                label: 'Average Order Value',
                data,
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error fetching AOV data:', error);
      }
    };

    fetchAovData();
  }, [url]);

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const response = await axios.get(`${url}/api/order/orders-by-status`);
        if (response.data.success) {
          const labels = response.data.data.map(item => item.status);
          const data = response.data.data.map(item => item.count);

          setStatusData({
            labels,
            datasets: [
              {
                label: 'Orders by Status',
                data,
                backgroundColor: [
                  'rgba(75, 192, 192, 0.6)',
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
                  'rgba(75, 192, 192, 0.6)',
                ],
                borderColor: [
                  'rgba(75, 192, 192, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
              },
            ],
          });
        }
      } catch (error) {
        console.error('Error fetching orders by status:', error);
      }
    };

    fetchStatusData();
  }, [url]);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="home-container">
      <div className="chart-row">
        <div className="chart-container">
          {lineData ? <Line data={lineData} options={options} /> : <p>Loading...</p>}
        </div>
        <div className="chart-container">
          {barData ? <Bar data={barData} options={options} /> : <p>Loading...</p>}
        </div>
      </div>
      <div className="chart-row">
        <div className="chart-container">
          {aovData ? <Bar data={aovData} options={options} /> : <p>Loading...</p>}
        </div>
        <div className="chart-container container-center">
        {statusData ? <Pie data={statusData} options={options} /> : <p>Loading...</p>}
        </div>
      </div>
    </div>
  );
};

export default Home;

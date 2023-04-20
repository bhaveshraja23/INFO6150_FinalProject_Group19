import React from "react";
//styles
import "./styles.scss";
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, LineElement, BarElement, PointElement, BarController, BubbleController, DoughnutController, LineController, PieController, PolarAreaController, RadarController, ScatterController, CategoryScale, LinearScale, LogarithmicScale, RadialLinearScale, TimeScale, TimeSeriesScale } from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale
);



const Dashboard = () => {

  const pieData = {
    labels: ["Active Users", "Average Order Value", "New Customers (Last Month)"],
    datasets: [
      {
        data: [35, 60, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const barData = {
    labels: ["Active Users", "Average Order Value", "New Customers (Last Month)"],
    datasets: [
      {
        label: "Data",
        data: [35, 60, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <div className="flex-right">
      <div className="top-bar"></div>
      <div className="heading">
        <h3> Dashboard </h3>
      </div>
      <div className="metric-container">
        <div className="metric">
          <h3>113</h3>
          <p>Total ORDERS</p>
        </div>
        <div className="metric">
          <h3>420</h3>
          <p>Total Clients</p>
        </div>
        <div className="metric">
          <h3>$2342</h3>
          <p>Total Revenue</p>
        </div>
        <div className="metric">
          <h3>4</h3>
          <p>Tables Booked </p>
        </div>
        
      </div>
      {/* <div>
        <Pie data={pieData} />
        <Bar data={barData} />
      </div> */}
      {/* <div className="chart-container">
      <div className="chart-wrapper">
        <Pie data={pieData}/>
      </div>
      <div className="chart-wrapper">
        <Bar data={barData} />
      </div>
</div> */}

    </div>
    
  );
};

export default Dashboard;

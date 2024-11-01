import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Skills() {
  // Data for the pie chart
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'MySQL'],
    datasets: [
      {
        label: 'Skills',
        data: [30, 40, 30, 20, 30], // Adjust the values as per your skill level
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        labels: {
          color: 'white' // Set legend label color to white
        },
      },
    },
  };

  return (
  <section  id="skills">
    <div id="skillChart"  >
      <h2>My Skills</h2>
      <Pie data={data} options={options}   />
    </div>
  </section>
  );
}

export default Skills;

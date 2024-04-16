import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Income', 'Outcome'],
  datasets: [
    {
      label: '%',
      data: [66.7, 33.3],
      backgroundColor: [
        'rgb(190, 123, 114)',
        'rgb(255, 235, 178)',

      ],
      borderColor: [
        'rgb(190, 123, 114)',
        'rgb(255, 235, 178)',

      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return (
    <div className='home-bottom-div col-xxl-5 col-xl-7'>
      <Pie data={data} />
    </div>
  )
}

export default PieChart
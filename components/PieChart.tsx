import React, { useState } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PieChartProps } from '@/types/Type';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ array }: PieChartProps) => {

  let sum = 0
  let sumIncome = 0
  let sumOutcome = 0

  array.map(element => {

    if (element.type === "Income") {
      sumIncome += element.money
    }
    else {
      sumOutcome += element.money
    }
    sum += element.money
  })

  const data = {
    labels: ['Income', 'Outcome'],
    datasets: [
      {
        label: '%',
        data: [sumIncome * 100 / sum, sumOutcome * 100 / sum],
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
  return (
    <div className='home-bottom-div col-xxl-5 col-xl-7'>
      <Pie data={data} />
    </div>
  )
}

export default PieChart
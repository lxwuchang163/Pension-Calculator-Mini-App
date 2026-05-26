import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { CalculationResult } from '../utils/regionData';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PensionChartProps {
  result: CalculationResult;
}

export default function PensionChart({ result }: PensionChartProps) {
  const chartData = {
    labels: [
      `基础养老金 ¥${result.basicPension.toLocaleString()} (${((result.basicPension / result.totalPension) * 100).toFixed(1)}%)`,
      `个人账户养老金 ¥${result.personalAccountPension.toLocaleString()} (${((result.personalAccountPension / result.totalPension) * 100).toFixed(1)}%)`,
      `过渡性养老金 ¥${result.transitionPension.toLocaleString()} (${((result.transitionPension / result.totalPension) * 100).toFixed(1)}%)`,
      `过渡性调节金 ¥${result.transitionAdjustmentFund.toLocaleString()} (${((result.transitionAdjustmentFund / result.totalPension) * 100).toFixed(1)}%)`,
      `基本养老金补贴 ¥${result.basicPensionSubsidy.toLocaleString()} (${((result.basicPensionSubsidy / result.totalPension) * 100).toFixed(1)}%)`,
      `其他 ¥${result.other.toLocaleString()} (${((result.other / result.totalPension) * 100).toFixed(1)}%)`
    ],
    datasets: [
      {
        data: [result.basicPension, result.personalAccountPension, result.transitionPension, result.transitionAdjustmentFund, result.basicPensionSubsidy, result.other],
        backgroundColor: ['#FF6B35', '#F7931E', '#FFD700', '#9ACD32', '#20B2AA', '#4169E1'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 15,
          font: { size: 12 },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const value = context.raw;
            const percentage = ((value / result.totalPension) * 100).toFixed(1);
            return `¥${value.toLocaleString()} (${percentage}%)`;
          }
        }
      }
    },
  };

  return (
    <div className="h-80">
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
}

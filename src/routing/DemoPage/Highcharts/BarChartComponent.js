import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart,
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
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle
} from 'chart.js';

const ACTIVE_COLOR = "#1fc76a";

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
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
  SubTitle,
  ChartDataLabels,
);

const BarChartComponent = (props) => {
  const {
    activeColor,
    activeValue,
    chartData,
    labels,
    backgroundColor,
    hoverBackgroundColor,
  } = props;
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          data: chartData,
          categoryPercentage: 1,
          barPercentage: 0.8,
          // maxBarThickness: 6,
          backgroundColor,
          hoverBackgroundColor,
          borderColor: backgroundColor,
          borderWidth: 1
        }],
      },
      options: {
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            display: false,
          },
          x: {
            grid: {
              offset: false,
              color: '#fff',
            },
          }
        },
        plugins: {
          legend: {
            display: false,
          },
          datalabels: {
            align: 'end',
            anchor: 'end',
            color: function(context) {
              return activeColor || ACTIVE_COLOR;
            },
            font: function(context) {
              return {
                size: 14,
                weight: 'bold',
              };
            },
            formatter: function(value, context) {
              const label = context.chart.data.labels[context.dataIndex];
              return label === activeValue ? label : '';
            }
          }
        },
        events: ['load']
      },
      plugins: [ChartDataLabels]
    });
  }, [activeColor, activeValue, backgroundColor, chartData, hoverBackgroundColor, labels]);

  return <canvas style={{ width: '222px!important', height: '150px!important' }} ref={chartRef}></canvas>
}

BarChartComponent.propTypes = {
  activeColor: PropTypes.string,
  activeValue: PropTypes.string,
  chartData: PropTypes.array.isRequired,
  labels: PropTypes.array.isRequired,
  backgroundColor: PropTypes.array.isRequired,
  hoverBackgroundColor: PropTypes.array.isRequired,
}

export default BarChartComponent;

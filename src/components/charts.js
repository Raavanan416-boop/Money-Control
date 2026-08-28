// ============================================
// 💰 Money Control — Charts Component
// ============================================

import { Chart, registerables } from 'chart.js';
import { CHART_COLORS } from '../utils/formatters.js';

// Register all Chart.js components
Chart.register(...registerables);

// Store chart instances for cleanup
const chartInstances = {};

/**
 * Destroy an existing chart instance
 */
function destroyChart(canvasId) {
  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy();
    delete chartInstances[canvasId];
  }
}

/**
 * Get theme-aware colors
 */
function getThemeColors() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  return {
    textColor: isDark ? '#94A3B8' : '#64748B',
    gridColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
    bgColor: isDark ? '#1E2235' : '#FFFFFF'
  };
}

/**
 * Render a doughnut chart for expense categories
 */
export function renderDoughnutChart(canvasId, categories) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  destroyChart(canvasId);

  if (!categories || categories.length === 0) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const { textColor } = getThemeColors();

  const chart = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: categories.map(c => `${c.emoji} ${c.category}`),
      datasets: [{
        data: categories.map(c => c.amount),
        backgroundColor: CHART_COLORS.slice(0, categories.length),
        borderWidth: 0,
        hoverBorderWidth: 2,
        hoverBorderColor: '#fff',
        borderRadius: 4,
        spacing: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '65%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(26, 29, 46, 0.9)',
          titleColor: '#fff',
          bodyColor: '#fff',
          padding: 12,
          cornerRadius: 10,
          titleFont: { size: 13, weight: '600' },
          bodyFont: { size: 12 },
          callbacks: {
            label: function(context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const pct = ((context.parsed / total) * 100).toFixed(1);
              return ` ₹${context.parsed.toLocaleString('en-IN')} (${pct}%)`;
            }
          }
        }
      },
      animation: {
        animateRotate: true,
        duration: 800,
        easing: 'easeOutQuart'
      }
    }
  });

  chartInstances[canvasId] = chart;
  return chart;
}

/**
 * Render a bar chart for income vs expenses
 */
export function renderBarChart(canvasId, labels, incomeData, expenseData) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  destroyChart(canvasId);

  const { textColor, gridColor } = getThemeColors();

  const chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Income',
          data: incomeData,
          backgroundColor: 'rgba(16, 185, 129, 0.8)',
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.6,
          categoryPercentage: 0.7
        },
        {
          label: 'Expenses',
          data: expenseData,
          backgroundColor: 'rgba(239, 68, 68, 0.8)',
          borderRadius: 6,
          borderSkipped: false,
          barPercentage: 0.6,
          categoryPercentage: 0.7
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'top',
          labels: {
            color: textColor,
            padding: 16,
            usePointStyle: true,
            pointStyle: 'rectRounded',
            font: { size: 12, weight: '500' }
          }
        },
        tooltip: {
          backgroundColor: 'rgba(26, 29, 46, 0.9)',
          titleColor: '#fff',
          bodyColor: '#fff',
          padding: 12,
          cornerRadius: 10,
          callbacks: {
            label: function(context) {
              return ` ${context.dataset.label}: ₹${context.parsed.y.toLocaleString('en-IN')}`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: textColor, font: { size: 11 } }
        },
        y: {
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            font: { size: 11 },
            callback: function(value) {
              return '₹' + value.toLocaleString('en-IN');
            }
          },
          beginAtZero: true
        }
      },
      animation: {
        duration: 800,
        easing: 'easeOutQuart'
      }
    }
  });

  chartInstances[canvasId] = chart;
  return chart;
}

/**
 * Cleanup all chart instances
 */
export function destroyAllCharts() {
  Object.keys(chartInstances).forEach(id => {
    destroyChart(id);
  });
}

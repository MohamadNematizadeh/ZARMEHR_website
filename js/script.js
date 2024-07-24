// داده های نمودار را تعریف کنید
const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  datasets: [{
      label: 'ولتاژ',
      data: [75, 75, 75, 75, 75, 75, 75, 75, 75, 75],
      fill: false,
      borderColor: 'rgb(255, 99, 132)',
      pointRadius: 5,
      pointHoverRadius: 5,
      pointBorderColor: 'rgb(255, 99, 132)',
      pointBorderWidth: 2,
      pointBackgroundColor: 'white',
  }, {
      label: 'جریان',
      data: [23, 23, 23, 23, 23, 23, 23, 23, 23, 23],
      fill: false,
      borderColor: 'rgb(54, 162, 235)',
      pointRadius: 5,
      pointHoverRadius: 5,
      pointBorderColor: 'rgb(54, 162, 235)',
      pointBorderWidth: 2,
      pointBackgroundColor: 'white',
  }, {
      label: 'توان',
      data: [75, 75, 75, 75, 75],
      fill: false,
      borderColor: 'rgb(255, 205, 86)',
      pointRadius: 5,
      pointHoverRadius: 5,
      pointBorderColor: 'rgb(255, 205, 86)',
      pointBorderWidth: 2,
      pointBackgroundColor: 'white',
  }]
};

// نمودار را با استفاده از Chart.js ایجاد کنید
const ctx = document.getElementById('lineChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});

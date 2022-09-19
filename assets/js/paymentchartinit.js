// rd Payments
const dates = ['2022-09-10', '2022-09-11', '2022-09-12', '2022-09-13', '2022-09-14', '2022-09-15', '2022-09-16'];
const datapoints = [12, 19, 3, 5, 2, 3, 5];
const faileddatapoints = [12, 2, 3, 5, 2, 4, 1];
const ctx = document.getElementById('numofpayments').getContext('2d');
const myChart2 = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: dates,
    datasets: [{
        label: 'Online payment',
        data: datapoints,
        backgroundColor: 'rgba(250, 100, 0, 0.5)',
        borderColor: 'rgba(250, 100, 0, 1)',
        borderRadius: 4,
        borderSkipped: false,
        //barPercentage: 0.5,
        padding: 0,
        autoPadding: false,
        categoryPercentage: 0.5,
        borderWidth: 1
      },
      {
        label: 'Offline payment',
        data: faileddatapoints,
        backgroundColor: 'rgba(0, 130, 179, 0.5)',
        borderColor: 'rgba(0, 130, 179, 1)',
        borderRadius: 4,
        borderSkipped: false,
        //barPercentage: 0.5,
        padding: 0,
        autoPadding: false,
        categoryPercentage: 0.5,
        borderWidth: 1
      },
      {
        label: 'Ecs',
        data: faileddatapoints,
       backgroundColor: 'rgba(153, 102, 255, 0.2)',
         borderColor: 'rgba(153, 102, 255, 1)',
        borderRadius: 4,
        borderSkipped: false,
        //barPercentage: 0.5,
        padding: 0,
        autoPadding: false,
        categoryPercentage: 0.5,
        borderWidth: 1
      }
    ]
  },
  options: {
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        }

      },
      y: {
        grid: {
          display: false
        },
        beginAtZero: true
      }
    },
    plugins: {
    
      datalabels: {
        //labels: 'y',
        anchor: 'end',
        align: 'top',
        font: {
          weight: 'bold'
        }
      }
    }
  },
  plugins: [ChartDataLabels]
});


$(document).ready(function () {
  const nrdhtml = document.getElementById('numberofsuccessptm');

  let sum = 0;
  for (let i = 0; i < datapoints.length; i++) {
    sum += datapoints[i];
  }
  nrdhtml.innerHTML = sum
})

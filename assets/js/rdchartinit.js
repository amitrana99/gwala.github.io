 


// ecs and rozarpay
const ecsdates = ['2022-09-10', '2022-09-11', '2022-09-12', '2022-09-13', '2022-09-14', '2022-09-15', '2022-09-16'];
const ecsdatapoints = [12, 19, 3, 5, 2, 3, 5];
const ctx2 = document.getElementById('ecsrozar').getContext('2d');
const myChart3 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ecsdates,
    datasets: [{
        label: 'Sucess payment',
        data: ecsdatapoints,
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
        label: 'Failed payment',
        data: ecsdatapoints,
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
        label: 'Total payment',
        data: ecsdatapoints,
        backgroundColor:  'rgba(153, 102, 255, 0.2)',
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
      title: {
        display: false,
      },
      legend: false,
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
  const nrdhtml = document.getElementById('numberofecsptm');

  let sum = 0;
  for (let i = 0; i < ecsdatapoints.length; i++) {
    sum += ecsdatapoints[i];
  }
  nrdhtml.innerHTML = sum
})








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
        label: 'Sucess payment',
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
        label: 'Failed payment',
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


function filterdata() {
  let sum = 0;
  const dates2 = [...dates];
  const startdate = document.getElementById('startdate');
  const enddate = document.getElementById('enddate');
  const indexstartdate = dates2.indexOf(startdate.value);
  const indexenddate = dates2.indexOf(enddate.value);
  const filterDate = dates2.slice(indexstartdate, indexenddate + 1);
  const nrdhtml = document.getElementById('numberofsuccessptm');

  myChart2.config.data.labels = filterDate;

  const datapoints2 = [...datapoints];
  const filterDatapoint55 = datapoints2.slice(indexstartdate, indexenddate + 1);

  for (let i = 0; i < filterDatapoint55.length; i++) {
    sum += filterDatapoint55[i];
  }
  nrdhtml.innerHTML = sum;

  const filterDatapoints = datapoints2.slice(indexstartdate, indexenddate + 1);
  myChart2.config.data.datasets[0].data = filterDatapoints;

  myChart2.update();

}

$(document).ready(function () {
  const nrdhtml = document.getElementById('numberofsuccessptm');

  let sum = 0;
  for (let i = 0; i < datapoints.length; i++) {
    sum += datapoints[i];
  }
  nrdhtml.innerHTML = sum
})


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


function filterdataecs() {
  let sum = 0;
  const ecsdates2 = [...ecsdates];
  const startdate = document.getElementById('startdate');
  const enddate = document.getElementById('enddate');
  const indexstartdate = ecsdates2.indexOf(startdate.value);
  const indexenddate = ecsdates2.indexOf(enddate.value);
  const filterDate = ecsdates2.slice(indexstartdate, indexenddate + 1);
  const nrdhtml = document.getElementById('numberofecsptm');

  myChart3.config.data.labels = filterDate;

  const ecsdatapoints2 = [...ecsdatapoints];
  const filterDatapoint55 = ecsdatapoints2.slice(indexstartdate, indexenddate + 1);

  for (let i = 0; i < filterDatapoint55.length; i++) {
    sum += filterDatapoint55[i];
  }
  nrdhtml.innerHTML = sum;

  const filterDatapoints = ecsdatapoints2.slice(indexstartdate, indexenddate + 1);
  myChart3.config.data.datasets[0].data = filterDatapoints;

  myChart3.update();

}

$(document).ready(function () {
  const nrdhtml = document.getElementById('numberofecsptm');

  let sum = 0;
  for (let i = 0; i < ecsdatapoints.length; i++) {
    sum += ecsdatapoints[i];
  }
  nrdhtml.innerHTML = sum
})

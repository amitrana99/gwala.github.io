const day = [{
    x: Date.parse('2021-11-01 00:00:00 GMT+05:30'),
    y: 10000
  },
  {
    x: Date.parse('2021-11-02 00:00:00 GMT+05:30'),
    y: 5000
  },
  {
    x: Date.parse('2021-11-03 00:00:00 GMT+05:30'),
    y: 15000
  },
  {
    x: Date.parse('2021-11-04 00:00:00 GMT+05:30'),
    y: 8000
  },
  {
    x: Date.parse('2021-11-05 00:00:00 GMT+05:30'),
    y: 7000
  },
  {
    x: Date.parse('2021-11-06 00:00:00 GMT+05:30'),
    y: 9000
  },
  {
    x: Date.parse('2021-11-07 00:00:00 GMT+05:30'),
    y: 6000
  }
];

const intday = [{
    x: Date.parse('2021-11-01 00:00:00 GMT+05:30'),
    y: 8000
  },
  {
    x: Date.parse('2021-11-02 00:00:00 GMT+05:30'),
    y: 9000
  },
  {
    x: Date.parse('2021-11-03 00:00:00 GMT+05:30'),
    y: 10000
  },
  {
    x: Date.parse('2021-11-04 00:00:00 GMT+05:30'),
    y: 7000
  },
  {
    x: Date.parse('2021-11-05 00:00:00 GMT+05:30'),
    y: 6000
  },
  {
    x: Date.parse('2021-11-06 00:00:00 GMT+05:30'),
    y: 12000
  },
  {
    x: Date.parse('2021-11-07 00:00:00 GMT+05:30'),
    y: 11000
  }
];


const month = [{
    x: Date.parse('2021-08-01 00:00:00 GMT+05:30'),
    y: 4000
  },
  {
    x: Date.parse('2021-09-01 00:00:00 GMT+05:30'),
    y: 6000
  },
  {
    x: Date.parse('2021-10-01 00:00:00 GMT+05:30'),
    y: 8000
  },
  {
    x: Date.parse('2021-11-01 00:00:00 GMT+05:30'),
    y: 10000
  },
  {
    x: Date.parse('2021-12-01 00:00:00 GMT+05:30'),
    y: 9000
  },
  {
    x: Date.parse('2022-01-01 00:00:00 GMT+05:30'),
    y: 5000
  },

];

const intmonth = [{
    x: Date.parse('2021-08-01 00:00:00 GMT+05:30'),
    y: 8000
  },
  {
    x: Date.parse('2021-09-01 00:00:00 GMT+05:30'),
    y: 7000
  },
  {
    x: Date.parse('2021-10-01 00:00:00 GMT+05:30'),
    y: 9000
  },
  {
    x: Date.parse('2021-11-01 00:00:00 GMT+05:30'),
    y: 10000
  },
  {
    x: Date.parse('2021-12-01 00:00:00 GMT+05:30'),
    y: 6000
  },
  {
    x: Date.parse('2022-01-01 00:00:00 GMT+05:30'),
    y: 4000
  },

];

// setup 
const data = {
  // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
      data: day,
	  label: "Domestic",
      backgroundColor: 'rgba(255, 205, 86, 0.5)',
      borderColor: 'rgba(255, 205, 86, 1)',
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
      //barPercentage: 0.5,
      padding: 0,
      autoPadding: false,
      categoryPercentage: 0.5
    },
    {
      data: intday,
	  label: "International",
      backgroundColor: 'rgba(250, 100, 0, 0.5)',
      borderColor: 'rgba(250, 100, 0, 1)',
      borderWidth: 1,
      borderRadius: 4,
      borderSkipped: false,
      //barPercentage: 0.5,
      padding: 0,
      autoPadding: false,
      categoryPercentage: 0.5
    }
  ]
};

// config 
const config = {
  type: 'bar',
  data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: false,
      },
     
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        },
        type: 'time',
        time: {
          unit: 'day'
        }
      },
      y: {
        display: false,
        beginAtZero: true,
        grid: {
          display: false
        }
      }
    },

  },

};

// render init block
const domesticChart = new Chart(
  document.getElementById('domesticchart'),
  config
);

function timeframe(period) {
  if (period.value == 'day') {
    domesticChart.config.options.scales.x.time.unit = period.value;
    domesticChart.config.data.datasets[0].data = day;
    domesticChart.config.data.datasets[1].data = intday;
  }

  if (period.value == 'month') {
    domesticChart.config.options.scales.x.time.unit = period.value;
    domesticChart.config.data.datasets[0].data = month;
    domesticChart.config.data.datasets[1].data = intmonth;
  }


  domesticChart.update();
}


/// pie chart
// <block:setup:1>
const newrddata = {
  labels: [

    'Domestic',
    'International'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [500, 200 ],
    backgroundColor: [

      'rgb(255, 100, 0)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
// </block:setup>

// <block:config:0>
const rdconfig = {
  options: {
    plugins: {
      legend: false,
    },
  },
  type: 'pie',
  data: newrddata,
};
// </block:config>

const newrdChart = new Chart(
  document.getElementById('newrdcchart'),
  rdconfig
);

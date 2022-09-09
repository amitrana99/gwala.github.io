const day = [{
    x: Date.parse('2021-11-01 00:00:00 GMT+05:30'),
    y: 100
  },
  {
    x: Date.parse('2021-11-02 00:00:00 GMT+05:30'),
    y: 50
  },
  {
    x: Date.parse('2021-11-03 00:00:00 GMT+05:30'),
    y: 150
  },
  {
    x: Date.parse('2021-11-04 00:00:00 GMT+05:30'),
    y: 80
  },
  {
    x: Date.parse('2021-11-05 00:00:00 GMT+05:30'),
    y: 70
  },
  {
    x: Date.parse('2021-11-06 00:00:00 GMT+05:30'),
    y: 90
  },
  {
    x: Date.parse('2021-11-07 00:00:00 GMT+05:30'),
    y: 60
  }
];

const intday = [{
    x: Date.parse('2021-11-01 00:00:00 GMT+05:30'),
    y: 80
  },
  {
    x: Date.parse('2021-11-02 00:00:00 GMT+05:30'),
    y: 90
  },
  {
    x: Date.parse('2021-11-03 00:00:00 GMT+05:30'),
    y: 100
  },
  {
    x: Date.parse('2021-11-04 00:00:00 GMT+05:30'),
    y: 70
  },
  {
    x: Date.parse('2021-11-05 00:00:00 GMT+05:30'),
    y: 60
  },
  {
    x: Date.parse('2021-11-06 00:00:00 GMT+05:30'),
    y: 120
  },
  {
    x: Date.parse('2021-11-07 00:00:00 GMT+05:30'),
    y: 110
  }
];


const month = [{
    x: Date.parse('2021-08-01 00:00:00 GMT+05:30'),
    y: 400
  },
  {
    x: Date.parse('2021-09-01 00:00:00 GMT+05:30'),
    y: 600
  },
  {
    x: Date.parse('2021-10-01 00:00:00 GMT+05:30'),
    y: 800
  },
  {
    x: Date.parse('2021-11-01 00:00:00 GMT+05:30'),
    y: 1000
  },
  {
    x: Date.parse('2021-12-01 00:00:00 GMT+05:30'),
    y: 900
  },
  {
    x: Date.parse('2022-01-01 00:00:00 GMT+05:30'),
    y: 500
  },

];

const intmonth = [{
    x: Date.parse('2021-08-01 00:00:00 GMT+05:30'),
    y: 800
  },
  {
    x: Date.parse('2021-09-01 00:00:00 GMT+05:30'),
    y: 700
  },
  {
    x: Date.parse('2021-10-01 00:00:00 GMT+05:30'),
    y: 900
  },
  {
    x: Date.parse('2021-11-01 00:00:00 GMT+05:30'),
    y: 1000
  },
  {
    x: Date.parse('2021-12-01 00:00:00 GMT+05:30'),
    y: 600
  },
  {
    x: Date.parse('2022-01-01 00:00:00 GMT+05:30'),
    y: 400
  },

];

// setup 
const data = {
  //labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [{
      data: day,
      label: "Domestic",
      backgroundColor: 'rgba(0, 130, 179, 0.5)',
      borderColor: 'rgba(0, 130, 179, 1)',
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
        beginAtZero: true,
        grid: {
          display: false
        }
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
        formatter: (val) => {
          return val.y
        },
        font: {
          weight: 'bold'
        }
      }
    }

  },
  plugins: [ChartDataLabels]

};

// render init block
const contactsbarchart = new Chart(
  document.getElementById('contactsbarchart'),
  config
);

function timeframe(period) {
  if (period.value == 'day') {
    contactsbarchart.config.options.scales.x.time.unit = period.value;
    contactsbarchart.config.data.datasets[0].data = day;
    contactsbarchart.config.data.datasets[1].data = intday;
  }

  if (period.value == 'month') {
    contactsbarchart.config.options.scales.x.time.unit = period.value;
    contactsbarchart.config.data.datasets[0].data = month;
    contactsbarchart.config.data.datasets[1].data = intmonth;
  }


  contactsbarchart.update();
}


/// RD chart
// <block:setup:1>

// </block:setup>

// <block:config:0>

// </block:config>


/// payment chart

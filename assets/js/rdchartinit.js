 // setup 
 const data = {
   labels: ['Active Razorpay RD', 'Active Axis RD'],
   datasets: [{
     label: 'Active',
     data: [18, 12],
     backgroundColor: [
       'rgba(255, 159, 64, 0.2)',
       'rgba(54, 162, 235, 0.2)',

     ],
     borderColor: [
       'rgba(255, 159, 64, 1)',
       'rgba(54, 162, 235, 1)',

     ],
     borderWidth: 1
   }]
 };

 // config 
 const config = {
   type: 'pie',
   data,
   options: {

   },
   plugins: [ChartDataLabels]

 };

 // render init block
 const myChart = new Chart(
   document.getElementById('activerdpie'),
   config
 );


 const dates = ['2022-09-10', '2022-09-11', '2022-09-12', '2022-09-13', '2022-09-14', '2022-09-15', '2022-09-16'];
 const datapoints = [12, 19, 3, 5, 2, 3, 5];
 const ctx = document.getElementById('numofrd').getContext('2d');
 const myChart2 = new Chart(ctx, {
   type: 'bar',
   data: {
     labels: dates,
     datasets: [{
       label: '# of Votes',
       data: datapoints,
       backgroundColor: [

         'rgba(255, 159, 64, 0.2)'
       ],
       borderColor: [

         'rgba(255, 159, 64, 1)'

       ],
       borderWidth: 1
     }]
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
   const nrdhtml = document.getElementById('numberofrdtotal');

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
   const nrdhtml = document.getElementById('numberofrdtotal');

   let sum = 0;
   for (let i = 0; i < datapoints.length; i++) {
     sum += datapoints[i];
   }
   nrdhtml.innerHTML = sum
 })

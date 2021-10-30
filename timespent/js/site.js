var data = [
  {
    x: ['18+', '18-34', '35-49', '50-64', '65+', 'Average Total'],
    y: [4.2, 2, 3.4, 5.4, 6.6, 2],
    type: 'bar'
  }
];

Plotly.newPlot('time', data);

function showDiv() {
   document.getElementById('hours').style.display = "block";
}

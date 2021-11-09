//@Brooke Haven, Matthew Lencioni, Carlos Salazar, MAtthew Habrial
//November 10th 2021

//Bar Chart hrs and age
var data = [
  {
    x: ['18+', '18-34', '35-49', '50-64', '65+', 'Average Total'],
    y: [4.2, 2, 3.4, 5.4, 6.6, 2],
    type: 'bar'
  }
];
//output
Plotly.newPlot('time', data);



//Button reveal
function showDiv() {
   document.getElementById('hours').style.display = "block";
};
//Button Hide
function showDivh() {
   document.getElementById('hours').style.display = "none";
};
//Button reveal 2
function showDiv2() {
   document.getElementById('covid').style.display = "block";
};
//Button hide 2
function showDiv2h() {
   document.getElementById('covid').style.display = "none";
};




//bubble chart
Highcharts.chart('container', {
  chart: {
    type: 'packedbubble',
    height: '100%',
    events: {
      render: function() {
        const chart = this;

        chart.series.forEach(series => {
          series.points.forEach(point => {

            if (point.graphic.width > 1) {
              if (point.dataLabel.width > point.graphic.width) {
                let indic = (
                    (point.dataLabel.width - point.graphic.width) /
                    point.dataLabel.width
                  ),
                  text = point.series.name,
                  textLen = text.length,
                  maxTextLen = Math.floor(textLen * (1 - indic)),
                  newText,
                  dotted,
                  substringLen;

                dotted = maxTextLen > 2 ? '..' : '.';
                substringLen = maxTextLen > 2 ? 2 : 1;
                newText = text.substring(0, maxTextLen - substringLen) + dotted;

                point.dataLabel.text.element.innerHTML =
                  '<tspan>' + newText + '</tspan>';

                point.dataLabel.text.translate(
                  (point.dataLabel.width - point.graphic.width) / 2,
                  0
                );
              }
            }

          });
        })
      }
    }
  },
  //Title Text
  title: {
    text: ''
  },
  tooltip: {
    useHTML: true,
    pointFormat: '<b>{point.name}:</b> {point.value}'
  },
  plotOptions: {
    packedbubble: {
      minSize: '30%',
      maxSize: '80%',
      layoutAlgorithm: {
        splitSeries: false,
        gravitationalConstant: 0.02
      },
      dataLabels: {
        enabled: true,
        format: '{series.name}',
        style: {
          color: 'black',
          textOutline: 'none',
          fontWeight: 'normal'
        }
      }
    }
  },
  //Data input for bubbles
  series: [{
    name: 'Disney Plus',
    data: [{
      name: "Disney Plus",
      value: 4
    }]
  }, {
    name: 'Amazon Prime ',
    data: [{
      name: "Amazon Prime",
      value: 8
    }]
  }, {
    name: 'Hulu ',
    data: [{
      name: "Hulu",
      value: 11
    }]
  }, {
    name: 'Youtube ',
    data: [{
      name: "Youtube",
      value: 20
    }]
  }, {
    name: 'Other ',
    data: [{
      name: "Other ",
      value: 23
    }]
  }, {
    name: 'Netflix ',
    data: [{
      name: "Netflix",
      value: 34
    }, ]
  }]
});

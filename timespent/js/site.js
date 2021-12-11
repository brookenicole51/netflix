//@Brooke Haven, Matthew Lencioni, Carlos Salazar, MAtthew Habrial
//November 10th 2021

//canvas clock
let canvas, ctx;
function Vector (magnitude, angle) {
    var m, a;

    this.getX = function () {
        return m * Math.cos(a);
    };

    this.setX = function (x) {
        var y = m * Math.sin(a);
        m = Math.sqrt((x * x) + (y * y));
        a = Math.atan2(y, x);
    };

    this.getY = function () {
        return m * Math.sin(a);
    };

    this.setY = function (y) {
        var x = m * Math.cos(a);
        m = Math.sqrt((x * x) + (y * y));
        a = Math.atan2(y, x);
    };

    this.getMag = function () {
        return m;
    };

    this.setMag = function (magnitude) {
        m = magnitude;
    };

    this.getAngle = function () {
        return a;
    };

    this.setAngle = function (angle) {
        a = angle;
    };

    this.add = function (v) {
        return Vector.add(this, v);
    };

    this.subtract = function (v) {
        return Vector.subtract(this, v);
    };

    this.setMag(magnitude);
    this.setAngle(angle);
}
//Vector Draw
Vector.rectangular = function (x, y) {
    var m = Math.sqrt(x * x + y * y),
        a = Math.atan2(y, x);
    return new Vector(m, a);
};

Vector.polar = function (m, a) {
    return new Vector(m, a);
};

Vector.add = function (v1, v2) {
    return Vector.rectangular(v1.getX() + v2.getX(), v1.getY() + v2.getY());
};

Vector.subtract = function (v1, v2) {
    return Vector.rectangular(v1.getX() - v2.getX(), v1.getY() - v2.getY());
};
function draw () {
    let time = (function () {
            let midnight = new Date();
            midnight.setHours(0);
            midnight.setMinutes(0);
            midnight.setSeconds(0);
            midnight.setMilliseconds(0);
            return Date.now() - midnight.getTime();
        })(),
        hours = time / (60 * 60 * 1000),
        minutes = hours * 60 % 60,
        seconds = minutes * 60 % 60,
        c = {x: canvas.width / 2, y: canvas.height / 2};

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.lineCap = 'round';

    secondHand();
    minuteHand();
    hourHand();
    face();

    function face () {
        // Border
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.arc(c.x, c.y, 140, 0, Math.PI * 2);
        ctx.stroke();

        // Dashes
        ctx.lineWidth = 3;
        for (let i = 0; i < 60; i++) {
            let r = 135,
                l = 5;
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.25)';
            if (i % 5 === 0)
                r -= l,
                l *= 2,
                ctx.strokeStyle = 'rgba(0, 0, 0, 0.5)';
            let v = new Vector(r, Math.PI * 2 * (i / 60) - Math.PI / 2);
            ctx.beginPath();
            ctx.moveTo(v.getX() + c.x, v.getY() + c.y);
            v.setMag(r + l);
            ctx.lineTo(v.getX() + c.x, v.getY() + c.y);
            ctx.stroke();
        }

        // Numbers
        ctx.font = '20px Noto Sans';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 1; i <= 12; i++) {
            let v = new Vector(113, Math.PI * 2 * (i / 12) - Math.PI / 2);
            ctx.fillText(i, v.getX() + c.x, v.getY() + c.y);
        }

        // Center button
        ctx.beginPath();
        ctx.arc(c.x, c.y, 3.75, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.5;
        ctx.fill();
        ctx.stroke();
    }

    function secondHand () {
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        let a = Math.PI * 2 * (seconds / 60) - Math.PI / 2;
        let v = new Vector(95, a);
        let v2 = new Vector(-20, a);
        ctx.moveTo(v2.getX() + c.x, v2.getY() + c.y);
        ctx.lineTo(v.getX() + c.x, v.getY() + c.y);
        ctx.stroke();
    }

    function minuteHand () {
        ctx.lineWidth = 6;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        let a = Math.PI * 2 * (minutes / 60) - Math.PI / 2;
        let v = new Vector(95, a);
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(v.getX() + c.x, v.getY() + c.y);
        ctx.stroke();
    }

    function hourHand () {
        ctx.lineWidth = 6;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        let a = Math.PI * 2 * (hours / 12) - Math.PI / 2;
        let v = new Vector(60, a);
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(v.getX() + c.x, v.getY() + c.y);
        ctx.stroke();
    }
}

function init () {
    canvas = document.getElementById('clock');
    canvas.width = canvas.height = 300;
    ctx = canvas.getContext('2d');

    setInterval(draw, 10);
}

init();

//Reveal on scroll
ScrollReveal().reveal('div');


//Bar Chart hrs and age
var data = [
  {
    x: ['18+', '18-34', '35-49', '50-64', '65+', 'Average Total'],
    y: [4.2, 2, 3.4, 5.4, 6.6, 2],
    type: 'bar',
    marker: {
     color: '#141414'
      }
  }
];
var layout = {
   paper_bgcolor: "rgba(0,0,0,0)",
   plot_bgcolor: "rgba(0,0,0,0)",
   plot_barcolor: "rgba(0,0,0,0)",

}


//output
Plotly.newPlot('time', data, layout);



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
    backgroundColor: '#131314',
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
          color: "#D3D3D3",
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
      value: 4,
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


$(document).ready(function(){
    $('#rid').hover(function() {
        $("#rid").addClass('transition');

    }, function() {
        $("#rid").removeClass('transition');
    });
});

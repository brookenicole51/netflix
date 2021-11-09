
CanvasJS.addColorSet(
  "brookeSet",
  [
    //colorSet Array
    "#1E1E1E",
    "#F04D4D",
    "#313131",
    "#D3423D",
    "#393D42",
    "#B23028",
    "#364651",
    "#99180D",
    "#42565E",
    "#65130F",
  ]
);

var options = {
  colorSet: "brookeSet",
	animationEnabled: true,
  backgroundColor: "#141414",
	title: {
		text: "Top Ten Netflix TV Shows",
      fontColor: "#dc143c",
	},
	data: [{
		type: "doughnut",
		innerRadius: "40%",
		showInLegend: true,
		legendText: "{label}",
		indexLabel: "{label}: #percent%",
		dataPoints: [
			{ label: "Bridgerton", y: 82000000 },
			{ label: "The Witcher", y: 76000000 },
			{ label: "Maid", y: 67000000 },
			{ label: "Sex/Life", y: 67000000 },
			{ label: "Stranger Things", y: 64000000 },
      { label: "Tiger King", y: 64000000 },
      { label: "The Queen's Gambit", y: 62000000 },
      { label: "Sweet Tooth", y: 60000000 },
      { label: "Emily in Paris", y: 58000000 },
      { label: "Fate: The Winx Saga", y: 57000000 },
		]
	}]
};

$("#chartContainer").CanvasJSChart(options);

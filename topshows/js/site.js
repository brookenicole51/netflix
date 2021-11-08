window.onload = function () {
  CanvasJS.addColorSet("greenShades",
                [//colorSet Array
                "#828282",
                "#8a8a8a",
                "#949494",
                "#9c9c9c",
                "#a3a3a3",
                "#adadad",
                "#b5b5b5",
                "#bdbdbd",
                "#dcdcdc",
              ]);

var options = {
  colorSet: "greenShades",
	animationEnabled: true,
	title: {
		text: "Top Ten Netflix TV Shows",
	},
	data: [{
		type: "doughnut",
		innerRadius: "50%",
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
}

window.onload = function () {

var options = {
	animationEnabled: true,
	title: {
		text: "Top Ten Netflix TV Shows"
	},
	data: [{
		type: "doughnut",
		innerRadius: "50%",
		showInLegend: true,
		legendText: "{label}",
		indexLabel: "{label}: #percent%",
		dataPoints: [
			{ label: "Bridgerton", y: 82 },
			{ label: "The Witcher", y: 76 },
			{ label: "Maid", y: 67 },
			{ label: "Sex/Life", y: 67 },
			{ label: "Stranger Things", y: 64 },
      { label: "Tiger King", y: 64 },
      { label: "The Queen's Gambit", y: 62 },
      { label: "Sweet Tooth", y: 60 },
      { label: "Emily in Paris", y: 58 },
      { label: "Fate: The Winx Saga", y: 57 },
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}

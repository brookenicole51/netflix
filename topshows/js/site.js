
CanvasJS.addColorSet(
  "brookeSet",
  [
    //colorSet Array
    "#510000",
    "#630000",
    "#760000",
    "#890000",
    "#9c0000",
    "#b00000",
    "#c40000",
    "#d70000",
    "#eb0000",
    "#ff0000",
  ]
);

var options = {
  colorSet: "brookeSet",
	animationEnabled: true,
  backgroundColor: "#131314",
//*	title: {
//		text: "TOP TEN NETFLIX TV SHOWS",
//    fontFamily: "impact",
//    fontColor: "#E50914",
//	 },
  legend: {
    fontColor: "#D3D3D3",
    horizontalAlign: "center",
     },
	data: [{
		type: "doughnut",
		innerRadius: "40%",
		showInLegend: true,
		legendText: "{label}",
		indexLabel: "{label}: #percent%",
      indexLabelFontColor: "#D3D3D3",
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

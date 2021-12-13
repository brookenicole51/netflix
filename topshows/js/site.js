
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


$('#term').focus(function(){
      var full = $("#poster").has("img").length ? true : false;
      if(full == false){
         $('#poster').empty();
      }
   });

   var getPoster = function(){

        var film = $('#term').val();

         if(film == ''){

            $('#poster').html('<div class="alert"><strong>Oops!</strong> Try adding something into the search field.</div>');

         } else {

            $('#poster').html('<div class="alert"><strong>Loading...</strong></div>');

            $.getJSON("https://api.themoviedb.org/3/search/tv?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=" + film + "&callback=?", function(json) {
               if (json != "Nothing found."){
console.log(json);
                     $('#poster').html('<p>Your search found: <strong>' + json.results[0].title + '</strong></p><img src=\"http://image.tmdb.org/t/p/w500/' + json.results[0].poster_path + '\" class=\"img-responsive\" >');
                  } else {
                     $.getJSON("https://api.themoviedb.org/3/search/tv?api_key=15d2ea6d0dc1d476efbca3eba2b9bbfb&query=goonies&callback=?", function(json) {

                       console.log(json);
                        $('#poster').html('<div class="alert"><p>We\'re afraid nothing was found for that search.</p></div><p>Perhaps you were looking for The Goonies?</p><img id="thePoster" src="http://image.tmdb.org/t/p/w500/' + json[0].poster_path + ' class="img-responsive" />');
                     });
                  }
             });

          }

        return false;
   }

   $('#search').click(getPoster);
   $('#term').keyup(function(event){
       if(event.keyCode == 13){
           getPoster();
       }
   });

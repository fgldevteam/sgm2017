var data = [
		{
			"team": "Allens Avengers",
			"score": "0"
		},
		{
			"team": "Bayes Bulldogs",
			"score": "0"
		},		
		{
			"team": "Bergens Bison",
			"score": "0"
		},
		{
			"team": "Bergs Barracudas",
			"score": "0"
		},
		{
			"team": "Braunds Beast",
			"score": "0"
		},
		{
			"team": "Conways Carnivores",
			"score": "0"
		},
		{
			"team": "Crouters Cannibals",
			"score": "0"
		},
		{
			"team": "Dekkers Dragons",
			"score": "0"
		},		
		{
			"team": "Ehrlicks Enforcers",
			"score": "0"
		},
		{
			"team": "Friesens Fugitives",
			"score": "0"
		},
		{
			"team": "Granges Gladiators",
			"score": "0"
		},
		{
			"team": "Huethers Hitmen",
			"score": "0"
		},
		{
			"team": "Jolys Jaguars",
			"score": "0"
		},
		{
			"team": "Kotsopoulos Cobras",
			"score": "0"
		},		
		{
			"team": "Laubers Longhorns",
			"score": "0"
		},
		{
			"team": "Legomskis Lumberjacks",
			"score": "0"
		},
		{
			"team": "MacKinnons Mammoths",
			"score": "0"
		},
		{
			"team": "McColgans Marauders",
			"score": "0"
		},
		{
			"team": "McEacherns Mustangs",
			"score": "0"
		},
		{
			"team": "Owens Owls",
			"score": "0"
		},
		{
			"team": "Philips Phoenix",
			"score": "0"
		},
		{
			"team": "Rangers Rampage",
			"score": "0"
		},
		{
			"team": "Reynolds Rhinos",
			"score": "0"
		},
		{
			"team": "Salewskis Swarm",
			"score": "0"
		},
		{
			"team": "Selfridges Scorpions",
			"score": "0"
		},
		{
			"team": "Smiths Samurai",
			"score": "0"
		},
		{
			"team": "Toerings Tigers",
			"score": "0"
		},
		{
			"team": "Van De Wals Vipers",
			"score": "0"
		},							
];

//console.log(data);

$(function() {
    
    showResults();

});


function showResults () {

	var sorted_scores=[];

	for(a in data){
		sorted_scores.push([data[a].team,data[a].score])
	}

	sorted_scores.sort(function(a,b){return b[1] - a[1]});

	var half = Math.round( (sorted_scores.length /2) );
    var col1 = '';
    var col2 = '';
    var team = '';
    var score = '';

	for(var a=0,b;b=sorted_scores[a];a++){
		team = b[0];
		score = b[1];

		if(score == ""){ 
			score = 0;
		}

		assembled_score = "";
		var score_parts = String(score).split("");

		if(score_parts.length < 2){
			assembled_score += "<span class='score-panel'>&nbsp;&nbsp;</span>";
		}

		score_parts.forEach(function(part){
			assembled_score += "<span class='score-panel'>"+part+"</span>";
		});

		if(half > a){
			col1 += '<div class="teamAndScore"><div class="team">'+team+'</div><div class="score">'+assembled_score+'</div></div>';	
		} else {
			col2 += '<div class="teamAndScore"><div class="team">'+team+'</div><div class="score">'+assembled_score+'</div></div>';	 
		}
    }
    $('#scores_col1').html(col1);
    $('#scores_col2').html(col2);
}
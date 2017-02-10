var data = [
		{
			"team": "Allens Avengers",
			"score": "85"
		},
		{
			"team": "Bayes Bulldogs",
			"score": "12"
		},		
		{
			"team": "Bergens Bison",
			"score": "12"
		},
		{
			"team": "Bergs Barracudas",
			"score": "12"
		},
		{
			"team": "Braunds Beast",
			"score": "12"
		},
		{
			"team": "Conways Carnivores",
			"score": "12"
		},
		{
			"team": "Crouters Cannibals",
			"score": "12"
		},
		{
			"team": "Dekkers Dragons",
			"score": "12"
		},		
		{
			"team": "Ehrlicks Enforcers",
			"score": "12362"
		},
		{
			"team": "Friesens Fugitives",
			"score": "12"
		},
		{
			"team": "Granges Gladiators",
			"score": "12"
		},
		{
			"team": "Huethers Hitmen",
			"score": "70"
		},
		{
			"team": "Jolys Jaguars",
			"score": "12"
		},
		{
			"team": "Kotsopoulos Cobras",
			"score": "12"
		},		
		{
			"team": "Laubers Longhorns",
			"score": "12"
		},
		{
			"team": "Legomskis Lumberjacks",
			"score": "12345"
		},
		{
			"team": "MacKinnons Mammoths",
			"score": "12345"
		},
		{
			"team": "McColgans Marauders",
			"score": "12"
		},
		{
			"team": "McEacherns Mustangs",
			"score": "12"
		},
		{
			"team": "Owens Owls",
			"score": "12"
		},
		{
			"team": "Philips Phoenix",
			"score": ""
		},
		{
			"team": "Rangers Rampage",
			"score": "10"
		},
		{
			"team": "Reynolds Rhinos",
			"score": "17"
		},
		{
			"team": "Salewskis Swarm",
			"score": ""
		},
		{
			"team": "Selfridges Scorpions",
			"score": ""
		},
		{
			"team": "Smiths Samurai",
			"score": ""
		},
		{
			"team": "Toerings Tigers",
			"score": ""
		},
		{
			"team": "Van De Wals Vipers",
			"score": ""
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
			assembled_score = "<span class='score-panel'>&nbsp;&nbsp;</span>";
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
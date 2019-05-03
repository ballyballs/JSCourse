//setting variables


/*create variables for average scores*/
var avgJohnTeam, avgMikeTeam, avgMaryTeam
/*create variables for average scores*/
var johnTmSc1, johnTmSc2, johnTmSc3
/*create variables for average scores*/
var mikeTmSc1, mikeTmSc2, mikeTmSc3
/*create variables for average scores*/
var maryTmSc1, maryTmSc2, maryTmSc3


var scores = [100,120,130];
function averageScore(score1, score2, score3){
	return (score1+score2+score3)/3
}

function averageScore1(scores){
	
		return scores;
}

/*set variables for Johns team */
johnTmSc1 = 100
johnTmSc2 = 120
johnTmSc3 = 130
/*set variables for Johns team */
mikeTmSc1 = 123
mikeTmSc2 = 100
mikeTmSc3 = 124
/*set variables for Johns team */
maryTmSc1 = 110
maryTmSc2 = 134
maryTmSc3 = 109

	
/*calculate the average scores for each team*/	
	
var test = averageScore1(scores);
console.log(test);
avgJohnTeam = averageScore(maryTmSc1,maryTmSc2,maryTmSc3);
avgMaryTeam = averageScore(maryTmSc1,maryTmSc2,maryTmSc3);
avgMikeTeam = averageScore(mikeTmSc1,mikeTmSc2,mikeTmSc3);


/*print out the best average score*/

avgJohnTeam > avgMikeTeam && avgJohnTeam > avgMaryTeam ?
	console.log ("John\'s team are better with an average score of " + avgJohnTeam + " to Mark\'s " + avgMikeTeam + " and to Mary\'s "+ avgMaryTeam)
	: 
avgMikeTeam > avgJohnTeam && avgMikeTeam > avgMaryTeam ?
	console.log ("Mike\'s team are better with an average score of " + avgMikeTeam + " to John\'s " + avgJohnTeam  + " and to Mary\'s "+ avgMaryTeam)
	:
avgMaryTeam > avgMikeTeam && avgMaryTeam > avgJohnTeam ?
	console.log ("Mary\'s team are better with an average score of " + avgMaryTeam + " to John\'s " + avgJohnTeam  + " and to Mike\'s "+ avgMikeTeam)
	:
avgJohnTeam == avgMikeTeam && avgJohnTeam > avgMaryTeam ?	
	console.log ("Mike and John\'s team are equal and better than Mary\'s with an average of: " + avgMikeTeam + " to Mary\'s " + avgMaryTeam)
	:
avgJohnTeam == avgMaryTeam && avgJohnTeam > avgMikeTeam ?	
	console.log ("Mary and John\'s team are equal and better than Mike\'s with an average of: " + avgMaryTeam + " to Mike\'s " + avgMikeTeam)
	:
avgMikeTeam == avgMaryTeam && avgJohnTeam < avgMikeTeam ?	
	console.log ("Mary and Mike\'s team are equal and better than John\'s with an average of: " + avgMaryTeam + " to John\'s " + avgJohnTeam)
	:
console.log ("The three teams are equal with and average of " + avgMaryTeam)

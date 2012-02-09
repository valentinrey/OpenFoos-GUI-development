var seconds = 0;
var minutes = 0;
//called when the page loads to begin the timer
function startTimer(){
	//100 milliseconds = 1 second
	window.setInterval("updateTime()", 1000);
}

//called every 100 milliseconds to update the timer
function updateTime(){
	++seconds;
	var currentMinutes = "0" + minutes;
	var currentSeconds = "0" + seconds;
	if(currentSeconds >= 10){
		currentSeconds = seconds;
	}
	if(currentMinutes >= 10){
		currentMinutes = minutes;
	}
	while(seconds === 60){
		seconds = 0;
		minutes++;
	}

	var timeWatch = currentMinutes + ":" + currentSeconds;


	document.getElementById("watch").innerHTML = timeWatch;

	//document.getElementById("vis").innerHTML = $("#soFar").text();
}
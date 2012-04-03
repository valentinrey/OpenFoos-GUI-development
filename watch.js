var seconds = 0;
var minutes = 0;
var interval = null;
var timeWatch = 0;
var control = false;
//called when the page loads to begin the timer
function startTimer(){
	
	//if(!control){
		//1000 milliseconds = 1 second
	if(interval === null){
		//control = true;
	
		interval = setInterval("updateTime()", 1000);
		}
}

//called every 1000 milliseconds to update the timer
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

	timeWatch = currentMinutes + ":" + currentSeconds;

	document.getElementById("watch").value = timeWatch;
	document.getElementById("watch").innerHTML = timeWatch;

	//document.getElementById("vis").innerHTML = $("#soFar").text();
}

function stopTimer(){
	var endTime = $("#watch").text();
	if(interval !== null){
		interval = clearInterval(interval);
		interval = null;
	}

	//$("#watch").text(timeWatch);
	//control = false;
	
}
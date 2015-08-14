// add scripts

function gettingWeatherInfo (location) {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial",
	})
	.done(function(data) {
		var temp = data.main.temp;
		$('.temperature').append('The current temperature is ' + temp + "<span>&deg</span>" + data.weather[0].description);
	});
}

$(document).ready(function() {

	$(".btn").on('click', function () {
		var location = this.dataset.location;
		$('.temperature').html('');
		gettingWeatherInfo(location);
	});


	});//document ready



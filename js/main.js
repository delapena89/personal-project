// add scripts

function gettingWeatherInfo (location) {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial",
	})
	.done(function(data) {
		var temp = data.main.temp;
		var list = data.weather[0].description;
		$('.temperature').append('The current temperature is ' + temp + "<span>&deg</span>" + " and " + list);
		if (temp<120 && temp>100) {
			$('.list').append('It is too hot...go to the pool!');
		}
		else if (temp<99 && temp>80) {
			$('.list').append('it is a great day');
		}
		else if (temp<79 && temp>60 && list === 'moderate rain') {
			$('.list').append('<p>it is a perfect day</p> <br>');
			$('.list').append('<p>bring an umbrella</p>');
		}
		else if (temp<59 && temp>40) {
			$('.list').append('you should stay home, it is kinda chilly');
		}
		else if (temp<39 && temp>20) {
			$('.list').append('too cold man, do something else...go skiing or something');
		}
		else if (temp<19 && temp>0) {
			$('.list').append('Im not even going to waste my time telling you why this is a bad idea...bring a couple jackets if you must');
		}
		else if (temp<0 && temp>-20) {
			$('.list').append('LEAVE THIS SITE!!!');
		}
	});
}

$(document).ready(function() {

	$(".btn").on('click', function () {
		var location = this.dataset.location;
		$('.temperature').html('');
		$('.list').html('');
		gettingWeatherInfo(location);
	});


	});//document ready



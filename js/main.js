// // add scripts

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
		else if (temp<100 && temp>80) {
			$('.list').append('<p>Recommendations:</p><br>');
			$('.list').append('<p>-Take the top of your car</p><br>');
			$('.list').append('<p>-Take the doors of</p><br>');
			$('.list').append('<p>-Extra snacks and water</p><br>');
			$('.list').append('<p>-GPS and CB Radio</p><br>');
			$('.list').append('<p>-Shovel and Hatchet</p><br>');
			$('.list').append('<p>-Tire Jack</p><br>');
			$('.list').append('<p>-Fire Extiguisher</p><br>');
			$('.list').append('<p>-Suncreen</p><br>');
			$('.list').append('<p>-Umbrella</p><br>');
		}
		else if (temp<80 && temp>60) {
			$('.list').append('<p>Recommendations:</p><br>');
			$('.list').append('<p>-Suncreen</p><br>');
			$('.list').append('<p>-Take the roof of your car</p><br>');
			$('.list').append('<p>-Light Jackets and hats:</p><br>');
			$('.list').append('<p>-Umbrella</p><br>');
			$('.list').append('<p>-Extra snacks and water</p><br>');
			$('.list').append('<p>-Shovel and Hatchet</p><br>');
			$('.list').append('<p>-Fire Extiguisher</p><br>');
			$('.list').append('<p>-Tire Jack</p><br>');
		}
		else if (temp<60 && temp>40) {
			$('.list').append('<p>Recommendations:</p><br>');
			$('.list').append('<p>-Jackets, gloves and hats</p><br>');
			$('.list').append('<p>-Shovel and Hatchet</p><br>');
			$('.list').append('<p>-GPS and Radio</p><br>');
			$('.list').append('<p>-Suncreen</p><br>');
			$('.list').append('<p>-Extra snacks and water</p><br>');
			$('.list').append('<p>-Make sure your winch is working</p><br>');
		}
		else if (temp<40 && temp>20) {
			$('.list').append('<p>Too cold, do something else...go skiing!</p>');
		}
		else if (temp<20 && temp>0) {
			$('.list').append('<p>Bring a jacket...</p>');
		}
		else if (temp<0 && temp>-20) {
			$('.list').append('<p>LEAVE THIS SITE!!!</p>');
		}
	});
}
	function enterTrail (select) {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + select + "&units=imperial",
	})
	.done(function(data) {
		var temp = data.main.temp;
		var list = data.weather[0].description;
		console.log(temp);
		console.log(list);
		$('.temperature').append('The current temperature is ' + temp + "<span>&deg</span>" + " and " + list);
		if (temp<120 && temp>100) {
			$('.list').append('It is too hot...go to the pool!');
		}
		else if (temp<100 && temp>80) {
			$('.list').append('<p>Recommendations:</p><br>');
			$('.list').append('<p>-Take the top of your car</p><br>');
			$('.list').append('<p>-Take the doors of</p><br>');
			$('.list').append('<p>-Extra snacks and water</p><br>');
			$('.list').append('<p>-GPS and CB Radio</p><br>');
			$('.list').append('<p>-Shovel and Hatchet</p><br>');
			$('.list').append('<p>-Tire Jack</p><br>');
			$('.list').append('<p>-Fire Extiguisher</p><br>');
			$('.list').append('<p>-Suncreen</p><br>');
			$('.list').append('<p>-Umbrella</p><br>');
		}
		else if (temp<80 && temp>60) {
			$('.list').append('<p>Recommendations:</p><br>');
			$('.list').append('<p>-Suncreen</p><br>');
			$('.list').append('<p>-Take the roof of your car</p><br>');
			$('.list').append('<p>-Light Jackets and hats:</p><br>');
			$('.list').append('<p>-Umbrella</p><br>');
			$('.list').append('<p>-Extra snacks and water</p><br>');
			$('.list').append('<p>-Shovel and Hatchet</p><br>');
			$('.list').append('<p>-Fire Extiguisher</p><br>');
			$('.list').append('<p>-Tire Jack</p><br>');
		}
		else if (temp<60 && temp>40) {
			$('.list').append('<p>Recommendations:</p><br>');
			$('.list').append('<p>-Jackets, gloves and hats</p><br>');
			$('.list').append('<p>-Shovel and Hatchet</p><br>');
			$('.list').append('<p>-GPS and Radio</p><br>');
			$('.list').append('<p>-Suncreen</p><br>');
			$('.list').append('<p>-Extra snacks and water</p><br>');
			$('.list').append('<p>-Make sure your winch is working</p><br>');
		}
		else if (temp<40 && temp>20) {
			$('.list').append('<p>Too cold, do something else...go skiing!</p>');
		}
		else if (temp<20 && temp>0) {
			$('.list').append('<p>Bring a jacket...</p>');
		}
		else if (temp<0 && temp>-20) {
			$('.list').append('<p>LEAVE THIS SITE!!!</p>');
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
	$(".search").on('click', function() {	
	var trail = document.getElementsByClassName('test');
	var select = trail[0].value;
	$('.temperature').html('');
	$('.list').html('');
	console.log(enterTrail(select));
	console.log(select);	
});



	});//document ready



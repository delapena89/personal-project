// // add scripts

function gettingWeatherInfo (location) {
	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial",
	})
	.done(function(data) {
		var temp = data.main.temp;
		console.log(temp);
		var list = data.weather[0].description;
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

	function enterTrail (select) {

	$.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=" + select + "&units=imperial",
	})
	.done(function(data) {
		var temp = data.main.temp;
		var list = data.weather[0].description;

		$('.temperature').html('The current temperature is ' + temp + "<span>&deg</span>" + " and " + list);
		
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

function printImages(hashtagSearch) {
	var searchUrl = "https://api.instagram.com/v1/tags/" + hashtagSearch + "/media/recent";
	var array = [];
	var output;

	$.ajax({
		url: searchUrl,
		type: 'GET',
		data: {client_id:'61f8b631abd34732a3bcd8c73d0d73a9'},
		dataType:'jsonp',
		success:function(data){
			console.log(data);
		for (var i = 0; i <= 8; i++) {	
    	output = data.data[i].images.low_resolution;
    	array.push(output);
    	}
    	for (var j = 0; j<array.length; j++) {
    		$('.row1').append('<img src=' + array[j].url + '>');
    	}
 	

    		
  //   	$('.row').append('<img src="' + output + '"/>');
		// });
    	}
    
});

}


$(document).ready(function() {});//document ready

$("#search").on('click', function(e) {	
	e.preventDefault();
	var trail = document.getElementsByClassName('test');
	var select = trail[0].value.toLowerCase();
	console.log(select);
	$('.temperature').html('');
	$('.list').html('');
	$('.row1').html('');
	console.log(select);
 	enterTrail(select);
	var hashtagSearch = "jeeps";	
		console.log(hashtagSearch);
	printImages(hashtagSearch);	
// console.log(data.list)
// console.log(select);	

});

$(".btn").on('click', function(e) {
	e.preventDefault();
	var location = this.dataset.location;
	$('.temperature').html('');
	$('.list').html('');
	$('.row1').html('');
	gettingWeatherInfo(location);
	var hashtagSearch = "jeeps";	
	console.log(hashtagSearch);
	printImages(hashtagSearch);
});

	// $('.photo').on('click', function () {
	// var hashtagSearch = "jeeps";	
	// 	console.log(hashtagSearch);
	// printImages(hashtagSearch);
	// });



$('.original').on('click',function(e) {
	e.preventDefault();
	console.log('hello');
	$('html').css('background-color', '#228b22');
	$('.title-page').css('background', 'url("http://s3-2.kiva.org/img/w800/298025.jpg")', "no-repeat;");
});

$('.second').on('click',function(e) {
	e.preventDefault();
	$('html').css('background-color', '#00BFFF');
	$('.title-page').css('background', 'url("http://www.wallpaperup.com/uploads/wallpapers/2013/07/01/112331/big_thumb_44d0b33fe916a1d2aa90e498f6dfcb84.jpg")', "no-repeat;");

});


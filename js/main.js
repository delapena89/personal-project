// add scripts


        $(document).ready(function() {

        	var temp;
        	var temp1;
        	var temp2;
        	var temp3;
        	var temp4;
        	var temp5;
        	var temp6;

          $.ajax({
          // get data from api.ipify.org
           url: "https://api.ipify.org",
          // if successfull, do something
            success: function(ipAddress) {
            // add ip address to the page
              $("#ip-address").text(ipAddress);
            }
          });
          // Button for Bear Basin Trail
          $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=Pagosa Springs,co&units=imperial",
            success: function(data) {
              $("#weather").text(" The current temperature is " + data.main.temp + " degrees");
              temp = data.main.temp.toFixed();
              console.log(temp);
            }
          });

        $(".btn1").on('click', function () {
        	$('.temperature').html('');

        	$('.temperature').append('The current temperature is ' + temp + "<span>&deg</span>");


        	console.log(temp);
        });

        // Button for Grand Junction Desert
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=Grand Junction,co&units=imperial",
            success: function(data) {
              $("#weather").text(" The current temperature is " + data.main.temp + " degrees");
              temp1 = data.main.temp.toFixed();
              console.log(temp1);
            }
          });

        $(".btn2").on('click', function () {
        	$('.temperature').html('');

        	$('.temperature').append('The current temperature is ' + temp1 + "<span>&deg</span>");


        	console.log(temp1);
        });

        // Button for Shrine Pass
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=Red Cliff,co&units=imperial",
            success: function(data) {
              $("#weather").text(" The current temperature is " + data.main.temp + " degrees");
              temp2 = data.main.temp.toFixed();
              console.log(temp2);
            }
          });

        $(".btn3").on('click', function () {
        	$('.temperature').html('');

        	$('.temperature').append('The current temperature is ' + temp2 + "<span>&deg</span>");


        	console.log(temp2);
        });

        // Button for Grizzly Jeep Trail
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=Eagle,co&units=imperial",
            success: function(data) {
              $("#weather").text(" The current temperature is " + data.main.temp + " degrees");
              temp3 = data.main.temp.toFixed();
              console.log(temp3);
            }
          });

        $(".btn4").on('click', function () {
        	$('.temperature').html('');

        	$('.temperature').append('The current temperature is ' + temp3 + "<span>&deg</span>");


        	console.log(temp3);
        });
        

        // Button for Bald Mountain
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=Fort Collins,co&units=imperial",
            success: function(data) {
              $("#weather").text(" The current temperature is " + data.main.temp + " degrees");
              temp4 = data.main.temp.toFixed();
              console.log(temp4);
            }
          });

        $(".btn5").on('click', function () {
        	$('.temperature').html('');

        	$('.temperature').append('The current temperature is ' + temp4 + "<span>&deg</span>");


        	console.log(temp4);
        });

        // Button for Devil's Canyon
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=Idaho Springs,co&units=imperial",
            success: function(data) {
              $("#weather").text(" The current temperature is " + data.main.temp + " degrees");
              temp5 = data.main.temp.toFixed();
              console.log(temp5);
            }
          });

        $(".btn6").on('click', function () {
        	$('.temperature').html('');

        	$('.temperature').append('The current temperature is ' + temp5 + "<span>&deg</span>");


        	console.log(temp5);
        });

        // Button for Phantom Canyon
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=Canon City,co&units=imperial",
            success: function(data) {
              $("#weather").text(" The current temperature is " + data.main.temp + " degrees");
              temp6 = data.main.temp.toFixed();
              console.log(temp6);
            }
          });

        $(".btn7").on('click', function () {
        	$('.temperature').html('');

        	$('.temperature').append('The current temperature is ' + temp6 + "<span>&deg</span>");


        	console.log(temp6);
        });

    
	});//document ready



          





        










      // switch (temp){ 
      // 	case temp>120 && temp<100 :
      // 		console.log("bring this...");
      // 		break;
      // 	case temp>99 && temp<80 :
      // 		console.log("bring this 1...");
      // 		break;
      // 	case temp>79 && temp<60 :
      // 		console.log("bring this 2...");
      // 		break;
      // 	case temp>59 && temp<40 :
      // 		console.log("bring this 3...");
      // 		break;
      // 	case temp>39 && temp<20 :
      // 		console.log("bring this 4...");
      // 		break;
      // 	case temp<19 && temp<0 :
      // 		console.log("bring this 5...");
      // 		break;
      // 	case temp<0 && temp<(-20) :
      // 		console.log("Stay Home!!!");
      // 		break;
      // }

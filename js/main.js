// add scripts


        $(document).ready(function() {
          $.ajax({
          // get data from api.ipify.org
           url: "https://api.ipify.org",
          // if successfull, do something
            success: function(ipAddress) {
            // add ip address to the page
              $("#ip-address").text(ipAddress);
            }
          });

          $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=boulder,co&units=imperial",
            success: function(data) {
              $("#weather").text(" The current temperature is " + data.main.temp + " degrees");
              var temp = data.main.temp.toFixed();
              console.log(temp);
            }
          });

        $(".btn").on('click', function () {
        	console.log('hello');
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

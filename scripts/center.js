(function(document){

	var lat = [10.6181615,10.6473695,10.6630103,10.5050841,10.40494];
	var lon = [-61.28875490000001,-61.4293788,-61.5139782,-61.4024643,-61.473434];

	var r = 6371000;

	var centers=['Ace Recycling Limited','Carib Glassworks Ltd.','Caribbean Tech Disposals Ltd','Kab Environmental and Recyclers Co Ltd','Piranha International Ltd.'];

	var myLon=0,myLat=0;
	var nearest=-1,distance=99999999999;



	function setMin(a,b){
                    	console.log('A: '+a + " B: "+b)
	                    if(b<distance){
	                    	distance = b;
	                    	nearest = a;
                    	}	
                    	console.log('nearest: '+centers[nearest]);
                    }


	function getMinDistance(i){
		var loc = "https://maps.googleapis.com/maps/api/directions/json?origin="+myLat+","+myLon+"&destination="+lat[i]+","+lon[i]+"&keyAIzaSyBdGupdqjCpH-YsJ0NtYaDhuJGwX_XCwP0";
		console.log('i: '+i);
		var request = $.ajax({
                type: 'GET',
                url: loc,
                
               
				success: function(data) {
                    //console.log(data);

                    var dista = data.routes[0].legs[0].distance.value;
                    console.log('dist: '+dista);


                    setMin(i,dista);
                    
                    
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log('error :(');
                    console.log(jqXHR, textStatus, errorThrown);
                    $('#geobox').hide();
                    request.abort();
                },
                crossDomain: true
            });
        
        $.ajax(request);
	
	}



	function getLocation() {
		  navigator.geolocation.getCurrentPosition(
		            function(position) {
		                //var latLngA = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
		                //var latLngB = new google.maps.LatLng(40.778721618334295, -73.96648406982422);
		                //var distance = google.maps.geometry.spherical.computeDistanceBetween(latLngA, latLngB);
		                //alert(latLngA.toString());//In metres
		                $('#ifgeomsg').hide();
		                myLat = position.coords.latitude;
		                myLon = position.coords.longitude;
		                console.log('long: '+ myLon+' lat: '+myLat);
		                //getNearestPoint(0);
		                for(var x = 0;x<5;x++){
		                	getMinDistance(x)
		                }
		                
		                setTimeout(function(){
		                	$('#nearest').append('The nearest center is '+centers[nearest]+". It is "+(distance/1000)+" away from you.");
		                },400);
		                //$('#nearest').append('<br>'+position.coords.longitude);


		            },
		            function() {
		                //alert("geolocation not supported!!");
		                $('#geobox').hide();
		            }
		    );
		}


	$(document).ready(
			function(){
				getLocation()
				//console.log(dist(0));
			}
		);

})();
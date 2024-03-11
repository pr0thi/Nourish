import React, { useState } from 'react'
import { useEffect } from 'react';

const FoodMap = (props) => {
    const{propsVal} = props;
    console.log(props.valData);
  
    useEffect(() => {
      // Load Google Maps API script
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);
  
      // Clean up function to remove the script on component unmount
      return () => {
        document.head.removeChild(script);
      };
    }, []);
  
    function initMap() {
      var map;
      var bounds = new window.google.maps.LatLngBounds();
      var mapOptions = {
        mapTypeId: 'roadmap'
      };
  
      // Display a map on the web page
      map = new window.google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
      map.setTilt(50);
  
          // Multiple markers location, latitude, and longitude

  

        var markers = [
            ['SRM University, Chennai', 12.8194041,80.0367139],
            ['VIT, Chennai', 12.8407922,80.1484866],
            ['Estancia IT Park, Chennai', 12.8310129,80.0469075],
            ['SIS Safaa, Chennai', 12.8510794,80.0630598]
        ];

        
        var infoWindowContent = [
            ['<div class="info_content">' +
            '<h2>SRM University, Chennai</h2>' +
            '<p>Akshit Gupta - Raw Materials - Rice, Dal</p>' + 
            '</div>'],
            ['<div class="info_content">' +
            '<h2>VIT College, Chennai</h2>' +
            '<p>Ankur Saini - Cooked Meal - Paneer, Roti</p>' +
            '</div>'],
            ['<div class="info_content">' +
            '<h2>Estancia Flats, Guduvancheri</h2>' +
            '<p>Aman Pandey - Packaged Food - Cakes, Juices</p>' +
            '</div>'],
            ['<div class="info_content">' +
            '<h2>VGN Flats, Urapakkam</h2>' +
            '<p>Harsh Pruthi - Packaged Food - Cakes, Juices</p>' +
            '</div>']
        ];
            
        // Add multiple markers to map
        var infoWindow = new google.maps.InfoWindow(), marker, i;
        
        // Place each marker on the map  
        for( i = 0; i < markers.length; i++ ) {
            var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
            bounds.extend(position);
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: markers[i][0]
            });
            
            // Add info window to marker    
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infoWindow.setContent(infoWindowContent[i][0]);
                    infoWindow.open(map, marker);
                }
            })(marker, i));
    
            // Center the map to fit all markers on the screen
            map.fitBounds(bounds);
        }
    
        // Set zoom level
        var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
            this.setZoom(14);
            google.maps.event.removeListener(boundsListener);
        });
    }
  
    window.initMap = initMap;
  
    return (
      <div id="mapCanvas"></div>
    );
  }

export default FoodMap
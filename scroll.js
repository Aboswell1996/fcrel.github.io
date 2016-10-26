// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

//Test for publications insert
$.ajax({
        async:false,
        url: 'test.txt',
        dataType: 'text',
        success: function(data)
        {
        $('element').append(data);
            }
        });

// Google Maps
function init_map() {
		var var_location = new google.maps.LatLng(49.187611, -122.849624);

        var var_mapoptions = {
          center: var_location,
          zoom: 16
        };

		var var_marker = new google.maps.Marker({
			position: var_location,
            map: var_map,
			title:"SFU Surrey"});

        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);

		var_marker.setMap(var_map);
}

function sec_map() {
		var var_location = new google.maps.LatLng(49.160277, -122.878565);

        var var_mapoptions = {
          center: var_location,
          zoom: 16
        };

		var var_marker = new google.maps.Marker({
			position: var_location,
            map: var_map,
			title:"Powertech Lab"});

        var var_map = new google.maps.Map(document.getElementById("map-container2"),
            var_mapoptions);

		var_marker.setMap(var_map);
}

function ballard_map() {
		var var_location = new google.maps.LatLng(49.198026,-123.009905);

        var var_mapoptions = {
          center: var_location,
          zoom: 16
        };

		var var_marker = new google.maps.Marker({
			position: var_location,
            map: var_map,
			title:"Ballard Power Systems"});

        var var_map = new google.maps.Map(document.getElementById("ballard"),
            var_mapoptions);

		var_marker.setMap(var_map);
}

google.maps.event.addDomListener(window, 'load', init_map);
google.maps.event.addDomListener(window, 'load', sec_map);
google.maps.event.addDomListener(window, 'load', ballard_map);

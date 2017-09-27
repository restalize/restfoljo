// ------------ waypoint shit 

var $famagic = $('.fa-magic');
var $fabars = $('.fa-bars');
var $fagear = $('.fa-gear');
var $facode = $('.fa-code');
var $faareachart = $('.fa-area-chart');
var $titleofservice = $(".title-of-service")

$famagic & $fabars & $fagear & $facode & $faareachart & $titleofservice.waypoint(function () {
    $famagic.addClass("animated fadeInUp");
    $fabars.addClass("animated flipInX");
    $fagear.addClass("animated rotateIn");
    $facode.addClass("animated flipInY");
    $faareachart.addClass("animated fadeInUp");

    $titleofservice.addClass("animated fadeInDown")

  }

  , {
    offset: '90%'
  });


$(window).on('load', function ()  {
$(".loader").removeClass("loader"); })
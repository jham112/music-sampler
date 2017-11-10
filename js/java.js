$(document).ready(function() {

  function hideAll() {
     $('#songClickMe').hide();
     $('#songBRDG').hide();
     $('#songEat').hide();
     $('#songComplex').hide();
     $('#soundtrack1').hide();
     $('#soundtrack2').hide();
     $('#soundtrack3').hide();
     $('#soundtrack4').hide();
   }

hideAll();

$('.albumCover').click(function() {

  hideAll();

  switch ($(this).attr('id')) {
      case "RedLight":
        $('#songClickMe').show();
        $('#soundtrack1').show();
        $('#soundtrack1').get(0).play();
        break;
      case "BRDG":
        $('#songBRDG').show();
        $('#soundtrack2').show();
        $('#soundtrack2').get(0).play();
        break;
      case "Eat":
        $('#songEat').show();
        $('#soundtrack3').show();
        $('#soundtrack3').get(0).play();
        break;
      case "OO":
        $('#songComplex').show();
        $('#soundtrack4').show();
        $('#soundtrack4').get(0).play();
        break;
    }

    $('audio').each(function() {
      this.pause();
      this.currentTime = 0;
    });

  });

  $('#zionT').click(function(){
    $('#vessel').slideToggle();
  });


});

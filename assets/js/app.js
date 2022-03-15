
$(function(){
    $('.tooltipped').tooltip();
    console.log( "Ready!" );
});

var mediaqueryList = window.matchMedia("(max-width: 751px)");

mediaqueryList.addListener( function(EventoMediaQueryList) {
      $('#autoridades').attr('data-position', 'top');
});

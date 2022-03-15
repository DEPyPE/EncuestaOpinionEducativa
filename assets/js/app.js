
$(function(){
    $('.tooltipped').tooltip();
    console.log( "Ready!" );
});

var mediaqueryList = window.matchMedia("(max-width: 751px)");

mediaqueryList.addListener( function(EventoMediaQueryList) {
      $('#autoridades').attr('data-position', 'bottom');
});

var mediaqueryList2 = window.matchMedia("(min-width: 752px)");

mediaqueryList2.addListener( function(EventoMediaQueryList) {
    $('#autoridades').attr('data-position', 'right');
});

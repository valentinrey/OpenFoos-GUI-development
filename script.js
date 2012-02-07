
$(document).ready(function(){
    registerPlayer1();
    start();
    hideAndShow();
    
});

function hideAndShow(){
    $('#player1').click(function(){
        //$('form').show();
        $('form').toggle();
        $('h1, h4').hide();
        $('#start').hide();
 });
}

function registerPlayer1(){
    $('#submit').click(function(){
        var name = $('#textfield').val();
        $('#player1').text(name);
    });
}

function start(){
    $('#player2').click(function(){
        $('#start').show();
        $('form').hide();
    });
}

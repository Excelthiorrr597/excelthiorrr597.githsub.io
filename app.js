var main = function() {

    jQuery.fx.interval = 10;

    $('.tog').click(function(){
        $('.examples').slideToggle();
    });

    $(document).keypress(function(event){
        var e = event.which
        console.log(e)
        if (e === 122) {
            $('body').toggleClass('invert')
        }
        if (e === 120) {
            $('body').fadeToggle();
        }
    });

};

$(document).ready(main);
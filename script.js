$(document).ready( function() {
   $('body').fadeOut(2000).fadeIn(500);

    //muis events
    $('div img').mouseenter( function() {
        $(this).fadeTo(600, .01);
    }).mouseleave(function() {
        $(this).fadeTo(1000, 1);
    }).click( function() {
        $(this).next().toggle(400);
    })
    

    // footer

    $('footer').click( function() {
        $(this).animate( {
            left: '-=20px',
            opacity: '-=.2'
        }, 900)
    }).dblclick ( function() {
        $(this).animate( {
            left: '0',
            opacity: '1'
        }, 900)
    });
    // header

$('header').click( function() {
    $(this).animate( {
        top: '=+20px',
        opacity: '-=.2'
    }, 900)
}).dblclick ( function() {
    $(this).animate( {
        left: '0',
        opacity: '1'
    }, 900)
    })
});







//made by Sam Harwig

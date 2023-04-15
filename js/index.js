//highlighting link in tabs on click
$('.tabs').find('a').on('click', function(event) {

    $(this)
        .parent().addClass('selected')

        .siblings().removeClass('selected')

        event.preventDefault();

});

//highlighting odd li elements
// $(".tabs li:nth-child(odd)").addClass("highlight");

//social icons dissapearing on click
$(function ()
{
    let socialIcons = $('.social-icon'),
    siteHeight = $('body').height();

    socialIcons.css({
        position:'relative',
        zIndex:10
    });

    socialIcons.on('click', function() {
    $(this).animate({ top: siteHeight }, 2000).fadeOut();
});

});

//title animation
$(function headingAnimation()
{
    let title = $('.post-title');

    title.css({ position: 'relative' });
    title.animate({ left: 200 }, 2000);

    let header = $('.post-content'),
        title2 = header.find('.post-subheading');

    title2.slideUp(2000);
});

(function ($) {

    let gallery = $('.gallery')

    //opacity on hover
    
    gallery.find('img').css ({
        opacity:0.8,
    }).on('mouseenter mouseleave', function(event) {
        

        let opacity;
        if ( event.type == 'mouseenter' ) opacity = 1;
        else opacity = 0.8;

        $(this).stop().fadeTo(200, opacity)
    });

    // --------------- OVERLAY

    let overlay = $('<div/>', { id: 'overlay'});
        overlay.appendTo('body').hide();

    gallery.find('a').on('click', function(e) {
        
        let href = $(this).attr('href'),
            image = $('<img>', { src: href, alt:'learn2code' });

        overlay.html( image )
                .show();

        overlay.show();
        e.preventDefault();
    })

    overlay.on('click', function() {
        overlay.hide();
    });

    $(document).on('keyup', function(e) {
        if (e.which === 27 ) overlay.hide();
    });


    // SMOOTH TABS SCROOL

let tabs = $('.tabs'),
tabLinks = tabs.find('a');

tabLinks.on('click', function(e) {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top  }, 1000);
    e.preventDefault();
});

    // SMOOTH BACK TO TOP SCROLL

        let backToTop = $('<a>', {
                href: '#home',
                class: 'back-to-top',
                html: '<i class="fa fa-caret-up fa-5x"></i>'
        });

        backToTop
            .hide()
            .appendTo('body')
            .on('click', function(e) {
                e.preventDefault(); 
                $('html,body').animate({ scrollTop: 0 }, 1000);
        });

        let win = $(window);
            win.scroll(function () { 
                if ( win.scrollTop() >= 500 ) backToTop.fadeIn();
                else backToTop.hide();
    });


})(jQuery);

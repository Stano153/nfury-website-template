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


/*

$(function()
{
    let number = prompt("Enter number:");
    let number2 = 3 * number;
    console.log("Number is " + number2);
});

*/

/*

//checking if sum of number1 and number2 is even or odd

$(function()
{
    let sign1 = +prompt("Enter number 1");
    let sign2 = +prompt("Enter number 2");
    let mainResult = sign1 + sign2;
    
    alert(`Result is ${mainResult}`);
    if(mainResult % 2 == 0) {
        alert("Number is even.");
    }
    
    else {
        alert("Number is odd.");
    }
   
});
*/
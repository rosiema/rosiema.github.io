$(function()
  {
    var slideBlock = $(".slider_block");
    var slideBlockIndex = -1;

    function showQuote(change)
    {
        slideBlockIndex += change;
        if (slideBlockIndex < 0)
        {
            slideBlockIndex += slideBlock.length;
        }
        else if (slideBlockIndex >= slideBlock.length)
        {
            slideBlockIndex -= slideBlock.length;
        }
        slideBlock.stop(true, true).hide().eq(slideBlockIndex)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000)
            .queue(function() { showQuote(1); });
    }  
    showQuote(1);

    $('#prev').on('click', function()
                  {
        showQuote(-1);
    });

    $('#next').on('click', function()
                  {
        showQuote(1);
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide_block");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
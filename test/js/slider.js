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
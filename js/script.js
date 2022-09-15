$(document).ready(function(){
    // declaring variables 
    var totalWidth=0;
    var positions= new Array();
    // #slides and .slide must have a space 
    $('#slides .slide').each(function(i){
        // get slide width
        positions[i]= totalWidth;
        totalWidth +=$(this).width();

        // check width
        if (!$(this).width()) {
            alert("please add width to your image");
            return false;
        }
    });

	
    // set width
    $('#slides').width(totalWidth);
    // menu item click handler 
    $('#menu ul li a').click(function(e, keepScroll){
        // remove active class and add inactive
            $('li.product').removeClass('active').addClass('inactive');
            // add active class to parent 
            $(this).parent().addClass('active');

            var pos = $(this).parent().prevAll('.product').length;

            $('#slides').stop().animate({marginLeft:-positions[pos]+'px'},450);

            e.preventDefault();
            // stop auto scroll
            if(!autoScroll) clearInterval(itvl);
    });

    // make the first image active
    $('#menu ul li.product:first').addClass('active').siblings().addClass('inactive');

    var current =1;
    function autoScroll(){
            if (current== -1) 
                return false;

                $('#menu ul li a').eq(current%$('#menu ul li a').length).trigger('click',[true]);
                current++;
            
    }
    // duration 
    var duration = 3;
    var itvl = setInterval(function(){autoScroll()},duration*1000);

});
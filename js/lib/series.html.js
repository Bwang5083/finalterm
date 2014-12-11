define(["jquery", "bootstrap"], function (jQuery) {
    jQuery("#newsstory").load("serie1.html");
    jQuery(".nav-tabs a").click(function () {
        jQuery("#newsstory").load(this.name + ".html");
        jQuery(".active").removeClass("active");
        jQuery(this).parent().addClass("active");
    });

    //
    $(function () {
        var $slider = $('.panel-inner'); //get the slider
        var liW = 55; //define single LI width
        var liFW = parseInt(liW * ($slider.find('li').length + 1)); //find the full width of the UL 191 * LI's
        $slider.css('width', liFW + 'px'); //apply the full-width to the UL
        $('.button').click(function () {
            //if arrow right OR left, get the current left: CSS property of the UL
            var leftX = (this.id == 'rightbutton') ? parseInt($slider.css('left').toString().replace('-', '')) : parseInt($slider.css('left'));
            //check and see if we have reached the end OR start of the UL width
            var leftY = (this.id == 'rightbutton') ? ((leftX + 404) == liFW) ? 0 : -(leftX + liW) : (leftX < 0) ? -(parseInt(leftX.toString().replace('-', '')) - liW) : 0;
            //apply the animation
            rotate(leftY);
        });
        var rotate = function (leftY) {
            $slider.animate({
                left: leftY
            }, 500);
        }
    });

    window.swap6 = function() {
        window.document.pic.src = 'images/pic6.jpg';
    }

    window.swap7 = function() {
        window.document.pic.src = 'images/pic7.jpg';
    }

    window.swap9 = function() {
        window.document.pic.src = 'images/pic9.jpg';
    }

    window.swap10 = function() {
        window.document.pic.src = 'images/pic10.jpg';
    }

    window.swap11 = function() {
        window.document.pic.src = 'images/pic11.jpg';
    }

    window.swap12 = function() {
        window.document.pic.src = 'images/pic12.jpg';
    }

    window.swap13 = function() {
        window.document.pic.src = 'images/pic13.jpg';
    }

    //
    return function () {
        jQuery(".carousel").carousel();
    };
});

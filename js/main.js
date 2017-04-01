$(function() {
    $doc = $(document);
    $win = $(window);
    $('html').css('fontSize', $doc.width() / 1436 * 100 + 'px');

    $win.bind('resize', resize);
    resize();
    getSlide();
    slideTo("#J_btn_work", "work");
    slideTo("#J_btn_about", "about");
    slideTo("#J_btn_contact", "contact");
    slideTo('#J_btn_top');

    function resize() {
        $('html').css('fontSize', $doc.width() / 1436 * 100 + 'px');
    }

    function slideTo(btn, target) {
        if (target) {
            if (!$('#' + target).length) {
                return;
            }
            target = $('#' + target).offset().top;
        } else {
            target = 0;
        }
        $(btn).on('click', function() {
            $('html, body').animate({
                scrollTop: target
            }, 500);
        })
    }

    function getSlide() {
        var target = window.location.hash;
        if (target) {
            target = target.substr(1);
        } else {
            return;
        }
        $('html, body').animate({
            scrollTop: $('#' + target).offset().top
        }, 500);

    }

});
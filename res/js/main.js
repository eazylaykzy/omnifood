$(document).ready(function () {
    /* Confirm form before submission */
    $('.contact-form').submit(function (event) {
        if ($.trim($('#message').val()) === '') {
            $('.form-messages').addClass('error').html("Oops! Something went wrong, check to see you filled all details.");

            event.preventDefault();
        }
    });

    /* Sticky Nav*/
    $('.js--section-features').waypoint(function (direction) {
        if (direction === 'down') {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '100px;'
    });

    /* Scroll on Buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000)
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
    });

    /* Nav smooth scroll*/
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%;'
    });

    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%;'
    });

    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated bounceIn');
    }, {
        offset: '50%;'
    });

    /* Mobile Nav */
    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('fas fa-bars')) {
            icon.addClass('fa fa-times');
            icon.removeClass('fas fa-bars');
        } else {
            icon.addClass('fas fa-bars');
            icon.removeClass('fa fa-times');
        }

    });

    var lat = 6.5985613;
    var lng = 3.3265395;

    /* Maps */
    var map = new GMaps({
        div: '.map',
        lat: lat,
        lng: lng,
        zoom: 12
    });

    map.addMarker({
        lat: lat,
        lng: lng,
        title: 'Anifowose Ikeja',
        infoWindow: {
            content: '<p>Our Ikeja HQ</p>'
        }
    });
});


/*
* <script src="https://raw.githubusercontent.com/HPNeo/gmaps/master/gmaps.js"></script>
<script>
var map = new GMaps({
        div: '.map',
        lat: lat,
        lng: lng,
        zoom: 12
    });

map.addMarker({
  lat: -12.043333,
  lng: -77.028333,
  title: 'Lima',
  click: function(e) {
    alert('You clicked in this marker');
  }
});
</script>

<style type="text/stylesheet">
.map {
    width: 100%;
    height: 640px;
    position: relative;
    z-index: 0;
}
</style>
<div class="map"></div>
* */

$(document).ready(function() {
    $(".labels a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            var targetOffset = $(hash).offset().top - parseFloat($('.bottom').css('paddingTop'));
            $('html, body').animate({
                scrollTop: targetOffset
            }, {
                duration: 800,
                easing: 'easeInOutQuart'
            }, function(){
                window.location.hash = hash;
            });
        }
    });
});
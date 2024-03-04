// Mobile Menu
function hamburger() {
    var dropdown = document.getElementById("mobile-links");
    var body = document.getElementById("noscroll");
    if (dropdown.style.visibility === "visible") {
        dropdown.style.visibility = "hidden";
        dropdown.style.opacity = "0";
        body.style.overflow = "visible";
        setTimeout(function() {
            dropdown.style.display = "none";
        }, 200);
    } else {
        dropdown.style.display = "flex";
        setTimeout(function() {
            dropdown.style.visibility = "visible";
            dropdown.style.opacity = "1";
            body.style.overflow = "hidden";
        }, 100);
    }
    dropdown.addEventListener('click', function handleClick() {
        dropdown.style.visibility = "hidden";
        setTimeout(function() {
            dropdown.style.opacity = "0";
            body.style.overflow = "visible";
        }, 100);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Variables
    var mobile = document.getElementById("mobile-nav");
    var dropdown = document.getElementById("mobile-links");
    var icon = document.getElementById("icon");

    // Factor in Navbar for Smooth Scroll
    $(document).ready(function() {
        var hash = window.location.hash;
        if (hash && hash.match(/^#[a-zA-Z0-9_-]+$/)) {
          var target = $(hash);
          if (target.length) {
            var offset = target.offset().top - $('nav').outerHeight();
            $('html, body').animate({
              scrollTop: offset
            }, 600);
          }
        }
      });
      
    // Smooth Scrolling
    $(document).ready(function () {
        $('a[href^="#"]').on('click', function (event) {
            var target = $(this.getAttribute('href'));
            if (target.length) {
                event.preventDefault();
                var navbarHeight = 80;
                $('html, body').stop().animate({
                    scrollTop: target.offset().top - 80
                }, 500);
            }
        });
        $('body').css('opacity', '1');
    });

    window.addEventListener("resize", function () {
        var mobile = document.getElementById("mobile-nav");
        var dropdown = document.getElementById("mobile-links");
        var body = document.getElementById("noscroll");
        if (window.innerWidth < 680) {
            dropdown.style.display = "none";
            setTimeout(function() {
                mobile.style.visibility = "visible";
                mobile.style.opacity = "1";
                mobile.style.display = "block";
            }, 100);
        } else {
            dropdown.style.display = "none";
            setTimeout(function() {
                dropdown.style.visibility = "hidden";
                dropdown.style.opacity = "0";
                mobile.style.visibility = "hidden";
                mobile.style.opacity = "0";
                mobile.style.display = "none";
            }, 100);
        }
    });
});
// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    //Figure out code to remove $('.spy-active') to stop scrollspy on smooth scroll.
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Change Navbar to Active
$(".nav li a").click(function(){
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

//Change Navbar to Active on Scroll via scrollspy
$('body').scrollspy({ target: '.spy-active' });

// Close collapsed menu on click
$(".nav li a").click(function(){
  $(".navbar-collapse").collapse('hide');
});

var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));

try {
  var pageTracker = _gat._getTracker("UA-65683527-1");
pageTracker._trackPageview();
} catch(err) {}

// Scrolls to selected menu item, changes it's class to active,
// and disables scrollspy watcher
$(".nav li a[href^='#']").on('click', function(e) {
  $('#navbar').removeClass('spy-active');
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
  e.preventDefault();
  var hash = this.hash;
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000, function(){
    window.location.hash = hash;
    $('#navbar').addClass('spy-active');
  });
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

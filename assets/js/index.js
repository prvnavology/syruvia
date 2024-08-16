  // Header Scroll JS Start
  $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("fixed-header", $(window).scrollTop() > 0);
    });
  });

  $(".banner-slider").slick({
    dots: true,
    fade: false,
    pauseOnHover: false,
    arrows: true,
      infinite: true,
    autoplay:true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false
});

$('#slider-toggle').click( function() {
if ($(this).html() == '<i class="fa-solid fa-pause"></i>'){
$('.banner-slider').slick('slickPause')
$(this).html('<i class="fa-solid fa-play"></i>') 
} else {
$('.banner-slider').slick('slickPlay')  
$(this).html('<i class="fa-solid fa-pause"></i>') 
}  
});
  
  $('.premium-quality-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 300,
    arrows: false,
    autoplaySpeed: 2000
  });

  $(".product-banner-slider").slick({
    dots: false,
    fade: false,
    pauseOnHover: false,
    arrows: false,
      infinite: true,
    autoplay:true,
    autoplaySpeed: 3000,
    slidesToShow: 1
});

  
  // Header Scroll JS Start
  $(document).ready(function () {
    $(window).scroll(function () {
      var header = $("header");
      header.toggleClass("fixed-header", $(window).scrollTop() > 0);
    });
  });
  // Header Scroll JS End


//   Banner Slider JS Start
$('.banner-slider').slick({
    infinite: true,
    infinite: true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000
  });
   
  //   Banner Slider JS End


  //   JS Start
$('.premium-quality-slider').slick({
    infinite: true,
    dots:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    autoplaySpeed:2000
  });
   
  //   Banner Slider JS End


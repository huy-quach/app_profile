// check js jquery
// if (typeof jQuery !== "undefined") {
//   console.log("jQuery Loaded");
// } else {
//   console.log("not loaded yet");
// }
//  JS PRELOADER
// PRELOADER

$(window).load(function () {
  $(".preloader").delay(150).fadeOut("slow"); // set duration in brackets
});

// HOME BACKGROUND SLIDESHOW
$(function () {
  jQuery(document).ready(function () {
    $("body").backstretch(
      [
        "images/images-slide1.jpg",
        "images/images-slide2.jpg",
        "images/images-slide3.jpg",
        "images/images-slide4.jpg",
      ],
      { duration: 700, fade: 1400 }
    );
  });
});

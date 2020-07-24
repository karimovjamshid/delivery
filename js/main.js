//Search button

const searchIcon = document.querySelector(".search-icon");
const headerInput = document.querySelector(".header__input");

searchIcon.addEventListener("click", function () {
  headerInput.classList.toggle("open");
});
//Hamburger

const burger = document.querySelector(".burger");
const headerLink = document.querySelector(".header__link");
const headerContainer = document.querySelector(".header-container");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger__open");
  headerContainer.classList.toggle("header-container--open");
});

$(document).ready(function () {
  // Slick slider
  $(".hero__content").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  // Sticky navbar
  let header = $("#header");
  let scrollPos = $(window).scrollTop();

  $(window).on("scroll load resize", function () {
    // let headerH = header.innerHeight();
    scrollPos = $(this).scrollTop();

    if (scrollPos > 30) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  });

  // Remove header on click to nav
  $(".header__link").on("click", function () {
    $(".header-container").removeClass("header-container--open");
    $(".burger").removeClass("burger__open");
  });
});

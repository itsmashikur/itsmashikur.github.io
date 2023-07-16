"use strict";

const scrollToTopBtn = document.querySelector(".scrollToTop");
window.onload = (e) => {
  const loader = document.querySelector(".loader");
  const menuIcon = document.querySelector("#menu-toggle");
  const menu = document.querySelector("#menu");
  const body = document.querySelector("main");
  // Remove loader
  loader.classList.add("end");

  let mainNavLinks = document.querySelectorAll("nav li a");

  // Smooth Scrolling with Javascript
  mainNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      let target = document.querySelector(event.target.hash);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // Add class to menu links on scroll to a section
  let lastId;
  let cur = [];

  window.addEventListener("scroll", (event) => {
    scrollFunction();
    let fromTop = window.scrollY + 60;

    mainNavLinks.forEach((link) => {
      let section = document.querySelector(link.hash);

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {

        //parent of the link
        link.parentElement.classList.add("bg-indigo-500");
        link.parentElement.classList.add("skew-y-6");
      } else {
        link.parentElement.classList.remove("bg-indigo-500");
        link.parentElement.classList.remove("skew-y-6");

      }
    });
  });



  // window.addEventListener("scroll", (event) => {

  //   let fromBottom = document.body.offsetHeight - window.scrollY - window.innerHeight;
  //   let fromTop = window.scrollY;

  //   if (fromTop > 0 && fromBottom > 700) {

  //     body.classList.add("-skew-y-6");
  //     body.classList.add("md:scale-105");

  //   }else{
  //     body.classList.remove("-skew-y-6");
  //     body.classList.remove("md:scale-105");
  //   }

  // });

  // Menu Toggle on click
  menuIcon.addEventListener("click", (e) => {
    menu.classList.toggle("opacity-0");
  });



  // ScrollOut micro library
  ScrollOut({
    once: true,
  });

  // Splitting.js with scrollout.js
  Splitting();
  ScrollOut({
    targets: "[data-splitting]",
  });

  // Glide Slider
  var glide = new Glide(".glide", {
    type: "carousel",
    perView: 2,
    autoplay: 3000,
    breakpoints: {
      1024: {
        perView: 1,
        focusAt: 1,
      },
    },
  });

  glide.mount();

  // Native Lazyload
  if ("loading" in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      img.src = img.dataset.src;
    });
  }
};

// Scroll To Top
scrollToTopBtn.addEventListener("click", (e) => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.classList.add("slideUp");
  } else {
    scrollToTopBtn.classList.remove("slideUp");
  }
}

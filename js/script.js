let headerBurger = document.querySelector(".header__burger");
let aside = document.querySelector(".aside");
let asideClose = document.querySelector(".aside__close");
let body = document.querySelector(".body");
let blur = document.querySelector(".blur");

headerBurger.addEventListener("click", function () {
  aside.classList.add("aside-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
});

asideClose.addEventListener("click", function () {
  aside.classList.remove("aside-open");
  body.classList.remove("body-hide");
  blur.classList.remove("blur-open");
});

blur.addEventListener("click", function () {
  aside.classList.remove("aside-open");
  body.classList.remove("body-hide");
  blur.classList.remove("blur-open");
  modalCall.classList.remove("modal-call-open");
  modalFeed.classList.remove("modal-feed-open");
});

let sectionTopButton = document.querySelector(".section-top__button");
let sectionTopText = document.querySelector(".section-top__text");
let sectionTopExpand = document.querySelector(".section-top__expand");
let sectionTopButtonText = document.querySelector(".section-top__button-text");

sectionTopButton.addEventListener("click", function () {
  sectionTopText.classList.toggle("section-top-text-open");
  sectionTopExpand.classList.toggle("section-top-expand-deg");
  if (sectionTopText.classList.contains("section-top-text-open")) {
    sectionTopButtonText.innerHTML = "Скрыть";
  } else {
    sectionTopButtonText.innerHTML = "Показать все";
  }
});

let swiperTopBtn = document.querySelector(".swiper-top__btn");
let swiperTopWrapper = document.querySelector(".swiper-top__wrapper");
let swiperTopBtnExpand = document.querySelector(".swiper-top__btn-expand");
let swiperTopBtnText = document.querySelector(".swiper-top__btn-text");

swiperTopBtn.addEventListener("click", function () {
  swiperTopWrapper.classList.toggle("swiper-top__wrapper-open");
  swiperTopBtnExpand.classList.toggle("swiper-top__btn-expand-deg");
  if (swiperTopWrapper.classList.contains("swiper-top__wrapper-open")) {
    swiperTopBtnText.innerHTML = "Скрыть";
  } else {
    swiperTopBtnText.innerHTML = "Показать все";
  }
});

let swiperMidBtn = document.querySelector(".swiper-mid__btn");
let swiperMidWrapper = document.querySelector(".swiper-mid__wrapper");
let swiperMidBtnExpand = document.querySelector(".swiper-mid__btn-expand");
let swiperMidBtnText = document.querySelector(".swiper-mid__btn-text");

swiperMidBtn.addEventListener("click", function () {
  swiperMidWrapper.classList.toggle("swiper-mid__wrapper-open");
  swiperMidBtnExpand.classList.toggle("swiper-mid__btn-expand-deg");
  if (swiperMidWrapper.classList.contains("swiper-mid__wrapper-open")) {
    swiperMidBtnText.innerHTML = "Скрыть";
  } else {
    swiperMidBtnText.innerHTML = "Показать все";
  }
});

let modalFeed = document.querySelector(".modal-feed");
let asideChatBtn = document.querySelector(".aside__chat");
let headerChatBtn = document.querySelector(".header__chat");
let modalFeedButton = document.querySelector(".modal-feed__button");

asideChatBtn.addEventListener("click", function () {
  modalFeed.classList.toggle("modal-feed-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
  aside.classList.remove("aside-open");
});

headerChatBtn.addEventListener("click", function () {
  modalFeed.classList.toggle("modal-feed-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
});

modalFeedButton.addEventListener("click", function () {
  modalFeed.classList.toggle("modal-feed-open");
  blur.classList.remove("blur-open");
  body.classList.remove("body-hide");
});

let modalCall = document.querySelector(".modal-call");
let asideCallBtn = document.querySelector(".aside__call");
let headerCallBtn = document.querySelector(".header__call");
let modalCallButton = document.querySelector(".modal-call__button");

asideCallBtn.addEventListener("click", function () {
  modalCall.classList.toggle("modal-call-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
  aside.classList.remove("aside-open");
});

headerCallBtn.addEventListener("click", function () {
  modalCall.classList.toggle("modal-call-open");
  body.classList.add("body-hide");
  blur.classList.add("blur-open");
});

modalCallButton.addEventListener("click", function () {
  modalCall.classList.toggle("modal-call-open");
  blur.classList.remove("blur-open");
  body.classList.remove("body-hide");
});

let swiperTop;

let width = window.matchMedia("(max-width: 767px)");

function resize(event) {
  event == true
    ? (swiperTop = new Swiper(".swiper-top__on", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }))
    : swiperTop.destroy();
}

let swiperMid;

function resizeMid(event) {
  event == true
    ? (swiperMid = new Swiper(".swiper-mid__on", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }))
    : swiperMid.destroy();
}

let swiperBottom;

function resizeBottom(event) {
  event == true
    ? (swiperBottom = new Swiper(".swiper-bottom__on", {
        slidesPerView: "auto",
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      }))
    : swiperBottom.destroy();
}

width.addEventListener("change", function (event) {
  resize(event.matches);
  resizeMid(event.matches);
  resizeBottom(event.matches);
});

resize(width.matches);
resizeMid(width.matches);
resizeBottom(width.matches);

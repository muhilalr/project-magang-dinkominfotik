//Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger Menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

let scrollContainer = document.querySelector("#foto-kegiatan");
let scrollContainerVideo = document.querySelector("#video-kegiatan");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

scrollContainerVideo.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainerVideo.scrollLeft += evt.deltaY;
  scrollContainerVideo.style.scrollBehavior = "auto";
});

// Func Untuk Tombol Tab Berita Terbaru dan Terpopuler
// function showTab(tabId) {
//   const tabs = document.querySelectorAll(".tab-pane");
//   tabs.forEach((tab) => tab.classList.add("hidden"));
//   document.getElementById(tabId).classList.remove("hidden");

//   const buttons = document.querySelectorAll(".news-list button");
//   buttons.forEach((btn) => btn.classList.remove("bg-white", "text-primary"));
//   document
//     .querySelector(`button[onclick="showTab('${tabId}')"]`)
//     .classList.add("bg-primary", "text-white");
// }
// document.getElementById("terbaru").classList.remove("hidden");

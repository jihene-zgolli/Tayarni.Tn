const navbarToggle = document.querySelector(".responsive-toggle");

navbarToggle.addEventListener("click", () => {
  const links = document.querySelector(".links");
  links.classList.toggle("nav-toggle");
});

const scrollElement = document.querySelector(".scrollToTop");
window.addEventListener("scroll", () => {
  scrollElement.style.display = "block";
  window.pageYOffset > 300
    ? (scrollElement.style.display = "block")
    : (scrollElement.style.display = "none");
});

scrollElement.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
});

sr.reveal(
  `nav, .starter,
  .services,
  .destination,
  .next-trip,
  .testimonials,
  .brands,
  .subscribe,
  footer
  `,
  {
    interval: 200,
  }
);
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

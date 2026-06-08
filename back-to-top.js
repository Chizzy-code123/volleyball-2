// Get the button:
let mybutton = document.getElementById("back-to-top");

window.onscroll = function () {
  scrollFunction();
};

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    mybutton.classList.add("active");
  } else {
    mybutton.classList.remove("active");
  }
});

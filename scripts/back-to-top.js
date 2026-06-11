/*
  This refrences the back to top button if it has the id
  I put inside in-built function brackets. 
  Document is the webpage that this script is refrenced in.
*/

let mybutton = document.getElementById("back-to-top");

/* 
  This event fires whenever the user scrolls in the webpage.

  The function checks how far the user has scrolled down to
  allow the back to top button to be interacted with and visible.
*/
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 600) {
    /* 
      This changes the state of the button to be active 
      so that it can be visible and interactable.
    */
    mybutton.classList.add("active");
  } else {
    /*
      This removes the active so that the back to top button won't be
      visible and won't be able to be interacted with.
    */
    mybutton.classList.remove("active");
  }
});

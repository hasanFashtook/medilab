// HIDE AND SHOW NAVEGATION MENU WHEN CLICK ON BUTTON
let navBtn = document.querySelector("nav button");
let list = document.querySelector("nav ul");

navBtn.addEventListener("click",()=>{
  list.classList.toggle("hidden");
})

// SHOW SCROLL BUTTON WHEN USER GET SERVICES SECTION
let scrollBtn = document.querySelector("button.scroll");
window.onscroll = (e)=>{
  e.currentTarget.pageYOffset > 616
  ?scrollBtn.classList.remove("hide")
  :scrollBtn.classList.add("hide")
}
// SCROLL TO TOP OF PAGE WHEN CLICK ON BUTTON
scrollBtn.addEventListener("click",()=>{
  window.scrollTo({
    top: 100,
    left: 0,
    behavior: "smooth",
  })
})

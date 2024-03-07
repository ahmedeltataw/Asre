//library script
import Swiper from "swiper/bundle";
const swiper = new Swiper(".hero-swiper", {
    // Optional parameters

    // loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// my script
let prev = document.querySelector(".swiper-button-prev") as HTMLDivElement;
let next = document.querySelector(".swiper-button-next") as HTMLDivElement;
let Box = document.querySelectorAll(".swiper-box .details") as NodeListOf<HTMLDivElement>;
let HeroSlide = document.querySelectorAll(".hero-swiper .swiper-slide") as NodeListOf<HTMLDivElement>;

let toggleActive = () => {
    let BoxActive = document.querySelector(".swiper-box .details.active") as HTMLDivElement
    let slideActive = document.querySelector(".hero-swiper .swiper-slide.swiper-slide-active") as HTMLDivElement
    if (!BoxActive || !slideActive) {
        Box[0].classList.add("active")
        HeroSlide[0].classList.add("swiper-slide-active")
    }
    let activeIndex = Array.from(Box).indexOf(BoxActive)
    // let activeIndexSlide = Array.from(HeroSlide).indexOf(slideActive)
    
    BoxActive !== null ? BoxActive.classList.remove("active"):''
    slideActive !== null ? slideActive.classList.remove("active"):''
   
    let newIndex = prev ===  event?.target ? activeIndex - 1 : activeIndex + 1; 
    if (newIndex >= Box.length || newIndex >= HeroSlide.length ) {
        newIndex = 0;
      } else if (newIndex < 0) {
        newIndex = Box.length - 1;
        newIndex = HeroSlide.length - 1;
      }
      Box[newIndex].classList.add("active");
      HeroSlide[newIndex].classList.add("swiper-slide-active");
}
toggleActive()
next.addEventListener("click", toggleActive);
prev.addEventListener("click", toggleActive);
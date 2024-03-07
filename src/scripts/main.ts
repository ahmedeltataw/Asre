let List = document.querySelector(".link-list") as HTMLUListElement;
let ListLi = document.querySelectorAll(
  ".link-list li"
) as NodeListOf<HTMLLIElement>;
let Header = document.querySelector("header") as HTMLHeadingElement
let menuBtn = document.querySelector(".icon-nav-base") as HTMLButtonElement;
//function
// *****responsive header *********
let responsiveHeader = () => {
  const Width = window.innerWidth;
  if (Width < 992) {
    List.classList.add("Mobile");
    List.classList.remove("normalMenu");
  } else {
    List.classList.remove("Mobile");
    List.classList.add("normalMenu");
  }
};
responsiveHeader();

// // *****open and close *********
// (((((((((calc height)))))))))
function calcMaxHeight(items: NodeListOf<HTMLLIElement>): number {
  let maxHeight: number = 0;
  // mobileResponsive.classList.add("open")
  items.forEach((link: any) => {
    maxHeight += link.clientHeight
  })

  return maxHeight;
}
// (((((((((animation slide )))))))))
let animationSlide = (dir: 'up' | 'down', totalHeight: NodeListOf<HTMLLIElement>, targetEL: HTMLUListElement) => {
  let height = dir === "down" ? 0 : calcMaxHeight(totalHeight);
  let targetHeight = dir === 'down' ? calcMaxHeight(totalHeight) : 0;
  let speed = dir === 'down' ? (targetHeight / (targetHeight * 0.1)) : (height / (height * 0.1));
  function animate() {
    if ((height <= 0 && dir === 'up') || (height >= targetHeight && dir === 'down')) {
      if (dir === 'up') {
        targetEL.style.height = "0";
      }
      return; // Exit animation loop
    }
    height += dir === "down" ? speed : -speed;
    if (height > targetHeight && dir === 'down') {
      height = targetHeight;
    }
    targetEL.style.height = `${height}px`;
    // Request next animation frame
    requestAnimationFrame(animate);
  }

  // Start the animation loop
  requestAnimationFrame(animate);
}


//(((((((((open responsive header )))))))))
let openMenu = () => {
  List.classList.add("open")
  menuBtn?.classList.toggle("active");
  let isOpen = menuBtn.classList.contains("active");
  menuBtn.setAttribute("aria-expanded", isOpen.toString());
  menuBtn.setAttribute("aria-label", isOpen ? 'open menu' : 'close menu');
  isOpen ? animationSlide('down', ListLi, List) : animationSlide('up', ListLi, List)
  if (!isOpen) {
    setTimeout(() => {
      List.classList.remove("open")
    }, 600);
  }

};




//(((((((((addEventListener )))))))))

window.addEventListener("resize", responsiveHeader);

menuBtn.addEventListener("click", openMenu);

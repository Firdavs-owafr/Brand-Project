const number = document.querySelector(".num");
const text_about = document.querySelector(".text_about");
const text_about_box = document.querySelectorAll(".text_about_box");
const content_box = document.querySelector(".content_box");
const imgArrowBtn = document.querySelector(".icon");
const scrollDownn = document.querySelector(".icon");

const tabs = document.querySelectorAll(".btn");

window.addEventListener("resize", resizing);

function resizing() {
  if (matchMedia("(max-width: 400px)").matches) {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].onclick = (event) => {
        let tabsChildren = event.target.parentElement.children;
        for (let t = 0; t < tabsChildren.length; t++) {
          tabsChildren[t].classList.remove("activeMob");
        }

        event.target.classList.add("activeMob");

        for (let c = 0; c < text_about_box.length; c++) {
          text_about_box[c].classList.remove("content--active");
        }

        text_about_box[i].classList.add("content--active");
      };
    }
  } else {
    const pageHeight = text_about_box[0]?.clientHeight;

    let scrolling = false;

    content_box.onwheel = (event) => {
      if (scrolling) return; //

      if (event.deltaY > 0 && countPage < text_about_box.length - 1) {
        scrolling = true;
        countPage++;
      } else if (event.deltaY < 0 && countPage > 0) {
        scrolling = true;
        countPage--;
      }

      const offsetPage = -countPage * pageHeight;
      text_about.style.transform = `translateY(${offsetPage}px)`;

      setTimeout(() => {
        scrolling = false;
      }, 2000); //
      event.preventDefault();

      imgUpdate();
    };
  }
}

let countPage = 0;

function imgUpdate() {
  if (countPage === text_about_box.length - 1) {
    imgArrowBtn.innerHTML = `
     <img id="imgArrow" src="./img/icon-up.png" alt="icon-img">    
     Scroll up
    `;
  } else {
    imgArrowBtn.innerHTML = `
     <img id="imgArrow" src="./img/icon.png" alt="icon-img">  
     Scroll down

    `;
  }
}

resizing();

imgUpdate();

number.addEventListener("click", () => {
  navigator.clipboard.writeText("+998907167550");
  number.classList.add("active");
  setTimeout(() => number.classList.remove("active"), 1000);
});

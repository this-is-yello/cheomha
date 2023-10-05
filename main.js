const aaa = document.querySelector(".navigation-2");
let b = [true, true, true];
for(let i = 0; i < aaa.childElementCount; i++) {
    aaa.children[i].addEventListener("click", () => {
        if (b[i] == true) {
            aaa.children[i].children[0].style.backgroundColor = "#ff0000";
            b[i] = false;
        } else {
            aaa.children[i].children[0].style.backgroundColor = "#1e1e1e";
            b[i] = true;
        }
    });
}

// ------------------------------ 캐러셀 ------------------------------
// const carouselContent = document.querySelector(".carousel-content");
// const container = document.querySelector(".container");
// const first = container.firstElementChild.cloneNode(true);
// const last = container.lastElementChild.cloneNode(true);

// container.insertBefore(last, container.firstElementChild);
// container.appendChild(first);

// const slideWidth = 100;

// let moveCheck = true;

// container.style.width = container.childElementCount * slideWidth + "vw";

// let num = 1;
// carouselContent.children[0].style.transform = "translateX(-" + (num * 100) + "vw)";

// let inter = setInterval(() => {
//         goNext();
//     }, 4000);
    
// function goNext() {
//     if (moveCheck) {
//         num++;
//         moveCheck = false;

//         setTimeout(() => {
//             if (num === container.childElementCount - 1) {
//                 num = 1;
//                 moveSlide(0);
//             }

//             moveCheck = true;
//         }, 4000);

//         moveSlide(1);
//         // console.log(num + 'pic Carousel');
//     }
// }

// function moveSlide(time) {
//     container.style.transition = time + "s";
//     carouselContent.children[0].style.transform = "translateX(-" + (num * 100) + "vw)";
// }

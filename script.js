let s = function(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    })
}

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
})

let elemC = document.querySelector("#elem-container")
let fixed = document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

let elems = document.querySelectorAll(".elem")
elems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        let image = elem.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

// swipper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    // centeredSlides: true,
    spaceBetween: 30,
  });

// menu

let menu = document.querySelector(".menu");
let full = document.querySelector("#full-scr");
let img = document.querySelector("nav img");
let flag = 0;

menu.addEventListener("click", function(){
    if(flag == 0)
    {
        full.style.top = 0
        img.style.opacity = 0
        document.querySelector(".ri-menu-2-line").style.display = "none"
        document.querySelector(".ri-close-fill").style.display = "inline-block"
        flag = 1
        document.querySelector("#full-scr").addEventListener("wheel", function(e){
            e.preventDefault();
        })
    }
    else
    {
        full.style.top = "-100%"
        img.style.opacity = 1
        document.querySelector(".ri-menu-2-line").style.display = "inline-block"
        document.querySelector(".ri-close-fill").style.display = "none"
        flag = 0
    }
});

let loader = document.querySelector("#loader");

setTimeout(function(){
    loader.style.top = "-100%"
},3000)
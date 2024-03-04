((function init(){

    const tl = gsap.timeline();

    tl.fromTo('.preloader__name', { opacity: 0 }, { opacity: 1, ease:"none",  duration: 2 })
    .to('.preloader__name', { opacity: 0, ease:"none",  duration: 1 });

    tl.fromTo(['.main__about'], { opacity: 0 }, { opacity: 1, ease:"none", duration: 1 }, "-=1");
    
    tl.fromTo( '.header',{ opacity: 0 }, { opacity: 1, ease:"none",  duration: 1 });


    //, "-=2"
    document.addEventListener("DOMContentLoaded", function () {

        const toggleButton = document.getElementById("toogle-btn");
        const burgerMenu = document.getElementById("menu");
        const aboutContainer = document.getElementById("main__about");
        const socialContainer = document.getElementById("about__social");

        const dropDown = document.getElementById("dropDown");
        let subMenu = document.getElementById('subMenu');
        let arrowMenu = document.getElementById('arrowMenu');
             
        dropDown.addEventListener("click", () => {
            dropDown.classList.toggle("active");
            subMenu.classList.toggle('open-menu');
            arrowMenu.classList.toggle('arrowTop');
        });
              
        toggleButton.addEventListener("click", function () {

            burgerMenu.style.opacity = (burgerMenu.style.opacity === "1") ? "0" : "1";
            burgerMenu.style.zIndex = (burgerMenu.style.opacity === "1") ? "2" : "1";
            aboutContainer.style.opacity = (aboutContainer.style.opacity === "0") ? "1" : "0";
            socialContainer.style.zIndex = (burgerMenu.style.opacity === "1") ? "1" : "2";
            setTimeout(function(){
                toggleButton.classList.toggle("active");
            },250)
        });
    });

}))()
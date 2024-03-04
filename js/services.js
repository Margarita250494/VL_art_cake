((function init(){
    
    //animation

    const tl = gsap.timeline();

    tl.fromTo('.preloader__name', { opacity: 0 }, { opacity: 1, ease:"none",  duration: 2 })
    .to('.preloader__name', { opacity: 0, ease:"none",  duration: 1 });

    tl.fromTo('.main__services', { opacity: 0 }, { opacity: 1, ease:"none", duration: 1 }, "-=1");
    
    tl.fromTo( '.header__fixed',{ opacity: 0 }, { opacity: 1, ease:"none",  duration: 1 });

    //button + opacity

    document.addEventListener("DOMContentLoaded", function () {

        const toggleButton = document.getElementById("toogle-btn");
        const burgerMenu = document.getElementById("menu");
        const mainServices = document.getElementById("main_services");

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
            
            mainServices.style.opacity = (mainServices.style.opacity === "1") ? "0" : "1";
           
            setTimeout(function(){
                toggleButton.classList.toggle("active");
            },250)
        });
    });

}))()
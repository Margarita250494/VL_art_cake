

((function init(){
    
    document.addEventListener("DOMContentLoaded", function () {

        const toggleButton = document.getElementById("toogle-btn");
        const burgerMenu = document.getElementById("menu");
        const backgroundImage = document.getElementById("image");
        
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
            backgroundImage.style.opacity = (backgroundImage.style.opacity === "0") ? "1" : "0";
            
            setTimeout(function(){
                toggleButton.classList.toggle("active");
            },250)
            
        });
    });

    //preloader
    const tl = gsap.timeline();

    tl.fromTo('.preloader__name', { opacity: 0 }, { opacity: 1,  duration: 2 })
    .to('.preloader__name', { opacity: 0, ease:"none",duration: 1 });

    tl.fromTo('.background__image', { opacity: 0 }, { opacity: 1, ease:"none",duration: .1 });

    tl.fromTo( '.header',{ opacity: 0 }, { opacity: 1, ease:"none",  duration: 1 });
}))()

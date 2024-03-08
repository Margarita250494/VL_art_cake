 ((function init(){

    const tl = gsap.timeline();

    tl.fromTo('.preloader__name', { opacity: 0 }, { opacity: 1, ease:"none",  duration: 2 })
    .to('.preloader__name', { opacity: 0, ease:"none",  duration: 1 });

    tl.fromTo('.main__all', { opacity: 0 }, { opacity: 1, ease:"none", duration: 1 }, "-=1");
    
    tl.fromTo( '.header__fixed',{ opacity: 0 }, { opacity: 1, ease:"none",  duration: 1 });

    
    
    document.addEventListener("DOMContentLoaded", function () {

        const toggleButton = document.getElementById("toogle-btn");
        const burgerMenu = document.getElementById("menu");
        const mainAll = document.getElementById("main__all");
              
        toggleButton.addEventListener("click", function () {

            burgerMenu.style.opacity = (burgerMenu.style.opacity === "1") ? "0" : "1";
            
            
            mainAll.style.opacity = (mainAll.style.opacity === "1") ? "0" : "1";
            
            setTimeout(function(){
                toggleButton.classList.toggle("active");
            },250)
        });
    });
    
    let all = document.querySelector('.shop__btn .all-btn');
    let sweets = document.querySelector('.shop__btn .sweets-btn');
    let quiches = document.querySelector('.shop__btn .quiches-btn');
    let cakes = document.querySelector('.shop__btn .cakes-btn');

    const allList = document.querySelector('.sweets_cont');
    const nonSweetsList = document.querySelector('.nonSweets_cont');
    const cakesList = document.querySelector('.cakes_cont');

    function toggleList(list) {
    if (list.classList.contains('active')) {
        gsap.from(list,{y:20,opacity:0,duration: .8, ease: 'none'});
        gsap.to(list, { y: 0,opacity:1, duration: .8, ease: 'none' }); // Schließe die Liste
    } 
}

    all.onclick = () =>{
        all.classList.add('active');
        sweets.classList.remove('active');
        quiches.classList.remove('active');
        cakes.classList.remove('active');
        document.querySelector('.sweets_cont').classList.add('active');
        document.querySelector('.nonSweets_cont').classList.add('active');
        document.querySelector('.cakes_cont').classList.add('active');
        toggleList(allList);
    toggleList(nonSweetsList);
    toggleList(cakesList);
        
    }
    sweets.onclick = () =>{
        all.classList.remove('active');
        sweets.classList.add('active');
        quiches.classList.remove('active');
        cakes.classList.remove('active');
        document.querySelector('.sweets_cont').classList.add('active');
        document.querySelector('.nonSweets_cont').classList.remove('active');
        document.querySelector('.cakes_cont').classList.remove('active');
        toggleList(allList);
    toggleList(nonSweetsList);
    toggleList(cakesList);
        
    }
    quiches.onclick = () =>{
        all.classList.remove('active');
        sweets.classList.remove('active');
        quiches.classList.add('active');
        cakes.classList.remove('active');
        document.querySelector('.sweets_cont').classList.remove('active');
        document.querySelector('.nonSweets_cont').classList.add('active');
        document.querySelector('.cakes_cont').classList.remove('active');
        toggleList(allList);
    toggleList(nonSweetsList);
    toggleList(cakesList);
        
    }
    cakes.onclick = () =>{
        all.classList.remove('active');
        sweets.classList.remove('active');
        quiches.classList.remove('active');
        cakes.classList.add('active');
        document.querySelector('.sweets_cont').classList.remove('active');
        document.querySelector('.nonSweets_cont').classList.remove('active');
        document.querySelector('.cakes_cont').classList.add('active');
        toggleList(allList);
    toggleList(nonSweetsList);
    toggleList(cakesList);
    }

}))() 

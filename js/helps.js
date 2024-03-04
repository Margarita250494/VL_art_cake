gsap.registerPlugin(ScrollTrigger);

    /*let tl_1 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".list__img_1,.list__img_2",
          
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
           // snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 6 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 1, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
      });
      
      // add animations and labels to the timeline
      tl_1.from(".list__img_1 img", { scale: 1, autoAlpha: 1 })
    .to(".list__img_1 img", { scale: 0.3, autoAlpha: 0.5 });

    let tl_2 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".list__img_2,.list__img_3",
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
           // snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 6 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 1, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
      });
      
      // add animations and labels to the timeline
      tl_2.from(".list__img_2 img", { scale: 1, autoAlpha: 1 })
    .to(".list__img_2 img", { scale: 0.3, autoAlpha: 0.5 });*/

    //text

    let reveal = document.querySelectorAll(".list__desc") 

reveal.forEach((el) => {
    let headings = el.querySelectorAll("h1, p")

    let tl_4 = gsap.timeline({
        // Add a scroll trigger directly to the timeline
        scrollTrigger: {
            
            trigger: el,
            start: "center 100%", // Adjust as needed
            end:"top 50%",
            toggleActions: "play none none reverse", // Play the animation when the element is in the viewport, reverse when it leaves
            // You can also add more options here as needed
        },
    });

    tl_4.from(headings, { y: 80, stagger: 0.05, opacity: 0, duration: 2, ease: "power1.inOut" })
        .to(headings, { y: 0, stagger: 0.05, opacity: 1, duration: 2, ease: "power1.inOut" })
});
    /*let reveal = document.querySelectorAll(".list__desc") 

    reveal.forEach( (el) => {
    let headings = el.querySelectorAll("h1, p")
  
    let tl_4 = gsap.timeline ()
    tl_4.from(headings, {y:80, stagger:0.05, opacity:0, duration:2, scrub: 1, ease: "power1.inOut"})
    .to(headings, {y:0, stagger:0.05, opacity:1, duration:2, scrub: 1, ease: "power1.inOut"})
  
  ScrollTrigger.create ({
		    trigger: el,
			start: "center 100%", 
            end:"top 50%",
			//markers: true,
			toggleActions: "play none none reverse ",
      animation:tl_4
      })
})*/


   /* let tl_3 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".list__desc_1,.list__desc_2",
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
           // snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 6 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 1, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
      });
      
      // add animations and labels to the timeline
      tl_3.from(".list__desc_1 p", { scale: 1, autoAlpha: 1 })
    .to(".list__desc_1 p", { scale: 0.3, autoAlpha: 0.5 });
     /*let tl_text= gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".list__desc ",
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
           // snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 6 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 1, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
      });   
        tl_text.from(".list__desc_1, .list__desc_2", { scale: 1 })
        .to(".list__desc_1, .list__desc_2", { scale: 0.3});  
    /*gsap.from(".container__list_1",{
        y:150
    })

    /*let tl_1 = gsap.timeline({
        // yes, we can add it to an entire timeline!
        scrollTrigger: {
          trigger: ".container__list_2",
          pin: true, // pin the trigger element while active
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=500", // end after scrolling 500px beyond the start
          scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          snap: {
            snapTo: "labels", // snap to the closest label in the timeline
            duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
            delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
            ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
          },
        },
      });
      
      // add animations and labels to the timeline
      tl_1.addLabel("start")
        .from(".list__desc p", { scale: 0.3, rotation: 45, autoAlpha: 0 })
        .addLabel("color")
        .from(".list__desc", { backgroundColor: "#28a92b" })
        .addLabel("spin")
        .to(".list__desc", { rotation: 360 })
        .addLabel("end");*/
    /*gsap.from(".container__list_1",{
        y:150
    })
    gsap.to(".container__list_1",{
        y:0,
        duration:4,
        scrollTrigger:".container__list_1"
    })
    gsap.from(".container__list_2",{
        y:250
    })
    gsap.to(".container__list_2",{
        y:0,
        duration:5,
        scrollTrigger:".container__list_2"
    })
    gsap.from(".container__list_3",{
        y:350
    })
    gsap.to(".container__list_3",{
        y:0,
        duration:6,
        scrollTrigger:".container__list_3"
    })
    gsap.from(".container__list_4",{
        y:450
    })
    gsap.to(".container__list_4",{
        y:0,
        duration:7,
        scrollTrigger:".container__list_4"
    })*/
    

    /* gsap.registerPlugin(ScrollTrigger);

// Iteriere über jedes .list__desc-Element
/*document.querySelectorAll('.list__desc').forEach(el => {
    // Erstelle eine Timeline für jedes Element
    let text_tl = gsap.timeline({
        scrollTrigger: {
            trigger: el, // Trigger ist das aktuelle .list__desc-Element
            //scrub: true,
            start: "center 100%", // Adjust as needed
            end:"top 50%",
            markers:true,
            toggleActions: "play none none reverse",
        }
    });

    // Füge die Tween-Animationen zur Timeline für jedes Element hinzu
    text_tl.from(el, {y: 100, opacity: 0, duration: 2, ease: "power1.inOut" });
    text_tl.to(el, {y: 0, opacity: 1, duration: 2, ease: "power1.inOut" });
});*/


/*let reveal = document.querySelectorAll(".list__desc") 

reveal.forEach( (el) => {
  let headings = el.querySelectorAll("h1, p")
  
  
  let tl = gsap.timeline ()
  .from(headings, {y:80, opacity:0, duration:1, ease:"power3.out"})
  
  ScrollTrigger.create ({
		  trigger: el,
			start: "center 100%", 
      end:"top 50%",
			markers: true,
			toggleActions: "play none none reverse ",
      animation:tl
      })
}) */
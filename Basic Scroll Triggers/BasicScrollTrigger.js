const tl = gsap.timeline();

tl.from("#page1 #box", {
    duration: 1,
    delay: 1,
    // scale:1,
    scale: 0,
    rotate: 360,
})

tl.from("#page2 #box", {
    // duration: 1,
    delay: 1,
    scale: 0,
    rotate: 360,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        start:"top 95%",
        end:"top 8%",
        markers:true,
        scrub:true,
    }
})

tl.from("#page3 #box", {
    // duration: 1,
    delay: 1,
    scale: 0,
    rotate: 360,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        start:"top 95%",
        end:"top 8%",
        markers:true,
        scrub:true,
    }
})

tl.from("#page4 #box", {
    // duration: 1,
    delay: 1,
    scale: 0,
    rotate: 360,
    scrollTrigger:{
        trigger:"#page4 #box",
        scroller:"body",
        start:"top 95%",
        end:"top 8%",
        markers:true,
        scrub:true,
    }
})
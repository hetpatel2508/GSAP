function timing() {
    let text = document.querySelector("#starting>div");

    let a = 0;

    const intervalId = setInterval(() => {
        a = a + Math.floor(Math.random() * 20);
        text.innerHTML = `${a}%`;
        if (a > 100) {
            text.innerHTML = `100%`;
            clearInterval(intervalId);
        }
    }, 150);
}


let time_line = gsap.timeline();

time_line.to("#starting>div", {
    fontSize: 150,
    onStart:timing(),
    duration:1,
    delay:0.5,
})

time_line.to("#starting", {
    transform: "translateY(-100%)",
    opacity: 0,
    duration: 1,
    // delay:0.5,
    // display: none,
    // opacity:1,
})

time_line.from("#nav_img, #nav_options>div , #nav_buttons>div", {
    y: -100,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger: 0.21,
})

time_line.from("#content>div", {
    y: 100,
    opacity: 0,
    stagger: 0.25,
})

time_line.from("#content>img", {
    scale: 0.7,
    opacity: 0,
})

time_line.from("#content>h3", {
    y: -20,
    opacity: 0,
    yoyo: true,
    repeat: -1,
})

gsap.to("#page1>div", {
    transform: "translateX(-150%)",
    duration: 5,
    delay: 0.3,
    yoyo: true,
    scrollTrigger: {
        trigger: "#page1>div",
        scroller: "body",
        // markers:true,
        scrub: 1,
        start: "top 20%",
        end: "top -50%",
        pin: true,
    }
})


gsap.from(".scroll_trigger_container1>div", {
    opacity: 0,
    duration: 1,
    delay: 0.3,
    yoyo: true,
    fontSize: 70,
    scrollTrigger: {
        trigger: ".scroll_trigger_container1>div",
        scroller: "body",
        // markers:true,
        scrub: 1,
        start: "top 80%",
        end: "top 60%",
    }
})

gsap.from(".scroll_trigger_container2>div", {
    opacity: 0,
    duration: 1,
    delay: 0.3,
    yoyo: true,
    fontSize: 70,
    scrollTrigger: {
        trigger: ".scroll_trigger_container2>div",
        scroller: "body",
        // markers:true,
        scrub: 1,
        start: "top 80%",
        end: "top 60%",
    }
})
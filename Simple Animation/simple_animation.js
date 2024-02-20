var time_line = gsap.timeline();

time_line.from("#nav_img, #nav_options>div , #nav_buttons>div",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.21,
})

time_line.from("#content>div",{
    y:100,
    opacity:0,
    stagger:0.25,
})

time_line.from("#content>img",{
    scale:0.7,
    opacity:0,
})

time_line.from("#content>h3",{
    y:-20,
    opacity:0,
    yoyo:true,
    repeat:-1,
})
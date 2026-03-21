gsap.registerPlugin(ScrollTrigger)

var tl = gsap.timeline();
document.addEventListener("DOMContentLoaded", () => {
    tl.to('#nav', {
        x:0,
        opacity:1,
        duration:1,
        ease: "power2.in"
    })
    tl.to('#nav-link a', {
        x:0,
        duration:1,
        ease: "power2.in",
        stagger:0.2
    }, "-=0.5")
});
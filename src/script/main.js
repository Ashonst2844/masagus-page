var tl = gsap.timeline();
document.addEventListener("DOMContentLoaded", () => {
    tl.to("nav", {
        y: 20,
        duration: 1,
        opacity: 1,
        ease: "power2.in",
    })
    tl.to("nav a", {
        y:0,
        duration: 1,
        opacity: 1,
        ease: "power2.in",
        stagger:0.4,
    }, "-=0.5");
});
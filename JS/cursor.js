const cursor = document.querySelector("#cursor");
const body = document.querySelector("body");
const cards = document.querySelectorAll(".light-big");


body.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: "backout",
        duration: 0.2
    })
});

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        gsap.to(cursor, {
            scale: 8,
            opacity: 0.2,
            ease: "backout",
            duration: 0.2
        })
        
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1,
            ease: "backout",
            duration: 0.2
        })
    });
});





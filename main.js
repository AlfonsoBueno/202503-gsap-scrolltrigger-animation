gsap.registerPlugin(ScrollTrigger);

window.addEventListener('load', () => {
    gsap.timeline({
        scrollTrigger: {
            trigger: '.wrapper',
            start: 'top top',
            end: "bottom top",
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
        },
        defaults: {
            duration: 1, // Duración por defecto para todas las animaciones
            ease: "none" // Easing por defecto
        }
    })
    // Animación de la imagen frontal
    .to(".img_front img", {
        scale: 2,
        z: 250,
        transformOrigin: "center center",
    })
    // Animación de la sección .hero
    .to("section.hero", {
        scale: 1.6,
        boxShadow: "10px 0 0px #000 inset",
        transformOrigin: "center center",
    }, "<")
    // Hace desaparecer la imagen frontal
    .to(".img_front", {
        autoAlpha: 0,
    })
    // Animación de la sección .hero e .intro moviéndose hacia la izquierda
    .to(["section.hero", ".intro"], {
        xPercent:150,
        ease: "power2.inOut",
    })
    // Aparece la sección .about desde la izquierda
    .fromTo(".about",
        { xPercent: -100, }, // Comienza fuera de la pantalla a la izquierda
        { xPercent: 0}, // Se mueve al viewport y aparece
        "<" // Inicia 0.5 segundos antes de que .hero termine
    )
    .fromTo(".about span", 
        { scale: 0, }, // Comienza fuera de la pantalla a la izquierda
        { scale: 1, delay:0.5}, // Se mueve al viewport y aparece
        "<"
    )
    .fromTo(".other",
        { xPercent: 200, }, // Comienza fuera de la pantalla a la izquierda
        { xPercent: 0}, // Se mueve al viewport y aparece
        "+=0.5"
    )
    .fromTo(".other span", 
        { scale: 0, }, // Comienza fuera de la pantalla a la izquierda
        { scale: 1.5,delay:0.5}, // Se mueve al viewport y aparece
        "-=0.5"
    );;
});

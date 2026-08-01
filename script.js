// Scroll Reveal Animation

const cards = document.querySelectorAll(".card");
const sections = document.querySelectorAll(".section");


const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;


    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;


        if(cardTop < triggerBottom){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });


    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;


        if(sectionTop < triggerBottom){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

};



window.addEventListener("scroll", revealOnScroll);


window.addEventListener("load", () => {


    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "0.6s ease";

    });


    sections.forEach(section => {

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "0.8s ease";

    });


    revealOnScroll();

});

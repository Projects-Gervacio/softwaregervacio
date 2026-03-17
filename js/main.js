// Partículas

tsParticles.load("particles",{
fpsLimit:60,
particles:{
number:{value:60},
color:{value:"#f4c430"},
links:{
enable:true,
distance:150,
color:"#f4c430",
opacity:0.3
},
move:{
enable:true,
speed:1
},
size:{
value:2
}
}
});


// Scroll Reveal

const sections = document.querySelectorAll(".section");

function reveal(){

const windowHeight = window.innerHeight;

sections.forEach(section=>{

const elementTop = section.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){

section.classList.add("show");

}

});

}

window.addEventListener("scroll",reveal);
reveal();

// Hero scroll animation tipo Apple

const heroBg = document.querySelector(".hero-bg");
const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

let scroll = window.scrollY;

heroBg.style.transform = `scale(${1.2 + scroll * 0.0005})`;

heroContent.style.transform = `translateY(${scroll * 0.2}px) scale(${1 - scroll * 0.0005})`;

});
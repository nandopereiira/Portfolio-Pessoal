// ANIMATION TYPING SCRIPT 

let typed = new Typed('.typing', {
  strings: ['Developer','Designer','Youtuber','Freelancer'],
  typeSpeed: 100, //tempo de cada elemento do array  
  smartBackspace: true,
  loop: true,   // ficar em loop
  startDelay: 500, //velocidade do inicio do Array
  backSpeed: 150, //velocidade que será apagado  
});

//TEMA CLARO E ESCURO

let bodyTheme = document.querySelector('body');
let btnDark = document.querySelector('.btn-dark');
let avisoTema = document.querySelector('.theme-html');

function switchIconDark() {
  if (bodyTheme.classList.contains('dark-theme')) {
    btnDark.classList.replace('fa-moon','fa-sun');  
    avisoTema.innerHTML = 'Light Theme';  
  } else {
    btnDark.classList.replace('fa-sun','fa-moon');
    avisoTema.innerHTML = 'Dark Theme';   
  }
}
btnDark.addEventListener('click', () => {  
  bodyTheme.classList.toggle('dark-theme');
  switchIconDark()
});


// ESCOLHA DAS CORES

let corAzul = document.querySelector('.ball-color.blue');
let corLaranja = document.querySelector('.ball-color.orange');
let corRoxo = document.querySelector('.ball-color.purple');
let corRosa = document.querySelector('.ball-color.pink');
corAzul.addEventListener('click', () => {
  document.documentElement.style.setProperty("--second-text-color", "#4863F7")  // cor principal da Page
  document.documentElement.style.setProperty("--bg-alpha", "#4863F76a")        //BG colorido transparent
});
corLaranja.addEventListener('click', () => {
  document.documentElement.style.setProperty("--second-text-color", "#dca014")
  document.documentElement.style.setProperty("--bg-alpha", "#dca01457")
});
corRoxo.addEventListener('click', () => {
  document.documentElement.style.setProperty("--second-text-color", "#8257E5")
  document.documentElement.style.setProperty("--bg-alpha", "#8257E56a")
});
corRosa.addEventListener('click', () => {
  document.documentElement.style.setProperty("--second-text-color", "#cb14dc")
  document.documentElement.style.setProperty("--bg-alpha", "#cb14dc6a")
});

// MENU Scroll Sticky

window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  if (window.scrollY > 30) {
    header.classList.add('headerfixo'); 
    if (!bodyTheme.classList.contains('dark-theme')) {
      document.documentElement.style.setProperty("--span-logo", "#fff"); //Muda a Variável (span-logo) no tema light na logo
    }
  } else {
    header.classList.remove('headerfixo'); //fixed o menu nav
    document.documentElement.style.setProperty("--span-logo", "var(--second-text-color)")//Muda a Variável (span-logo) no tema dark na logo
  }
});


// -------------- MENU MOBILE MENU ------------


let btnMenu = document.querySelector('.btn-menu');
let nav = document.querySelector('nav');
let mainContainer = document.querySelector('.main-container');

btnMenu.addEventListener('click', toggleMenu)

function toggleMenu() {  
  if (nav.classList.contains('closed')) {
    nav.classList.remove('closed');
    nav.classList.add('active');
    mainContainer.style.opacity = '0.1'  // opacidade em TODO CONTAINER Principal (escopo Global)
    gearIcon.style.opacity = '0' // esconde icone de engrenagem do custom menu (escopo Global)
  } else {
    nav.classList.remove('active');
    nav.classList.add('closed');
    mainContainer.style.opacity = '1' // REVELA TODO CONTAINER Principal (escopo Global)
    gearIcon.style.opacity = '1' // REVELA icone de engrenagem do custom menu (escopo Global)
  }  
};

// BOTÃO DE COSTUMIZAÇÃO

let customMenu = document.querySelector('.custom-box');
let gearIcon = document.querySelector('#custom-icon');
let closedCustomIcon = document.querySelector('#closed-custom-menu');

gearIcon.addEventListener('click', () => {  
  nav.classList.remove('active');
  nav.classList.add('closed');
  mainContainer.style.opacity = '1'
  customMenu.classList.toggle('active') ;     
});

closedCustomIcon.addEventListener('click', () => {
  customMenu.classList.toggle('active');
});

// --------------------------- SCROLL REVEAL -----------------------
window.sr = ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1100,
  delay: 100
});

sr.reveal('.ola-mundo', {
  origin:'left',  
  duration: 1200
});
sr.reveal('.work-area', {
  origin:'left',
  duration: 2700
});
sr.reveal('.name-area', {
  origin:'left',
  duration: 2400
});
sr.reveal('.photo-area', {
  origin:'right',
  duration: 2500
});
sr.reveal('.container-social i,.container-social-mobile i', {
  origin:'bottom',  
  delay:500,
  interval:200,
  duration: 3000
});
sr.reveal('#btn-reveal',{
  origin:'bottom',
  duration: 3000
});
sr.reveal( '#seta',{
  origin:'top',
  duration: 3100
});
sr.reveal('.btn-contact-mobile',{
  origin:'top',
  duration: 3100
});


// ---------------------- ABOUT ME REVEAL SCROLL ------------------

sr.reveal('.header-section', {
  origin:'left',
  duration: 1500
});
sr.reveal('.about-area-left', {
  origin:'top',
  duration: 2100
});
sr.reveal('.about-area-right', {
  origin:'bottom',
  duration: 2300
});

// ---------------------- PROJECT REVEAL SCROLL ------------------
sr.reveal('.mold-ui-card', {
  origin:'bottom',    
  interval:200,
  duration: 1000
});

// ---------------------- SKILL REVEAL SCROLL ------------------
sr.reveal('.skill-area-left .img-skill', {
  origin:'bottom',    
  duration: 3000
});
sr.reveal('.skill-area-left ', {
  origin:'top',    
  duration: 2200
});
sr.reveal('.skill-area-right', {
  origin:'bottom',    
  duration: 2500
});

sr.reveal('.wrapper', {
  origin:'right',  
  delay:100,  
  duration: 2000
});

sr.reveal('.testimonial-card', {
  origin:'top',  
  delay:100,
  interval:200,
  duration: 1000
});

sr.reveal('.contact-area-left ', {
  origin:'top',  
  delay:200,  
  duration: 2200
});
sr.reveal('.contact-area-right', {
  origin:'bottom',  
  delay:300,  
  duration: 2500
});

sr.reveal('.credits', {
  origin:'left',  
  delay:100,  
  duration: 2500
});
sr.reveal('.social-footer i', {
  origin:'right',  
  delay:200,
  interval:200,
  duration: 3000
});

// let customMenu = document.querySelector('.custom-box');
// let customIcon = document.querySelector('#custom-icon');

// function switchIconGear() {
//   if (customMenu.classList.contains('active')) {
//     customIcon.classList.replace('fa-gear','fa-x');
//   } else {
//     customIcon.classList.replace('fa-x','fa-gear');
//   }
// } 
// customIcon.addEventListener('click', () => {
//   customMenu.classList.toggle('active')  
//   switchIconGear()
// });
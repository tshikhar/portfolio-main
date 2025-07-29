// |||||||||||| MENU ICON NAVBAR |||||||||||
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
} 

// |||||||||||||||| POPUP |||||||||||||||||||||

myButton.addEventListener("click", function () {
    myPopup.classList.add("show");
});
closePopup.addEventListener("click", function () {
    myPopup.classList.remove("show");
});
window.addEventListener("click", function (event) {
    if (event.target == myPopup) {
        myPopup.classList.remove("show");
    }
});



// |||||||||||| SCROLL SECTION ACTIVE LINK |||||||||||
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>=offset && top<offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });


    // |||||||||||| STICKY NAVBAR |||||||||||
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY>100);

    // |||||||||||| remove menu icon navbar when click navbar Link (scroll) |||||||||||
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}

// ||||||||||||||||| SLIDER MOVING ||||||||||||||||||||||

const slides = document.querySelectorAll('.slide');
var size = slides.length;
var counter = 0;

slides.forEach((slide, index)=>{
    slide.style.left = `${index*100}%`
})

function slideImage (){
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}

function goNext(){
    counter = (counter+1)%size;
    slideImage();
}

function goPrev(){
    counter--;
    if(counter === -1){
        counter = size-1;
    }
    slideImage();
}

// |||||||||||||||| DARK LIGHT MODE |||||||||||||||||||||
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

// |||||||||||||||| SCROLL REVEAL |||||||||||||||||||||

ScrollReveal({ 
    // reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .project-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right '});

window.addEventListener("load", function() {
    const form = document.getElementById('my-form');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
        alert("Your message is sent!");
        document.contact-form.reset();
      })
    });
  });
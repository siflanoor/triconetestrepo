////navbar plus hamburger menu

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Toggle dropdown on click for small screens
document.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('active');
});


////Get the button or goto top button id
let topBtn = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}


//// download pdf button
window.addEventListener('scroll', function() {
    const downloadButton = document.getElementById('download-button');
    if (window.scrollY > 0) {
        downloadButton.style.display = 'block';
    } else {
        downloadButton.style.display = 'none';
    }
});


//// preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    preloader.style.display = 'none';
    content.style.display = 'block';
});



//// emailjs
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_pjsd8ue", "template_cfoz1po", parms)

}



//// landing image about_us 
let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  document.querySelector('.slider').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}



//// projects
const projectsContainer = document.querySelector('.projects-container');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let scrollPosition = 0;

const cardWidth = 220; // Width of a card + gap (adjust if necessary)

// Move projects container left
leftArrow.addEventListener('click', () => {
  scrollPosition += cardWidth;
  if (scrollPosition > 0) {
    scrollPosition = 0; // Prevent over-scrolling to the left
  }
  projectsContainer.style.transform = `translateX(${scrollPosition}px)`;
});

// Move projects container right
rightArrow.addEventListener('click', () => {
  const containerWidth = projectsContainer.scrollWidth;
  const visibleWidth = projectsContainer.parentElement.offsetWidth;

  if (Math.abs(scrollPosition) < containerWidth - visibleWidth) {
    scrollPosition -= cardWidth;
  } else {
    scrollPosition = -(containerWidth - visibleWidth); // Prevent over-scrolling to the right
  }
  projectsContainer.style.transform = `translateX(${scrollPosition}px)`;
});
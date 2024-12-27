function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// Toggle dropdown on click for small screens
document.querySelector('.dropdown-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('active');
});


// Get the button
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

// download pdf button
window.addEventListener('scroll', function() {
    const downloadButton = document.getElementById('download-button');
    if (window.scrollY > 0) {
        downloadButton.style.display = 'block';
    } else {
        downloadButton.style.display = 'none';
    }
});

// preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const content = document.getElementById('content');

    preloader.style.display = 'none';
    content.style.display = 'block';
});

// emailjs
function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_pjsd8ue", "template_cfoz1po", parms)

}

// landing image
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


// ongoing projects
function showProjects(type) {
  const projectDisplay = document.getElementById('project-display');
  
  // Clear the previous images
  projectDisplay.innerHTML = '';

  // Define image data for each category
  const projects = {
    latest: [
      'images/telal_slab.jpeg',
      'images/kezad.jpeg',
    ],
    ongoing: [
      'images/ongoing1.jpeg',
      'images/ongoing2.jpeg',
      'images/ongoing3.jpeg',
    ],
    // completed: [
    //   'images/completed1.jpg',
    //   'images/completed2.jpg',
    //   'images/completed3.jpg',
    // ],
  };

  // Add images dynamically
  if (projects[type]) {
    projects[type].forEach((imgSrc) => {
      const img = document.createElement('img');
      img.src = imgSrc;
      projectDisplay.appendChild(img);
    });
  } else {
    projectDisplay.innerHTML = '<p>No projects to display.</p>';
  }
}

// projects
let cards = document.querySelectorAll('.card');
let currentIndex = 0;

function showNextCard() {
  cards[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % cards.length;
  cards[currentIndex].classList.add('active');
}

// You can set an interval to change cards automatically
setInterval(showNextCard, 3000); // Switch every 3 seconds
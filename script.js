////navbar plus hamburger menu

// Function to toggle the hamburger menu
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector('.hamburger');

  // Check if the click is outside the menu or hamburger icon
  if (
      !navLinks.contains(event.target) && 
      !hamburger.contains(event.target)
  ) {
      navLinks.classList.remove("active");
  }
});

// Toggle dropdown on click for small screens
document.querySelector('.dropdown-toggle').addEventListener('click', function (e) {
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


////projects section filtering


document.addEventListener("DOMContentLoaded", function () {
  showProjects("completed"); // Show completed projects by default
});

function showProjects(category) {
  let completedProjects = document.querySelectorAll(".project-card[data-category='completed']");
  let ongoingProjects = document.querySelectorAll(".project-card[data-category='ongoing']");

  if (category === "completed") {
    completedProjects.forEach(project => project.style.display = "flex");
    ongoingProjects.forEach(project => project.style.display = "none");
  } else if (category === "ongoing") {
    completedProjects.forEach(project => project.style.display = "none");
    ongoingProjects.forEach(project => project.style.display = "flex");
  }
}



///// to get clean url


document.addEventListener("DOMContentLoaded", function () {
  // Get the current URL path (e.g., "/contracting")
  let path = window.location.pathname;

  // Define redirections (Clean URL → Actual HTML File)
  let redirects = {
      "/contracting": "/templates/contracting.html",
      "/maintenance": "/templates/maintenance.html",
      "/mep": "/templates/mep.html",
      "/telal_masdar": "/templates/telal_masdar.html",
      "/kizad_project1": "/templates/kizad_project1.html",
      "/m15_project": "/templates/m15_project.html",
      "/Park1_pakage_SH1_G1": "/templates/Park1_pakage_SH1_G1.html",
      "/Park2_pakage_SH9_G1": "/templates/Park2_pakage_SH9_G1.html",
      "/telal_mbz_drinage": "/templates/telal_mbz_drinage.html",
      "/telal_mbz_slab": "/templates/telal_mbz_slab.html",
      "/bateen_villa": "/templates/bateen_villa.html"
  };

  // If the path matches, redirect to the correct HTML file
  if (redirects[path]) {
      window.location.href = redirects[path];  // Redirect to the correct file
  }
});
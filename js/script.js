// NAV BAR

const menuBtn = document.querySelector(".menu-open-icon");
const navMenu = document.querySelector(".in-items");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const img = menuBtn.querySelector("img");

    if (navMenu.classList.contains("active")) {
        img.src = "assets/icons/menu-close.svg";
    } else {
        img.src = "assets/icons/menu-open.svg";
    }
});

// FEEDBACK SECTION

const feedbackContainer = document.querySelector('.feedbacks');
const prevButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

const scrollAmount = 352; 

// WHEN THE NEXT BUTTON IS CLICKED, SCROLL RIGHT

nextButton.addEventListener('click', (event) => {
    event.preventDefault();
    feedbackContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// WHEN THE PREVIOUS BUTTON IS CLICKED, SCROLL LEFT

prevButton.addEventListener('click', (event) => {
    event.preventDefault();
    feedbackContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

// SCROLL SECTION
 
  function openModal(id) {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + scrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
    document.getElementById(id).classList.add('active');
  }
 
  function closeModal(id) {
    document.getElementById(id).classList.remove('active');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    window.scrollTo(0, scrollY);

    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: scrollY, behavior: 'instant' });
    document.documentElement.style.scrollBehavior = '';
  }

  function switchModal(closeId, openId) {
    closeModal(closeId);
    openModal(openId);
  }
 
// CLOSE ON OVERLAY CLICK

  document.querySelectorAll('.overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) closeModal(this.id);
    });
  });
 
// CLOSE ON ESCAPE KEY

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.overlay.active').forEach(o => closeModal(o.id));
    }
  });
 
  function handleNext() {
    const fname = document.getElementById('loan-fname').value.trim();
    const lname = document.getElementById('loan-lname').value.trim();
    const phone = document.getElementById('loan-phone').value.trim();
    const email = document.getElementById('loan-email').value.trim();
    const type  = document.getElementById('loan-type').value;
    const amount = document.getElementById('loan-amount').value.trim();
    if (!fname || !lname || !phone || !email || !type || !amount) {
      alert('Please fill in all fields.'); return;
    }
    alert('Loan request submitted! We will contact you shortly.');
    closeModal('loanModal');
  }
 
  function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const pwd   = document.getElementById('login-password').value;
    const conf  = document.getElementById('login-confirm').value;
    if (!email || !pwd || !conf) { alert('Please fill in all fields.'); return; }
    if (pwd !== conf) { alert('Passwords do not match.'); return; }
    alert('Login successful!');
    closeModal('loginModal');
  }
 
  function handleSignup() {
    const email = document.getElementById('signup-email').value.trim();
    const pwd   = document.getElementById('signup-password').value;
    const conf  = document.getElementById('signup-confirm').value;
    if (!email || !pwd || !conf) { alert('Please fill in all fields.'); return; }
    if (pwd !== conf) { alert('Passwords do not match.'); return; }
    alert('Account created successfully!');
    closeModal('signupModal');
  }

// PRICING SECTION

  document.querySelector('#nav-pricing').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#pricing').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('load', function () {
  if (window.location.hash === '#pricing') {
    const section = document.querySelector('#pricing');
    if (section) {
      setTimeout(() => section.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  }
});

// CONTENT TRANSITION

const revealElements = document.querySelectorAll('#main-heading, #main-description');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(el => observer.observe(el));
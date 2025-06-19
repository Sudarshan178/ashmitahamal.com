document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for internal links
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Highlight active nav link based on current page
  const navLinks = document.querySelectorAll('nav ul li a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === '' && currentPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Fade-in animation on scroll using Intersection Observer
  const faders = document.querySelectorAll('.fade-in');
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Header glow effect on logo hover
  const logo = document.querySelector('.nav-logo');
  if (logo) {
    logo.addEventListener('mouseenter', () => {
      logo.style.color = '#fff8dc';
      logo.style.textShadow = '0 0 12px #fff8dc, 0 0 20px #d4af37, 0 0 25px #fff8dc';
    });
    logo.addEventListener('mouseleave', () => {
      logo.style.color = '#d4af37';
      logo.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.9)';
    });
  }

  // Mobile nav toggle behavior (✅ just added)
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('nav ul');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }
});
// Scroll-to-top button behavior
const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});
scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Announcement banner dismiss
const announcement = document.getElementById('announcement');
const announcementClose = document.getElementById('announcementClose');
announcementClose.addEventListener('click', () => {
  announcement.classList.add('hidden');
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
// Video Work: play on hover, pause on leave
document.querySelectorAll('.video-thumb').forEach(video => {
    video.addEventListener('mouseenter', () => video.play());
    video.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });
  });

// Close mobile nav after clicking a link
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form (front-end only — wire up to a real endpoint later)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = form.name.value.trim();

  if (!form.checkValidity()) {
    status.textContent = 'Please fill in all fields with a valid email.';
    return;
  }

  status.textContent = `Thanks, ${name}! Your message has been sent.`;
  form.reset();
});
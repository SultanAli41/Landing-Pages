const slider = document.querySelector('.hero-right');
let isDown = false;
let startX;
let scrollLeft;

// --- Smooth scrolling style ---
slider.style.scrollBehavior = 'smooth';

// --- Drag to scroll (slow & smooth) ---
slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.cursor = 'grabbing';
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.style.cursor = 'default';
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.style.cursor = 'default';
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 0.5; // smaller value = slower scroll
  slider.scrollLeft = scrollLeft - walk;
});

// --- Mouse wheel to horizontal scroll (smooth & slow) ---
slider.addEventListener('wheel', (e) => {
  e.preventDefault();
  slider.scrollBy({
    left: e.deltaY * 0.5, // smaller value = slower scroll
    behavior: 'smooth'
  });
});

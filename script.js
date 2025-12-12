window.addEventListener('scroll', () => {
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
const rect = card.getBoundingClientRect().top;
const screen = window.innerHeight;
if (rect < screen - 50) card.classList.add('show');
});
});


// Add class animation
document.querySelectorAll('.card').forEach(card => {
card.style.opacity = 0;
card.style.transform = 'translateY(40px)';
});
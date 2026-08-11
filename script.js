const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const words = ['Belajar.', 'Berkarya.', 'Membangun.'];
const rotatingText = document.getElementById('rotating-text');
let wordIndex = 0;
const revealElement = document.querySelectorAll('.reveal');

if (localStorage.getItem('theme') === 'terang') {
    body.classList.add('mode-terang');
    toggleBtn.setItem ='☀️ Terang';
} else {
    toggleBtn.setItem = '🌙 Gelap';
};

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('mode-terang');

    if (body.classList.contains('mode-terang')){
        toggleBtn.textContent = '☀️ Terang';
        localStorage.setItem('theme', 'terang');
    } else {
        toggleBtn.textContent = '🌙 Gelap';
        localStorage.setItem('theme', 'gelap');
    }
});

setInterval (() => {
    rotatingText.classList.add('fade-out');

    setTimeout (() => {
        wordIndex = (wordIndex + 1) % words.length;
        rotatingText.textContent = words[wordIndex];
        rotatingText.classList.remove('fade-out');
    }, 400);
}, 2000);

const observer = new IntersectionObserver ((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, {
    threshold: 0.15
});

revealElement.forEach(el => observer.observe(el));
// Memastikan elemen ada sebelum digunakan
const pages = ['page1', 'page2', 'page3', 'page4', 'page5'];

function showPage(pageId) {
    pages.forEach(id => {
        const page = document.getElementById(id);
        if (page) page.classList.add('hidden');
    });
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.remove('hidden');
}

// Navigasi Utama
document.getElementById('startBtn').addEventListener('click', () => showPage('page2'));

document.getElementById('blowBtn').addEventListener('click', () => {
    document.getElementById('cakeEmoji').innerText = '🍰';
    setTimeout(() => {
        showPage('page3');
        startTypingEffect();
    }, 1000);
});

document.getElementById('fotoBtn').addEventListener('click', () => showPage('page4'));
document.getElementById('akhirBtn').addEventListener('click', () => showPage('page5'));

// Efek Mengetik di Halaman 3
function startTypingEffect() {
    const paragraphs = document.querySelectorAll('.surat p');
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.style.display = 'block';
        }, index * 1000); // Muncul tiap 1 detik
    });
}

// Animasi Hati Terbang (Untuk Halaman Akhir)
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 5000);
}

// Panggil animasi di halaman akhir
document.getElementById('akhirBtn').addEventListener('click', () => {
    setInterval(createFloatingHeart, 500);
});

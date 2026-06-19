// --- Inisialisasi Elemen ---
const startBtn = document.getElementById('startBtn');
const blowBtn = document.getElementById('blowBtn');
const fotoBtn = document.getElementById('fotoBtn');
const akhirBtn = document.getElementById('akhirBtn');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const cakeEmoji = document.getElementById('cakeEmoji');

// --- Navigasi Halaman ---
startBtn.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
});

blowBtn.addEventListener('click', () => {
    cakeEmoji.innerHTML = '🍰';
    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        startTypingEffect();
    }, 1200);
});

fotoBtn.addEventListener('click', () => {
    page3.classList.add('hidden');
    page4.classList.remove('hidden');
    
    // Video Play - Diberi proteksi agar tidak merusak script
    const video = document.getElementById('myVideo');
    if (video) {
        video.play().catch(e => console.log("Video auto-play diblokir browser, tidak masalah."));
    }
});

akhirBtn.addEventListener('click', () => {
    page4.classList.add('hidden');
    page5.classList.remove('hidden');
});

// --- Efek Mengetik Paragraf ---
function startTypingEffect() {
    const paragraphs = document.querySelectorAll('.surat p');
    paragraphs.forEach((p, index) => {
        p.style.display = 'none'; // Reset awal
        setTimeout(() => {
            p.style.display = 'block';
        }, index * 1000); // Muncul tiap 1 detik
    });
}

// --- Animasi Hati Terbang (Ringan & Aman) ---
function createHeart() {
    const heart = document.createElement('div');
    const symbols = ['❤️', '✨'];
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    heart.className = 'floating-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    
    // Hapus hati otomatis setelah animasi selesai untuk meringankan memory
    setTimeout(() => heart.remove(), 5000);
}

// Hanya jalankan animasi di Halaman 1 dan Halaman 5 agar tidak memberatkan
setInterval(() => {
    if (!page1.classList.contains('hidden') || !page5.classList.contains('hidden')) {
        createHeart();
    }
}, 800);

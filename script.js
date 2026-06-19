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

// Pindah dari halaman 1 ke halaman 2
startBtn.addEventListener('click', () => {
    page1.classList.add('hidden');
    page2.classList.remove('hidden');

    // --- TAMBAHAN: MULAI MUSIK ---
    const audio = document.getElementById('myMusic');
    if (audio) {
        audio.volume = 0.2; // Suara pelan (20%)
        audio.play().catch(e => console.log("Menunggu interaksi pengguna..."));
    }
});

// Aksi ketika tombol Tiup Lilin diklik
blowBtn.addEventListener('click', () => {
    cakeEmoji.innerHTML = '🍰';
    
    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        startTypingEffect();
    }, 1200); 
});

// Pindah dari halaman 3 ke halaman 4 (Foto & Video)
fotoBtn.addEventListener('click', () => {
    page3.classList.add('hidden');
    page4.classList.remove('hidden');

    // --- TAMBAHAN: MULAI VIDEO ---
    const video = document.getElementById('myVideo');
    if (video) {
        video.play().catch(e => console.log("Video perlu diklik manual"));
    }
});

// Pindah dari halaman 4 ke halaman 5 (Pesan Terakhir)
akhirBtn.addEventListener('click', () => {
    page4.classList.add('hidden');
    page5.classList.remove('hidden');
    
    // --- TAMBAHAN: OPSIONAL (Hentikan musik saat di halaman terakhir) ---
    // const audio = document.getElementById('myMusic');
    // if (audio) audio.pause();
});

// ==========================================
// KODE UNTUK EFEK TEKS BERGERAK (TYPING EFFECT)
// ==========================================
function startTypingEffect() {
    const paragraphs = document.querySelectorAll('.surat p');
    paragraphs.forEach((p) => {
        const text = p.innerHTML;
        p.innerHTML = '';
        p.style.display = 'block';
        
        let i = 0;
        function type() {
            if (i < text.length) {
                if (text.substr(i, 4) === '&amp;') {
                    p.innerHTML += '&';
                    i += 5;
                } else {
                    p.innerHTML += text.charAt(i);
                    i++;
                }
                setTimeout(type, 30);
            }
        }
        type();
    });
}

// ==========================================
// KODE UNTUK ANIMASI LOVE & BINTANG TERBANG
// ==========================================
setInterval(() => {
    const heart = document.createElement('div');
    const symbols = ['❤️', '⭐', '✨', '💖', '🌟'];
    heart.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; 
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 400);

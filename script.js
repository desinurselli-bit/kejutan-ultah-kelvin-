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
});

// Aksi ketika tombol Tiup Lilin diklik
blowBtn.addEventListener('click', () => {
    // Mengubah kue utuh menjadi kue potongan (efek lilin padam)
    cakeEmoji.innerHTML = '🍰';
    
    // Beri jeda 1,2 detik agar efek lilin padam terlihat, lalu pindah ke halaman surat
    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        
        // Jalankan efek mengetik beruntun
        startTypingEffect();
    }, 1200); 
});

// Pindah dari halaman 3 ke halaman 4 (Foto)
fotoBtn.addEventListener('click', () => {
    page3.classList.add('hidden');
    page4.classList.remove('hidden');
});

// Pindah dari halaman 4 ke halaman 5 (Pesan Terakhir)
akhirBtn.addEventListener('click', () => {
    page4.classList.add('hidden');
    page5.classList.remove('hidden');
});

// ==========================================
// KODE FASTER & RELIABLE TYPING EFFECT (BERUNTUN PARAGRAF DEMI PARAGRAF)
// ==========================================
function startTypingEffect() {
    const paragraphs = document.querySelectorAll('.surat p');
    let currentParagraph = 0;

    function typeParagraph() {
        if (currentParagraph < paragraphs.length) {
            const p = paragraphs[currentParagraph];
            const originalText = p.innerHTML;
            p.innerHTML = '';
            p.style.display = 'block'; // Tampilkan paragraf yang sedang diketik
            
            let i = 0;
            function typeLetter() {
                if (i < originalText.length) {
                    // Cek kode spasi khusus browser agar tidak rusak
                    if (originalText.substr(i, 6) === '&nbsp;') {
                        p.innerHTML += ' ';
                        i += 6;
                    } else {
                        p.innerHTML += originalText.charAt(i);
                        i++;
                    }
                    setTimeout(typeLetter, 25); // Kecepatan ketik (25ms per huruf)
                } else {
                    // Jika paragraf ini selesai, lanjut ke paragraf berikutnya
                    currentParagraph++;
                    setTimeout(typeParagraph, 300); // Jeda antar paragraf 0,3 detik
                }
            }
            typeLetter();
        }
    }
    
    // Mulai ketikan pertama
    typeParagraph();
}

// ==========================================
// KODE ANIMASI LOVE & BINTANG TERBANG
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

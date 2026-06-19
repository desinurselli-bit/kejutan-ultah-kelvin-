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
    // Mengubah kue utuh menjadi kue potongan (lilin padam)
    cakeEmoji.innerHTML = '🍰';
    
    // Beri jeda 1,2 detik agar efek lilin padam terlihat, lalu pindah ke halaman surat
    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        
        // MENJALANKAN EFEK TEKS MENGETIK OTOMATIS SAAT HALAMAN SURAT TERBUKA
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
                // Jika mendeteksi kode tag HTML (seperti spasi khusus), langsung masukkan
                if (text.substr(i, 4) === '&amp;') {
                    p.innerHTML += '&';
                    i += 5;
                } else {
                    p.innerHTML += text.charAt(i);
                    i++;
                }
                setTimeout(type, 30); // Kecepatan mengetik teks (30 milidetik per huruf)
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
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Kecepatan terbang 2-5 detik
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 400);

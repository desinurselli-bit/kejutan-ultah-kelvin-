// --- Inisialisasi Elemen ---
const startBtn = document.getElementById('startBtn');
const blowBtn = document.getElementById('blowBtn');
const fotoBtn = document.getElementById('fotoBtn');
const akhirBtn = document.getElementById('akhirBtn');
const pemicuKejutan = document.getElementById('pemicuKejutan');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const cakeEmoji = document.getElementById('cakeEmoji');

// --- Navigasi Halaman ---
startBtn.addEventListener('click', () => { page1.classList.add('hidden'); page2.classList.remove('hidden'); });

blowBtn.addEventListener('click', () => {
    cakeEmoji.innerText = '🍰';
    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        startTyping();
    }, 1200);
});

fotoBtn.addEventListener('click', () => { page3.classList.add('hidden'); page4.classList.remove('hidden'); });

akhirBtn.addEventListener('click', () => { page4.classList.add('hidden'); page5.classList.remove('hidden'); });

pemicuKejutan.addEventListener('click', () => {
    pemicuKejutan.style.display = 'none'; // Sembunyikan tombol setelah diklik
    mulaiHujanHati();
});

// --- Efek Mengetik Surat ---
function startTyping() {
    const paragraphs = document.querySelectorAll('.surat p');
    let idx = 0;
    function type() {
        if (idx < paragraphs.length) {
            paragraphs[idx].style.display = 'block';
            idx++;
            setTimeout(type, 1000); // Muncul tiap 1 detik
        }
    }
    type();
}

// --- Animasi Hujan Hati "I Love You" ---
function buatSatuHati(centerX, centerY) {
    let container = document.getElementById('love-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'love-container';
        document.body.appendChild(container);
    }
    
    // Rumus matematika hati (skala 8)
    for (let i = 0; i < 30; i++) {
        const t = (i / 30) * 2 * Math.PI;
        const x = 16 * Math.pow(Math.sin(t), 3) * 8;
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t)) * 8;
        
        const span = document.createElement('span');
        span.innerText = 'I Love You';
        span.className = 'text-love';
        span.style.left = `${centerX + x}px`;
        span.style.top = `${centerY + y}px`;
        container.appendChild(span);
        
        // Hapus elemen setelah animasi selesai (4 detik)
        setTimeout(() => span.remove(), 4000);
    }
}

function mulaiHujanHati() {
    // Ledakan awal
    const hujan = () => buatSatuHati(Math.random() * window.innerWidth, Math.random() * window.innerHeight * 0.7);
    hujan(); hujan(); hujan(); 
    // Hujan berkelanjutan
    setInterval(hujan, 1000);
}

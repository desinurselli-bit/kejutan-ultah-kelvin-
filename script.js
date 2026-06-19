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

// Fungsi pembantu untuk membersihkan tulisan love yang berantakan
function bersihkanLoveLama() {
    const container = document.getElementById('love-container') || document.getElementById('canvas-love-kamu');
    if (container) {
        container.innerHTML = ''; 
    }
}

// Pindah dari halaman 1 ke halaman 2
startBtn.addEventListener('click', () => {
    bersihkanLoveLama();
    page1.classList.add('hidden');
    page2.classList.remove('hidden');
});

// Aksi ketika tombol Tiup Lilin diklik
blowBtn.addEventListener('click', () => {
    cakeEmoji.innerHTML = '🍰';
    setTimeout(() => {
        bersihkanLoveLama();
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        startTypingEffect();
    }, 1200); 
});

// Pindah dari halaman 3 ke halaman 4 (Foto)
fotoBtn.addEventListener('click', () => {
    bersihkanLoveLama();
    page3.classList.add('hidden');
    page4.classList.remove('hidden');
});

// Pindah dari halaman 4 ke halaman 5 (Pesan Terakhir)
akhirBtn.addEventListener('click', () => {
    bersihkanLoveLama(); 
    page4.classList.add('hidden');
    page5.classList.remove('hidden');
    
    // LANGSUNG MUNCULKAN HUJAN HATI INSTAN TANPA JEDA
    mulaiHujanHati();
});

// ==========================================
// KODE TYPING EFFECT (EFEK MENGETIK SURAT)
// ==========================================
function startTypingEffect() {
    const paragraphs = document.querySelectorAll('.surat p');
    let currentParagraph = 0;

    function typeParagraph() {
        if (currentParagraph < paragraphs.length) {
            const p = paragraphs[currentParagraph];
            const originalText = p.innerHTML;
            p.innerHTML = '';
            p.style.display = 'block'; 
            
            let i = 0;
            function typeLetter() {
                if (i < originalText.length) {
                    if (originalText.substr(i, 6) === '&nbsp;') {
                        p.innerHTML += ' ';
                        i += 6;
                    } else {
                        p.innerHTML += originalText.charAt(i);
                        i++;
                    }
                    setTimeout(typeLetter, 25); 
                } else {
                    currentParagraph++;
                    setTimeout(typeParagraph, 300); 
                }
            }
            typeLetter();
        }
    }
    typeParagraph();
}

// ==========================================
// KODE ANIMASI BANYAK HATI "I LOVE YOU" INSTAN
// ==========================================

function getHeartCoord(t, scale) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
    return { x: x * scale, y: -y * scale };
}

function buatSatuHati(centerX, centerY) {
    const container = document.getElementById('love-container') || document.body;
    const skalaHati = Math.random() * (12 - 8) + 8; 
    const jumlahTeks = 35; 
    
    for (let i = 0; i < jumlahTeks; i++) {
        const t = (i / jumlahTeks) * 2 * Math.PI;
        const pos = getHeartCoord(t, skalaHati);
        
        const span = document.createElement('span');
        span.innerText = 'I Love You';
        
        // KUNCI KOORDINAT MATEMATIKA BENTUK HATI DI LAYAR
        span.style.position = 'fixed'; 
        span.style.left = `${centerX + pos.x}px`;
        span.style.top = `${centerY + pos.y}px`;
        span.style.transform = 'translate(-50%, -50%)'; 
        
        // STYLE TAMPILAN TEKS
        span.style.color = '#ff7675';
        span.style.fontFamily = "'Segoe UI', sans-serif";
        span.style.fontWeight = 'bold';
        span.style.whiteSpace = 'nowrap';
        span.style.pointerEvents = 'none';
        span.style.zIndex = '-1'; 
        span.style.fontSize = Math.random() * (13 - 10) + 10 + 'px'; 
        
        // ANIMASI TERBANG & MEMUDAR (DARI CSS)
        span.style.animation = 'flyAndFadeFix 4s ease-out forwards';
        
        container.appendChild(span);
        
        setTimeout(() => {
            span.remove();
        }, 4000);
    }
}

function hujanHatiILoveYou() {
    const xAcak = Math.random() * window.innerWidth;
    const yAcak = Math.random() * (window.innerHeight * 0.7) + (window.innerHeight * 0.15);
    buatSatuHati(xAcak, yAcak);
}

let intervalHati;
function mulaiHujanHati() {
    if (!intervalHati) {
        // LANGSUNG TEMBAK 4 HATI DI AWAL AGAR TIDAK LAMA MENUNGGU
        hujanHatiILoveYou();
        hujanHatiILoveYou();
        hujanHatiILoveYou();
        hujanHatiILoveYou();
        
        // Sisanya muncul otomatis setiap 800 milidetik
        intervalHati = setInterval(hujanHatiILoveYou, 800);
    }
}

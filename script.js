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
    // Mengubah kue utuh menjadi kue potongan (atau ganti foto transparanmu di sini)
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
// KODE FASTER & RELIABLE TYPING EFFECT (UTUH & AMAN)
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
// KODE ANIMATION "I LOVE YOU" MEMBENTUK HATI BESAR
// ==========================================

// 1. Rumus matematika kurva hati dengan skala besar
function getHeartPosition(t) {
    const scale = 22; // Membuat bentuk lingkaran hatinya BESAR
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
    
    return {
        x: x * scale,
        y: -y * scale
    };
}

// 2. Memunculkan teks "I Love You" menyusun bentuk hati
function generateHeartText() {
    // Membuat container otomatis di body jika belum ada di HTML
    let container = document.getElementById('love-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'love-container';
        document.body.appendChild(container);
    }

    const t = Math.random() * 2 * Math.PI;
    const pos = getHeartPosition(t);
    
    const span = document.createElement('span');
    span.innerText = 'I Love You';
    span.className = 'text-love';
    
    // Posisi pas di tengah layar browser lalu dibentuk jadi hati
    span.style.left = `calc(50% + ${pos.x}px)`;
    span.style.top = `calc(50% + ${pos.y}px)`;
    
    // Ukuran font tulisan diperbesar biar jelas dibaca
    span.style.fontSize = Math.random() * (26 - 18) + 18 + 'px'; 
    span.style.position = 'fixed';
    span.style.color = '#ff7675';
    span.style.zIndex = '-1'; // Berada di latar belakang agar tidak menutupi tombol/surat
    span.style.opacity = Math.random() * (1 - 0.7) + 0.7;
    
    container.appendChild(span);
    
    // Agar web tidak lag dan bentuk hati tetap rapi, batasi jumlah teksnya
    if (container.children.length > 180) {
        container.removeChild(container.firstChild);
    }
}

// Jalankan pembentukan hati secara cepat (setiap 50 milidetik)
setInterval(generateHeartText, 50);

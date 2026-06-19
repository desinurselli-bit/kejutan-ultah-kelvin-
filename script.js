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

// Navigasi
startBtn.addEventListener('click', () => { page1.classList.add('hidden'); page2.classList.remove('hidden'); });

blowBtn.addEventListener('click', () => {
    cakeEmoji.innerHTML = '🍰';
    setTimeout(() => {
        page2.classList.add('hidden');
        page3.classList.remove('hidden');
        startTypingEffect();
    }, 1200); 
});

fotoBtn.addEventListener('click', () => { page3.classList.add('hidden'); page4.classList.remove('hidden'); });

akhirBtn.addEventListener('click', () => {
    page4.classList.add('hidden');
    page5.classList.remove('hidden');
    mulaiHujanHati();
});

// Efek Mengetik
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
                    p.innerHTML += originalText.charAt(i);
                    i++;
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

// Animasi Hati
function getHeartCoord(t, scale) {
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
    return { x: x * scale, y: -y * scale };
}

function buatSatuHati(centerX, centerY) {
    let container = document.getElementById('love-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'love-container';
        document.body.appendChild(container);
    }
    const skalaHati = 8;
    for (let i = 0; i < 30; i++) {
        const t = (i / 30) * 2 * Math.PI;
        const pos = getHeartCoord(t, skalaHati);
        const span = document.createElement('span');
        span.innerText = 'I Love You';
        span.className = 'text-love';
        span.style.left = `${centerX + pos.x}px`;
        span.style.top = `${centerY + pos.y}px`;
        container.appendChild(span);
        setTimeout(() => span.remove(), 4000);
    }
}

function mulaiHujanHati() {
    const hujan = () => buatSatuHati(Math.random() * window.innerWidth, Math.random() * window.innerHeight * 0.7);
    hujan(); hujan(); hujan();
    setInterval(hujan, 1000);
}

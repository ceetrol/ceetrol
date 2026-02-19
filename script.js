/* DATA STRUCTURE UPDATES:
   1. Dock Items: Add 'errorMsg' for the custom popup text.
   2. Desktop Items: Use 'gallery' array for multiple contents.
*/
const siteData = [
    // --- DOCK ITEMS (Clicking these triggers error) ---
    { 
        id: 'c4d', title: 'Cinema 4D', icon: 'assets/c4d_icon.png', inDock: true, 
        errorMsg: 'License expired. Please contact administrator.' 
    },

    { 
        id: 'ps', title: 'Photoshop', icon: 'assets/ps_icon.png', inDock: true, 
        errorMsg: 'Scratch disks are full.' 
    },

    { 
        id: 'ae', title: 'After Effects', icon: 'assets/ae_icon.png', inDock: true, 
        errorMsg: 'Application "After Effects" is not responding.' 
    },
    
    { 
        id: 'notes', title: 'CV', icon: 'assets/notes_icon.png', inDock: true, 
        type: 'window', 
        description: `
            <div class="cv-container">
                <h1 class="cv-name">AMIRALI (CEETROL) HOSSEINI ZADEH</h1>
                <p class="cv-subtitle">3D Artist / Creative Director / Graphic Designer</p>

                <h2 class="cv-section-title">PROFILE</h2>
                <p class="cv-text">
                    Experienced 3D Artist and Creative Director with <b>6+ years</b> of expertise in 3D design, animation, and art direction for music, fashion, and product campaigns. Collaborated with leading brands and artists including <b>SHEIN, SONY MUSIC, UNIVERSAL, DEF JAM</b> and <b>TOP DAWG ENTERTAINMENT</b>.


                <h2 class="cv-section-title">EXPERIENCE</h2>
                
                <div class="cv-item">
                    <p class="cv-item-header">SHEIN – CAMPAIGN: O'BEACH <span class="cv-date">| 2025</span></p>
                    <ul class="cv-list">
                        <li>Designed 3D posters, logos, and typography for the O'Beach campaign.</li>
                        <li>Directed the visual identity, ensuring consistent branding.</li>
                    </ul>
                </div>

                <div class="cv-item">
                    <p class="cv-item-header">CAKE – VAPE BRAND <span class="cv-date">| 2024 - 2025</span></p>
                    <ul class="cv-list">
                        <li>Designed 3D product presentations and animated promo ads.</li>
                        <li>Provided ongoing creative direction for a modern brand image.</li>
                    </ul>
                </div>

                <div class="cv-item">
                    <p class="cv-item-header">FREELANCE ART DIRECTOR <span class="cv-date">| 2017 - PRESENT</span></p>
                    <p class="cv-text">Worked with: ScHoolboy Q, Snoop Dogg, Myles Garrett, Pressa, Poobon and more.</p>
                </div>

                <h2 class="cv-section-title">SKILLS</h2>
                <p class="cv-text">
                    <b>CREATIVE:</b> 3D Design, Graphic Design, Creative Direction, Motion Design<br>
                    <b>SOFTWARE:</b> Cinema 4D, Octane Render, Photoshop, After Effects, Daz 3D, Marvelous Studio, EmberGen FX

                <h2 class="cv-section-title">TRUSTED BY</h2>
                <div class="trusted-grid">
                    <img src="assets/logos/1.png" class="trusted-logo" alt="Shein">
                    <img src="assets/logos/2.png" class="trusted-logo" alt="Sony Music">
                    <img src="assets/logos/3.png" class="trusted-logo" alt="Universal">
                    <img src="assets/logos/4.png" class="trusted-logo" alt="Def Jam">
                    <img src="assets/logos/5.png" class="trusted-logo" alt="TDE">
                    <img src="assets/logos/6.png" class="trusted-logo" alt="TDE">
                    <img src="assets/logos/7.png" class="trusted-logo" alt="TDE">
                    <img src="assets/logos/8.png" class="trusted-logo" alt="TDE">
                </div>
                </div>
        `,
        
    },

    { 
        id: 'ig', title: 'Instagram', icon: 'assets/ig_icon.png', inDock: true, 
        type: 'link', url: 'https://www.instagram.com/ceetrol' 
    },
    
    { 
        id: 'mail', title: 'Mail', icon: 'assets/mail_icon.png', inDock: true, 
        type: 'link', url: 'mailto:amirali@wavefoundation.co' 
    },

    { 
        id: 'bin', title: 'Drafted Ideas', icon: 'assets/bin_icon.png', inDock: true, 
        type: 'window', gallery: [
            { type: 'image', src: 'assets/bin/1.webp' },
            { type: 'image', src: 'assets/bin/2.webp' },
            { type: 'image', src: 'assets/bin/3.webp' },
            { type: 'image', src: 'assets/bin/4.webp' },
            { type: 'image', src: 'assets/bin/5.webp' },
            { type: 'image', src: 'assets/bin/6.webp' },
            { type: 'image', src: 'assets/bin/7.webp' },
            { type: 'image', src: 'assets/bin/8.webp' }
        ],
        description: 'Old concepts and discarded renders.' 
    },

    // --- LEFT GROUP ---
    { 
        id: 'p11', title: 'TELEPHONE', thumb: 'assets/thumbs/1.webp', inDock: false,
        x: 250, y: 130, 
        description: '3D cover art and animation for Poobon & Koorosh’s single Telephone, blending dark chrome aesthetics with subtle vibrant accents to create bold, high-impact visuals.',
        gallery: [{ type: 'image', src: 'assets/poobon/tl/1.webp' },
            { type: 'video', src: 'assets/poobon/tl/2.mp4' }]
    },
    { 
        id: 'p20', title: 'CONTROL', thumb: 'assets/thumbs/2.webp', inDock: false,
        x: 270, y: 370,
        description: 'Art direction and 3D cover art design for Control by Nick Moleta, featuring a fully 3D realistic character with warm, luxury-inspired tones crafted to create a visually striking and refined aesthetic.',
        gallery: [{ type: 'image', src: 'assets/nick/cntrl/1.jpg' },
            { type: 'image', src: 'assets/nick/cntrl/2.jpg' }]
    },
    { 
        id: 'p8', title: 'SYNCERLY, REX', thumb: 'assets/thumbs/3.webp', inDock: false,
        x: 410, y: 600,
        description: 'Art direction, 3D design, and composition for Pyrex’s album Sincerely, Rex. Translated the artist’s vision into a surreal scene featuring two versions of him surrounded by flowers playing instruments, and the other blowing a dandelion—capturing the emotional depth of the project.',
        gallery: [{ type: 'image', src: 'assets/pyrex/1.webp' },
            { type: 'image', src: 'assets/pyrex/2.webp' },
            { type: 'image', src: 'assets/pyrex/3.webp' },
            { type: 'image', src: 'assets/pyrex/4.webp' },
            { type: 'image', src: 'assets/pyrex/5.webp' }]
    },
    { 
        id: 'p10', title: '1993', thumb: 'assets/thumbs/4.webp', inDock: false,
        x: 440, y: 250,
        description: '3D cover art for Poobon’s single 1993, featuring a glass heart held in a hand to reflect the emotion and meaning of the song.',
        gallery: [{ type: 'image', src: 'assets/poobon/1993/1.png' },
            { type: 'video', src: 'assets/poobon/1993/2.mp4' }]
    },

    // --- CENTER LEFT ---
    { 
        id: 'p17', title: 'ENGAR', thumb: 'assets/thumbs/5.webp', inDock: false,
        x: 630, y: 200,
        description: '3D cover artwork for Isam’s hit single Engar, featuring a realistic close-up character focused on expressing the emotion and melancholy of the track.',
        gallery: [{ type: 'image', src: 'assets/isam/eng/1.jpg' }]
    },
    { 
        id: 'p14', title: 'POOBON WORLD TOUR', thumb: 'assets/thumbs/6.webp', inDock: false,
        x: 530, y: 410,
        description: 'Art direction and visual design for Poobon world’s tour, including flyers, posters, logo, and merchandise. The visuals feature vibrant colors and expressive imagery to capture the energy and atmosphere of the tour.',
        gallery: [{ type: 'image', src: 'assets/poobon/wt/1.webp' },
            { type: 'video', src: 'assets/poobon/wt/2.mp4' },
            { type: 'image', src: 'assets/poobon/wt/3.jpg' },
            { type: 'image', src: 'assets/poobon/wt/4.jpg' },
            { type: 'image', src: 'assets/poobon/wt/5.webp' },
            { type: 'image', src: 'assets/poobon/wt/6.webp' }]
    },
    { 
        id: 'p22', title: 'LYSMO - BRAND IDENTITY', thumb: 'assets/thumbs/7.webp', inDock: false,
        x: 750, y: 600,
        description: 'Brand identity design for LYSMO, including logo, graphic assets and designs. The aesthetic focuses on a casual, minimal approach with a high-quality, trend-forward fashion feel.',
        gallery: [{ type: 'image', src: 'assets/lysmo/1.webp' },
            { type: 'image', src: 'assets/lysmo/2.webp' },
            { type: 'image', src: 'assets/lysmo/3.webp' },
            { type: 'image', src: 'assets/lysmo/4.webp' },
            { type: 'image', src: 'assets/lysmo/5.webp' },
            { type: 'image', src: 'assets/lysmo/6.webp' },
            { type: 'image', src: 'assets/lysmo/7.png' }]
    },
    { 
        id: 'p7', title: 'CAKE - 3D PRODUCT AD', thumb: 'assets/thumbs/8.webp', inDock: false,
        x: 710, y: 370,
        description: '3D designs and animations for the vape brand Cake, featuring colorful, playful, and highly saturated visuals. Each variant is crafted around the product’s flavor, packaging, and aesthetic for a bold, eye-catching brand experience.”',
        gallery: [{ type: 'image', src: 'assets/cake/1.webp' },
            { type: 'image', src: 'assets/cake/2.webp' },
            { type: 'image', src: 'assets/cake/3.webp' },
            { type: 'video', src: 'assets/cake/4.mp4' },
            { type: 'image', src: 'assets/cake/5.webp' },
            { type: 'image', src: 'assets/cake/6.webp' },
            { type: 'video', src: 'assets/cake/7.mp4' },
            { type: 'image', src: 'assets/cake/8.webp' },
            { type: 'image', src: 'assets/cake/9.webp' }]
    },

    // --- CENTER VERTICAL ---
    { 
        id: 'p6', title: 'MYLES GARRETT - 3D ENV DESIGN', thumb: 'assets/thumbs/9.webp', inDock: false,
        x: 860, y: 200,
        description: 'A realistic 3D environment created for a social media hype video featuring NFL player Myles Garrett, focused on high-impact visuals and an energetic atmosphere.',
        gallery: [{ type: 'video', src: 'assets/mg/2.mp4' },
            { type: 'image', src: 'assets/mg/1.png' },
            { type: 'image', src: 'assets/mg/2.png' },
            { type: 'image', src: 'assets/mg/3.png' },
            { type: 'video', src: 'assets/mg/1.mp4' }]
    },
    { 
        id: 'p2', title: 'SHEIN X OBEACH - CAMPAIGN DESIGN', thumb: 'assets/thumbs/10.webp', inDock: false,
        x: 880, y: 430,
        description: 'SHEIN × OBeach is a Summer 2025 campaign featuring a blend of 3D and 2D graphic assets. The visuals draw from vintage and retro aesthetics, combining bold colors and nostalgic forms to create a playful, summer-driven identity for the collaboration.',
        gallery: [{ type: 'image', src: 'assets/shein/shein1.webp' },
            { type: 'image', src: 'assets/shein/shein2.webp' },
            { type: 'image', src: 'assets/shein/shein3.webp' },
            { type: 'image', src: 'assets/shein/shein4.webp' },
            { type: 'image', src: 'assets/shein/shein5.webp' },
            { type: 'image', src: 'assets/shein/shein6.webp' }]
    },

    // --- CENTER RIGHT ---
    { 
        id: 'p1', title: 'HESADAT', thumb: 'assets/thumbs/11.webp', inDock: false,
        x: 1070, y: 110,
        description: '3D cover artwork and animation for Poobon’s track Hesadat, featuring colorful, nature-inspired and floral visuals that reflect the mood of the song.',
        gallery: [{ type: 'image', src: 'assets/poobon/hesadat/1.webp' },
            { type: 'image', src: 'assets/poobon/hesadat/2.png' },
            { type: 'video', src: 'assets/poobon/hesadat/3.mp4' }]
    },
    { 
        id: 'p9', title: 'BESOOZOON', thumb: 'assets/thumbs/12.webp', inDock: false,
        x: 1210, y: 230,
        description: 'Art direction and cover art design for Poobon & Tory Lanez’s single Besoozoon. The visuals mix the artists’ faces with burnt textures and fire elements to capture the energy and fiery vibe of the track.',
        gallery: [{ type: 'image', src: 'assets/poobon/tory/1.webp' },
            { type: 'video', src: 'assets/poobon/tory/2.mp4' }]
    },
    { 
        id: 'p5', title: 'PRADA SHOWROOM', thumb: 'assets/thumbs/13.webp', inDock: false,
        x: 1130, y: 400,
        description: 'A 3D concept design exploring my vision of a Prada showroom, blending classy and modern elements with the beauty of pure nature.',
        gallery: [{ type: 'video', src: 'assets/reels/prada/1.mp4' },
            { type: 'image', src: 'assets/reels/prada/1.jpg' },
            { type: 'image', src: 'assets/reels/prada/2.jpg' },
            { type: 'image', src: 'assets/reels/prada/3.jpg' },
            { type: 'image', src: 'assets/reels/prada/4.jpg' }]
    },
    { 
        id: 'p4', title: 'AURA KNIGHT', thumb: 'assets/thumbs/14.webp', inDock: false,
        x: 1000, y: 600,
        description: 'A realistic 3D animation of a lone knight sitting in the grass, created as a personal piece to showcase mood, storytelling, and 3D skills.',
        gallery: [{ type: 'video', src: 'assets/reels/aura/1.mp4' },
            { type: 'image', src: 'assets/reels/aura/1.jpg' }]
    },
    { 
        id: 'p15', title: 'S*XTAPE', thumb: 'assets/thumbs/15.webp', inDock: false,
        x: 1130, y: 750,
        description: 'Art direction, 3D artwork, and animation for Poobon & Khalse’s single Sextape, inspired by Y2K aesthetics with saturated colors, playful keychains, and bold graphic elements to amplify the track’s vibe.',
        gallery: [{ type: 'image', src: 'assets/poobon/st/1.jpg' },
            { type: 'video', src: 'assets/poobon/st/2.mp4' }]
    },

    // --- FAR RIGHT GROUP ---
    { 
        id: 'p16', title: 'STAGE VISUALS - POOBON', thumb: 'assets/thumbs/16.webp', inDock: false,
        x: 1270, y: 70,
        description: '3D stage visuals for Poobon, created with bold, eye-catching compositions optimized for large-scale backgrounds and dynamic lighting. The visuals incorporate his 3D character and logo to build a strong on-stage identity..',
        gallery: [{ type: 'video', src: 'assets/poobon/sv/1.mp4' },
            { type: 'video', src: 'assets/poobon/sv/2.mp4' },
            { type: 'video', src: 'assets/poobon/sv/3.mp4' },
            { type: 'video', src: 'assets/poobon/sv/4.mp4' }]
    },
    { 
        id: 'p21', title: 'SCHOOLBOY Q - STAGE VISUALS', thumb: 'assets/thumbs/17.webp', inDock: false,
        x: 1370, y: 230,
        description: '3D animation assets for Schoolboy Q’s stage visuals, including animated reinterpretations of his iconic album covers Oxymoron and CrasH Talk.',
        gallery: [{ type: 'video', src: 'assets/sq/1.mp4' },
            { type: 'video', src: 'assets/sq/2.mp4' }]
    },
    { 
        id: 'p12', title: 'GET BACK UP', thumb: 'assets/thumbs/18.webp', inDock: false,
        x: 1570, y: 110,
        description: 'Art direction and cover design for Pressa & Fridayy’s single Get Back Up, built around dark aesthetics and layered typography to reflect the mood and intensity of the track.',
        gallery: [{ type: 'image', src: 'assets/pressa/gbu/1.webp' },
            { type: 'video', src: 'assets/pressa/gbu/2.mp4' },
            { type: 'image', src: 'assets/pressa/gbu/3.webp' },
            { type: 'image', src: 'assets/pressa/gbu/4.webp' },
            { type: 'image', src: 'assets/pressa/gbu/5.webp' },
            { type: 'image', src: 'assets/pressa/gbu/6.webp' }]
    },
    { 
        id: 'p13', title: 'W HOTEL', thumb: 'assets/thumbs/19.webp', inDock: false,
        x: 1600, y: 370,
        description: '3D artwork for Pressa & Toosii’s single W Hotel, crafted to deliver a bold, polished visual identity that matches the tone and presence of the track.',
        gallery: [{ type: 'image', src: 'assets/pressa/wh/1.webp' }]
    },
    { 
        id: 'p3', title: 'BAVAR KON', thumb: 'assets/thumbs/20.webp', inDock: false,
        x: 1330, y: 570,
        description: 'Cover art and motion design for Poobon’s single Bavar Kon. The project blends 3D design and photography, creating a dark, chrome-inspired aesthetic that complements the track’s mood.',
        gallery: [{ type: 'video', src: 'assets/poobon/bk/2.mp4' },
            { type: 'video', src: 'assets/poobon/bk/3.mp4' },
            { type: 'image', src: 'assets/poobon/bk/1.png' }]
    },
    { 
        id: 'p18', title: 'SISI', thumb: 'assets/thumbs/21.webp', inDock: false,
        x: 1530, y: 610,
        description: 'Art direction and 3D cover design for Isam’s single SISI, featuring a realistic 3D character with shadows shaped to form ‘SISI’ typography, blending character detail with conceptual visual storytelling.',
        gallery: [{ type: 'image', src: 'assets/isam/sisi/1.jpg' },
            { type: 'video', src: 'assets/isam/sisi/2.mp4' },
            { type: 'image', src: 'assets/isam/sisi/3.jpg' }]
    }
];

let zIndexCounter = 100;
let activeElement = null;
let dragMode = null;
let startPos = { x: 0, y: 0 };
let initialRect = { x: 0, y: 0, w: 0, h: 0 };

function getPersistentPos(title) {
    let seed = 0;
    for (let i = 0; i < title.length; i++) { seed += title.charCodeAt(i); }
    
    // Check if we are on mobile
    const isMobile = window.innerWidth < 768;
    // --- NEW: SHOW MOBILE WARNING ---
    if (isMobile) {
        // Remove the 'hidden' class to show the popup
        document.getElementById('mobile-warning').classList.remove('warning-hidden');
    }
    
    // Define safe area boundaries
    // Mobile: Icons are smaller (70px), so we need less padding
    const iconSize = isMobile ? 80 : 100;
    const xRange = window.innerWidth - iconSize - 20; // 20px padding
    const yRange = window.innerHeight - 200; // Leave space for Dock (bottom) and Header (top)
    
    // Generate random positions based on the 'seed' (Title)
    // The +10 adds a small top/left margin so they don't touch edges
    const xSeeded = (Math.abs(Math.sin(seed) * 10000) % 1) * xRange + 10;
    const ySeeded = (Math.abs(Math.cos(seed) * 10000) % 1) * yRange + 50; // Start 50px from top
    
    return { x: xSeeded, y: ySeeded };
}

/* --- HELPER: SEEDED RANDOM --- */
let seedValue = 12345; 
function seededRandom() {
    const x = Math.sin(seedValue++) * 10000;
    return x - Math.floor(x);
}

function init() {
    const desk = document.getElementById('desktop');
    const dock = document.getElementById('dock');
    
    // 1. DETECT MOBILE
    const isMobile = window.innerWidth < 768;

    // --- FIX: SHOW MOBILE WARNING HERE ---
    // This runs immediately when the page loads
    if (isMobile) {
        const warning = document.getElementById('mobile-warning');
        if (warning) {
            warning.classList.remove('warning-hidden');
        }
    }
    // -------------------------------------

    // 2. PREPARE MOBILE SLOTS
    let mobileSlots = [];
    
    if (isMobile) {
        const desktopItems = siteData.filter(i => !i.inDock);
        const count = desktopItems.length;

        const cols = 3; 
        const rows = Math.ceil(count / cols);
        
        const iconWidth = 70; 
        const iconHeight = 90; 
        
        const safeWidth = window.innerWidth - 20; 
        const safeHeight = window.innerHeight - 180; 
        
        const cellW = safeWidth / cols;
        const cellH = safeHeight / rows;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (mobileSlots.length < count) {
                    const maxJitterX = Math.max(0, cellW - iconWidth);
                    const maxJitterY = Math.max(0, cellH - iconHeight);

                    const randomX = seededRandom() * maxJitterX;
                    const randomY = seededRandom() * maxJitterY;

                    mobileSlots.push({
                        x: (c * cellW) + randomX + 10, 
                        y: (r * cellH) + randomY + 40
                    });
                }
            }
        }
        
        let m = mobileSlots.length, t, i;
        while (m) {
            i = Math.floor(seededRandom() * m--);
            t = mobileSlots[m];
            mobileSlots[m] = mobileSlots[i];
            mobileSlots[i] = t;
        }
    }

    let slotIndex = 0;

    siteData.forEach((item) => {
        if (item.inDock) {
            const wrapper = document.createElement('div');
            wrapper.className = 'dock-item-wrapper';
            wrapper.innerHTML = `<div class="dock-tooltip">${item.title}</div><img class="dock-item" src="${item.icon}">`;
            
            wrapper.onclick = () => {
                if (item.errorMsg) {
                    showError(item);
                } else if (item.type === 'link') {
                    window.open(item.url, '_blank');
                } else if (item.type === 'window') {
                    openWindow(item);
                }
            };
            dock.appendChild(wrapper);
        } else {
            const el = document.createElement('div');
            el.className = 'desktop-icon';
            el.innerHTML = `
                <div class="preview-wrapper">
                    <img src="${item.thumb}" class="preview-media" 
                         onload="
                            if(this.naturalHeight > this.naturalWidth) { 
                                this.style.width='65px'; this.style.height='auto'; 
                            } 
                            else if(Math.abs(this.naturalHeight - this.naturalWidth) < 5) {
                                this.style.height='80px'; this.style.width='auto';
                            }
                         ">
                </div>
                <span class="icon-label">${item.title}</span>`;
            
            if (isMobile) {
                let pos;
                if (slotIndex < mobileSlots.length) {
                    pos = mobileSlots[slotIndex];
                    slotIndex++;
                } else {
                    pos = { x: 0, y: 0 };
                }
                
                el.style.left = pos.x + 'px';
                el.style.top = pos.y + 'px';
                el.onclick = () => openWindow(item);
                
            } else {
                let leftPercent, topPercent;

                if (item.x !== undefined && item.y !== undefined) {
                    leftPercent = (item.x / 1920) * 100;
                    topPercent = (item.y / 1080) * 100;
                } else {
                    // We can remove the popup check from here since we did it at the top
                    const randomPos = getPersistentPos(item.title);
                    leftPercent = (randomPos.x / window.innerWidth) * 100;
                    topPercent = (randomPos.y / window.innerHeight) * 100;
                }

                el.style.left = leftPercent + '%';
                el.style.top = topPercent + '%';

                el.addEventListener('mousedown', (e) => {
                    e.stopPropagation();
                    document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected'));
                    el.classList.add('selected');
                    startAction(e, el, 'move');
                });
                el.addEventListener('dblclick', () => openWindow(item));
            }
            
            desk.appendChild(el);
        }
    });
    
    document.body.addEventListener('mousedown', () => { 
        document.querySelectorAll('.desktop-icon').forEach(i => i.classList.remove('selected')); 
    });
    
    updateClock(); setInterval(updateClock, 1000);
}

// 2. ERROR POPUP LOGIC
function showError(item) {
    const popup = document.getElementById('error-popup');
    document.getElementById('error-title').innerText = item.title;
    document.getElementById('error-msg').innerText = item.errorMsg || 'An unknown error occurred.';
    popup.classList.remove('error-hidden');
}

function closeError() {
    document.getElementById('error-popup').classList.add('error-hidden');
}

function showQuickLook(src) {
    const ql = document.getElementById('quick-look');
    const img = document.getElementById('ql-img');
    img.src = src;
    ql.style.display = 'flex';
}

/* --- OPTIMIZED WINDOW OPENER --- */
function openWindow(item) {
    if(document.getElementById('win-'+item.id)) return;
    
    const win = document.createElement('div');
    win.className = 'window'; 
    win.id = 'win-'+item.id;
    
    // Default Desktop Size
    win.style.width = '800px'; 
    win.style.height = '600px'; 
    win.style.left = '15vw'; 
    win.style.top = '10vh';
    win.style.display = 'flex'; 
    win.style.zIndex = zIndexCounter++;

    let galleryHTML = '';
    if (item.gallery) {
        item.gallery.forEach((media, index) => {
            // OPTIMIZATION: 
            // 1. loading="lazy": Only download image when scrolled into view
            // 2. decoding="async": Decode image off the main thread (less lag)
            // 3. poster="${item.thumb}": Show the low-res thumb while video loads
            
            if (media.type === 'video') {
                galleryHTML += `
                    <div class="gallery-item">
                        <video src="${media.src}" class="gallery-video" 
                            controls autoplay loop muted playsinline 
                            preload="metadata" poster="${item.thumb}">
                        </video>
                    </div>`;
            } else {
                // If it's the very first image, load it eagerly (fast). 
                // All others load lazily.
                const loadMode = index < 2 ? 'eager' : 'lazy';
                
                galleryHTML += `
                    <div class="gallery-item">
                        <img src="${media.src}" class="gallery-img" 
                            loading="${loadMode}" decoding="async"
                            onclick="showQuickLook('${media.src}')">
                    </div>`;
            }
        });
    }

    win.innerHTML = `
        <div class="window-header">
            <div class="traffic-lights">
                <div class="traffic-light close-btn" onclick="this.closest('.window').remove()"></div>
                <div class="traffic-light min-btn"></div>
                <div class="traffic-light max-btn" onclick="this.closest('.window').classList.toggle('maximized')"></div>
            </div>
            <div style="flex:1; text-align:center; font-size:12px; font-weight:600; color:#888">${item.title}</div>
        </div>
        <div class="window-content">
            <div class="desc-container">
                <div class="desc-title">${item.title}</div>
                <div class="desc-text">${item.description || ''}</div>
            </div>
            <div class="media-stack">
                ${galleryHTML}
            </div>
        </div>
        <div class="resizer t"></div><div class="resizer b"></div>
        <div class="resizer l"></div><div class="resizer r"></div>
        <div class="resizer tl"></div><div class="resizer tr"></div>
        <div class="resizer bl"></div><div class="resizer br"></div>
    `;

    win.addEventListener('mousedown', () => { zIndexCounter++; win.style.zIndex = zIndexCounter; });
    win.querySelector('.window-header').addEventListener('mousedown', (e) => startAction(e, win, 'move'));
    win.querySelector('.resizer.br').addEventListener('mousedown', (e) => { e.stopPropagation(); startAction(e, win, 'resize'); });

    document.getElementById('window-area').appendChild(win);
}

function startAction(e, el, mode) {
    activeElement = el; dragMode = mode; zIndexCounter++; el.style.zIndex = zIndexCounter;
    startPos = { x: e.clientX, y: e.clientY };
    initialRect = { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopAction);
}

function handleMouseMove(e) {
    if (!activeElement || !dragMode) return;
    e.preventDefault(); // Prevents text selection while dragging
    const dx = e.clientX - startPos.x; 
    const dy = e.clientY - startPos.y;
    
    if (dragMode === 'move') { 
        activeElement.style.left = (initialRect.x + dx) + 'px'; 
        activeElement.style.top = (initialRect.y + dy) + 'px'; 
    }
    else if (dragMode === 'resize') { 
        // This simple math works best with the Bottom-Right (br) handle
        activeElement.style.width = Math.max(300, initialRect.w + dx) + 'px'; 
        activeElement.style.height = Math.max(200, initialRect.h + dy) + 'px'; 
    }
}

function stopAction() { activeElement = null; dragMode = null; document.removeEventListener('mousemove', handleMouseMove); }
function updateClock() { document.getElementById('clock').innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }); }

init();
function closeWarning() {
    document.getElementById('mobile-warning').classList.add('warning-hidden');
}
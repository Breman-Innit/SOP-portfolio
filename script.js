/* ============================================================
   BrightFocus Media — script.js (Fixed)
   ============================================================ */

// ===== PRELOADER =====
const preloader    = document.getElementById('preloader');
const mainContent  = document.getElementById('mainContent');
const progressBar  = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

const imageUrls = [
    "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/3785706/pexels-photo-3785706.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/2853629/pexels-photo-2853629.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/3611546/pexels-photo-3611546.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/3205494/pexels-photo-3205494.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
    "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/2082947/pexels-photo-2082947.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop",
    "https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    "https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop",
    "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100&fit=crop",
    "https://images.pexels.com/photos/2897897/pexels-photo-2897897.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100&fit=crop",
    "https://images.pexels.com/photos/3823086/pexels-photo-3823086.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100&fit=crop",
    "https://images.pexels.com/photos/1172064/pexels-photo-1172064.jpeg?auto=compress&cs=tinysrgb&w=1100&h=800&fit=crop",
    "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&w=1100&h=800&fit=crop",
    "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1100&h=800&fit=crop",
    "https://images.pexels.com/photos/6941204/pexels-photo-6941204.jpeg"
];

let loadedCount = 0;
const totalImages = imageUrls.length;

function updateProgress() {
    const pct = Math.floor((loadedCount / totalImages) * 100);
    progressBar.style.width = pct + '%';
    progressText.textContent = pct + '%';
}

function preloadImages() {
    imageUrls.forEach(url => {
        const img = new Image();
        img.onload = img.onerror = () => {
            loadedCount++;
            updateProgress();
            if (loadedCount >= totalImages) finishLoading();
        };
        img.src = url;
    });
}

function finishLoading() {
    setTimeout(() => {
        preloader.classList.add('hide');
        mainContent.classList.add('visible');
        setTimeout(() => preloader.style.display = 'none', 900);
        initAllAfterLoad();
    }, 600);
}

preloadImages();

// Safety net — hide loader after 6s regardless
setTimeout(() => {
    if (!mainContent.classList.contains('visible')) {
        progressBar.style.width = '100%';
        progressText.textContent = '100%';
        finishLoading();
    }
}, 6000);


// ===== TYPED TEXT =====
const words = ["Photographer", "Video Editor", "Graphic Designer", "Visual Storyteller"];
let wIdx = 0, cIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
    if (!typedEl) return;
    const word = words[wIdx];
    typedEl.textContent = deleting
        ? word.substring(0, cIdx - 1)
        : word.substring(0, cIdx + 1);
    cIdx = deleting ? cIdx - 1 : cIdx + 1;

    if (!deleting && cIdx === word.length) {
        deleting = true;
        setTimeout(type, 2200);
        return;
    }
    if (deleting && cIdx === 0) {
        deleting = false;
        wIdx = (wIdx + 1) % words.length;
    }
    setTimeout(type, deleting ? 55 : 110);
}
type();


// ===== MARQUEE GALLERY DATA =====
const imageSet = [
    { url: "images/flyer1.jpg",   size: "tall",      alt: "Portrait study" },
    { url: "images/shirt2.jpg",   size: "landscape",  alt: "Editorial fashion" },
    { url: "images/flyer10.jpg",     size: "tall",       alt: "Urban fashion" },
    { url: "images/flyer2.jpg",   size: "wide",       alt: "Landscape view" },
    { url: "images/flyer3.jpg",   size: "tall",       alt: "Editorial portrait" },
    { url: "images/pic1.jpg",     size: "tall",       alt: "Artistic portrait" },
    { url: "images/flyer12.jpg",     size: "tall",       alt: "Mountain range" },
    { url: "images/pic2.jpg",     size: "wide",       alt: "Cinematic wide shot" },
    { url: "images/flyer7.jpg",   size: "landscape",  alt: "Creative composition" },
    { url: "images/flyer8.jpg",     size: "square",     alt: "Art direction" },
    { url: "images/pic7.jpg",     size: "square",     alt: "Design composition" },
    { url: "images/pic8.jpg",     size: "wide",       alt: "Portrait photography" },
    { url: "images/shirt3.jpg",   size: "landscape",  alt: "Fashion portrait" },
    { url: "images/pic9.jpg",     size: "wide",       alt: "Studio portrait" },
    { url: "images/shirt4.png",   size: "landscape",  alt: "Cityscape" },
    { url: "images/pic11.jpg",    size: "landscape",  alt: "Architecture" },
    { url: "images/shirt1.jpg",   size: "landscape",  alt: "Street photography" }
];

function buildMarqueeHTML(imgs) {
    let h = '';
    for (let i = 0; i < 3; i++) {
        imgs.forEach(img => {
            h += `<div class="marquee-item item-${img.size}">
                    <img src="${img.url}" alt="${img.alt}" loading="lazy">
                  </div>`;
        });
    }
    return h;
}

const half = Math.ceil(imageSet.length / 2);
const t1 = document.getElementById('marqueeTrack1');
const t2 = document.getElementById('marqueeTrack2');
if (t1) t1.innerHTML = buildMarqueeHTML(imageSet.slice(0, half));
if (t2) t2.innerHTML = buildMarqueeHTML(imageSet.slice(half));


// ===== NAVIGATION =====
const mainNavbar = document.getElementById('mainNavbar');
const navLinks   = document.querySelectorAll('.nav-link');

function handleNavScroll() {
    if (window.scrollY > 60) {
        mainNavbar.classList.add('scrolled');
    } else {
        mainNavbar.classList.remove('scrolled');
    }

    // Active link tracking
    let current = '';
    document.querySelectorAll('section[id]').forEach(section => {
        if (window.scrollY + 120 >= section.offsetTop) {
            current = section.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
}

window.addEventListener('scroll', handleNavScroll, { passive: true });


// ===== MOBILE DRAWER =====
const mobileMenuBtn  = document.getElementById('mobileMenuBtn');
const mobileDrawer   = document.getElementById('mobileDrawer');
const mobileOverlay  = document.getElementById('mobileOverlay');
const drawerCloseBtn = document.getElementById('drawerCloseBtn'); // FIX 1

function openDrawer() {
    mobileDrawer.classList.add('open');
    mobileOverlay.classList.add('show');
    mobileMenuBtn.classList.add('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}
function closeDrawer() {
    mobileDrawer.classList.remove('open');
    mobileOverlay.classList.remove('show');
    mobileMenuBtn.classList.remove('open');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

mobileMenuBtn?.addEventListener('click', () => {
    mobileDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
});
mobileOverlay?.addEventListener('click', closeDrawer);
drawerCloseBtn?.addEventListener('click', closeDrawer); // FIX 1: close button wired up
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
});


// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// ===== ABOUT IMAGE SLIDER =====
const slides       = document.querySelectorAll('.slide-img');
const dots         = document.querySelectorAll('.slider-dots .dot');
const slideNumEl   = document.getElementById('slideCurrentNum');
const sliderPrev   = document.getElementById('sliderPrev');
const sliderNext   = document.getElementById('sliderNext');
let   currentSlide = 0;
let   slideTimer;

function showSlide(idx) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    currentSlide = (idx + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    if (slideNumEl) slideNumEl.textContent = String(currentSlide + 1).padStart(2, '0');
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }
function startAutoSlide() { slideTimer = setInterval(nextSlide, 3500); }
function stopAutoSlide()  { clearInterval(slideTimer); }

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { stopAutoSlide(); showSlide(i); startAutoSlide(); });
});
sliderPrev?.addEventListener('click', () => { stopAutoSlide(); prevSlide(); startAutoSlide(); });
sliderNext?.addEventListener('click', () => { stopAutoSlide(); nextSlide(); startAutoSlide(); });

const sliderWrap = document.querySelector('.about-slider-wrap');
sliderWrap?.addEventListener('mouseenter', stopAutoSlide);
sliderWrap?.addEventListener('mouseleave', startAutoSlide);

// Swipe support for slider
let touchStartX = 0;
sliderWrap?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive:true });
sliderWrap?.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { stopAutoSlide(); diff > 0 ? nextSlide() : prevSlide(); startAutoSlide(); }
});

startAutoSlide();


// ===== PHOTO GALLERY =====
const works = [
    { id:1,  cat:"portrait",   title:"Solitude in Light",   desc:"A study of natural window light and the quiet moments between thoughts.",                                               img:"images/flyer11.jpg",  ar:"3/4",   feat:true,  year:"2024", client:"Self-directed",    medium:"35mm Film" },
    { id:2,  cat:"landscape",  title:"Horizon Drift",        desc:"Minimalist coastal photography captured at the edge of dusk.",                                                           img:"images/pic12.jpg",  ar:"16/9",  feat:false, year:"2023", client:"GEO Magazine",     medium:"Digital" },
    { id:3,  cat:"editorial",  title:"Autumn Editorial",     desc:"Fashion editorial for a sustainable clothing brand, shot in the Scottish Highlands.",                                    img:"images/flyer5.jpg", ar:"2/3",   feat:false, year:"2024", client:"Vestiture Co.",    medium:"Medium Format" },
    { id:4,  cat:"branding",   title:"Mara Studio Identity", desc:"Visual identity system and product photography for a ceramics studio.",                                                  img:"images/pic15.jpg",  ar:"1/1",   feat:true,  year:"2023", client:"Mara Studio",      medium:"Digital" },
    { id:5,  cat:"abstract",   title:"Chromatic Dissolve",   desc:"Long exposure light painting exploring movement and impermanence.",                                                       img:"images/shirt3.jpg", ar:"4/3",   feat:false, year:"2022", client:"Self-directed",    medium:"Digital" },
    { id:6,  cat:"portrait",   title:"The Architect",        desc:"Portrait series documenting contemporary architects in their creative spaces.",                                           img:"images/pic6.jpg",   ar:"3/4",   feat:false, year:"2024", client:"Dezeen",           medium:"35mm Film" },
    { id:7,  cat:"landscape",  title:"Alpine Silence",       desc:"Winter highlands at first light — a two-day solo expedition in Norway.",                                                 img:"images/shirt1.jpg", ar:"16/9",  feat:false, year:"2023", client:"National Geographic",medium:"Digital" },
    { id:8,  cat:"editorial",  title:"Monochrome Moods",     desc:"A ten-look editorial exploring shadow, form, and the absence of color.",                                                 img:"images/flyer6.jpg", ar:"2/3",   feat:false, year:"2024", client:"Noir Journal",     medium:"Digital" },
    { id:9,  cat:"branding",   title:"Lumière Parfums",      desc:"Campaign imagery and brand photography for an indie fragrance house.",                                                   img:"images/pic16.jpg",  ar:"1/1",   feat:true,  year:"2024", client:"Lumière",          medium:"Medium Format" },
    { id:10, cat:"abstract",   title:"Texture Études",       desc:"Macro studies of natural surfaces — bark, stone, water — abstracted beyond recognition.",                                img:"images/pic18.jpg",  ar:"1/1",   feat:false, year:"2022", client:"Self-directed",    medium:"Macro Lens" },
    { id:11, cat:"portrait",   title:"Dancer at Rest",       desc:"Off-stage moments with the Royal Ballet ensemble between rehearsals.",                                                   img:"images/pic20.jpg",  ar:"3/4",   feat:false, year:"2023", client:"The Royal Ballet", medium:"35mm Film" },
    { id:12, cat:"landscape",  title:"Desert Passage",       desc:"Three weeks traversing the Sahara — light, dust, and endless geometry.",                                                 img:"images/flyer4.jpg", ar:"16/9",  feat:false, year:"2022", client:"Self-directed",    medium:"Digital" },
    { id:13, cat:"editorial",  title:"The New Formal",       desc:"Menswear editorial reimagining tailoring for an unstructured generation.",                                               img:"images/pic19.jpg",  ar:"2/3",   feat:false, year:"2024", client:"Manifold Mag",     medium:"Digital" },
    { id:14, cat:"branding",   title:"Arborist Collective",  desc:"Brand campaign for an urban tree-planting nonprofit — rooted in community.",                                             img:"images/shirt2.jpg", ar:"4/3",   feat:false, year:"2023", client:"Arborist Co.",     medium:"Digital" },
    { id:15, cat:"abstract",   title:"Refraction Study IV",  desc:"Prisms, light, and color as compositional elements in a studio series.",                                                 img:"images/pic21.jpg",  ar:"1/1",   feat:false, year:"2023", client:"Self-directed",    medium:"Studio" },
    { id:16, cat:"portrait",   title:"Still Waters",         desc:"Environmental portraits of fishermen along the Kerala backwaters at dawn.",                                               img:"images/flyer11.jpg",  ar:"3/4",   feat:false, year:"2022", client:"Documentary",      medium:"35mm Film" },
    { id:17, cat:"portrait",   title:"Golden Hour",          desc:"Warm light portraits captured in the late afternoon glow.",                                                              img:"images/flyer2.jpg", ar:"3/4",   feat:false, year:"2024", client:"Self-directed",    medium:"Digital" },
    { id:18, cat:"landscape",  title:"Green Canopy",         desc:"Lush forest landscape captured at dawn.",                                                                                img:"images/pic3.jpg",   ar:"3/4",   feat:false, year:"2024", client:"Self-directed",    medium:"Digital" },
    { id:19, cat:"landscape",  title:"Open Horizon",         desc:"Square format exploration of open spaces.",                                                                              img:"images/flyer7.jpg",  ar:"1/1",   feat:false, year:"2024", client:"Self-directed",    medium:"Digital" },
];

let currentFilter = 'all';
let currentLayout = 'masonry';
let filtered = [...works];

function editorialSpan(i) {
    const patterns = [
        [7,4],[5,4],[4,3],[4,3],[4,3],[6,4],[6,4],[3,3],[5,3],[4,3],
        [5,4],[7,4],[4,3],[4,3],[4,3],[6,4],[6,4],[3,3],[5,3]
    ];
    const p = patterns[i % patterns.length];
    return { col: p[0], row: p[1] };
}

function renderGallery() {
    const grid = document.getElementById('photoGrid');
    if (!grid) return;
    grid.innerHTML = '';
    grid.className = `grid-${currentLayout}`;

    filtered.forEach((w, i) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.style.animationDelay = `${Math.min(i * 0.045, 0.5)}s`;
        card.dataset.index = i;

        if (currentLayout === 'editorial') {
            const s = editorialSpan(i);
            card.style.gridColumn = `span ${s.col}`;
            card.style.gridRow    = `span ${s.row}`;
        }

        const isFullUrl = w.img.startsWith('http') || w.img.startsWith('images/');
        const imgSrc = isFullUrl ? w.img : `https://images.unsplash.com/photo-${w.img}`;
        const needsHeight = currentLayout === 'editorial' || currentLayout === 'uniform';

        // FIX 3: No card-hover-info rendered, no click event attached
        card.innerHTML = `
            ${w.feat ? '<span class="featured-badge">Featured</span>' : ''}
            <img class="card-img" src="${imgSrc}" alt="${w.title}" loading="lazy"
                 style="aspect-ratio:${w.ar};${needsHeight ? 'height:100%;' : ''}">
        `;

        grid.appendChild(card);
    });
}

// Filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filtered = currentFilter === 'all' ? [...works] : works.filter(w => w.cat === currentFilter);
        const gc = document.getElementById('galleryContainer');
        if (gc) {
            gc.style.opacity = '0';
            setTimeout(() => { renderGallery(); gc.style.opacity = '1'; }, 280);
        }
    });
});

// Layout
document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLayout = btn.dataset.layout;
        renderGallery();
    });
});

renderGallery();


// ===== LIGHTBOX (only used if triggered manually — not from photo grid) =====
const lightbox = document.getElementById('lightbox');
const lbClose  = document.getElementById('lbClose');
const lbPrev   = document.getElementById('lbPrev');
const lbNext   = document.getElementById('lbNext');
const lbImg    = document.getElementById('lbImg');

function closeLightbox() {
    lightbox?.classList.remove('open');
    document.body.style.overflow = '';
}

lbClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', e => {
    if (!lightbox?.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
});


// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    const txt = btn.querySelector('.btn-submit-text');
    txt.textContent = 'Sending…';
    btn.disabled = true;
    setTimeout(() => {
        txt.textContent = 'Message Sent ✓';
        btn.style.background = '#2a9d5c';
        setTimeout(() => {
            txt.textContent = 'Send Message';
            btn.disabled = false;
            btn.style.background = '';
            contactForm.reset();
        }, 3000);
    }, 1500);
});


// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

function observeRevealTargets() {
    document.querySelectorAll('.service-card, .tool-card').forEach((el, i) => {
        el.style.transitionDelay = `${i * 0.06}s`;
        revealObserver.observe(el);
    });
    document.querySelectorAll('.marquee-item').forEach((el, i) => {
        el.style.transitionDelay = `${Math.min(i * 0.025, 0.4)}s`;
        revealObserver.observe(el);
    });
}


// ===== CUSTOM CURSOR =====
const cursor     = document.getElementById('customCursor');
const cursorRing = document.getElementById('customCursorRing');
const cursorText = document.getElementById('cursorText');

if (cursor && cursorRing) {
    let mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        cursor.style.left = mx + 'px';
        cursor.style.top  = my + 'px';
    });

    (function animRing() {
        rx += (mx - rx) * 0.11;
        ry += (my - ry) * 0.11;
        cursorRing.style.left = rx + 'px';
        cursorRing.style.top  = ry + 'px';
        requestAnimationFrame(animRing);
    })();

    document.querySelectorAll('a, button, .service-card, .tool-card, .marquee-item, .filter-btn, .layout-btn, .btn-hero-primary, .btn-gold').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.classList.add('expanded');
            if (cursorText) cursorText.textContent = 'VIEW';
        });
        el.addEventListener('mouseleave', () => {
            cursorRing.classList.remove('expanded');
            if (cursorText) cursorText.textContent = '';
        });
    });

    document.addEventListener('mouseleave', () => { cursor.style.opacity='0'; cursorRing.style.opacity='0'; });
    document.addEventListener('mouseenter', () => { cursor.style.opacity='1'; cursorRing.style.opacity='1'; });
}


// ===== INIT ALL =====
function initAllAfterLoad() {
    observeRevealTargets();
    setTimeout(observeRevealTargets, 500);
}

// Initial call in case elements already in view
setTimeout(() => {
    observeRevealTargets();
    handleNavScroll();
}, 200);

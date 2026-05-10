/* ============================================================
   BrightFocus Media — script.js (Logo Redesign)
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
    { url: "images/flyer1.webp",   size: "tall",      alt: "Portrait study" },
    { url: "images/shirt2.webp",   size: "landscape",  alt: "Editorial fashion" },
    { url: "images/flyer10.webp",  size: "tall",       alt: "Urban fashion" },
    { url: "images/flyer2.webp",   size: "wide",       alt: "Landscape view" },
    { url: "images/flyer3.webp",   size: "tall",       alt: "Editorial portrait" },
    { url: "images/pic1.webp",     size: "tall",       alt: "Artistic portrait" },
    { url: "images/flyer12.webp",  size: "tall",       alt: "Mountain range" },
    { url: "images/pic2.webp",     size: "wide",       alt: "Cinematic wide shot" },
    { url: "images/flyer7.webp",   size: "landscape",  alt: "Creative composition" },
    { url: "images/flyer8.webp",   size: "square",     alt: "Art direction" },
    { url: "images/pic7.webp",     size: "square",     alt: "Design composition" },
    { url: "images/pic8.webp",     size: "wide",       alt: "Portrait photography" },
    { url: "images/shirt3.webp",   size: "landscape",  alt: "Fashion portrait" },
    { url: "images/pic9.webp",     size: "wide",       alt: "Studio portrait" },
    { url: "images/shirt4.webp",   size: "landscape",  alt: "Cityscape" },
    { url: "images/pic11.webp",    size: "landscape",  alt: "Architecture" },
    { url: "images/shirt1.webp",   size: "landscape",  alt: "Street photography" }
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
const drawerCloseBtn = document.getElementById('drawerCloseBtn');

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
drawerCloseBtn?.addEventListener('click', closeDrawer);
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

let touchStartX = 0;
sliderWrap?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive:true });
sliderWrap?.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) { stopAutoSlide(); diff > 0 ? nextSlide() : prevSlide(); startAutoSlide(); }
});

startAutoSlide();


// ===== PHOTO GALLERY =====
// Categories: flyers (flyer*.webp), photos (pic*.webp), branding (shirt*.webp)
const works = [
    // ── FLYERS ──────────────────────────────────────────────────────────────
    { id:1,  cat:"flyers",   title:"Event Flyer I",        desc:"Bold typographic event flyer designed for maximum visual impact.",                          img:"images/flyer1.webp",   ar:"3/4",   feat:true,  year:"2024", client:"Self-directed",  medium:"Digital" },
    { id:2,  cat:"flyers",   title:"Promo Flyer II",       desc:"Promotional design with layered gradients and striking headline treatment.",                  img:"images/flyer2.webp",   ar:"3/4",   feat:false, year:"2024", client:"Client Project", medium:"Digital" },
    { id:3,  cat:"flyers",   title:"Event Flyer III",      desc:"Clean layout flyer balancing photography and bold typography.",                               img:"images/flyer3.webp",   ar:"3/4",   feat:false, year:"2023", client:"Self-directed",  medium:"Digital" },
    { id:4,  cat:"flyers",   title:"Promo Flyer IV",       desc:"Vibrant promotional piece built around a strong color palette.",                              img:"images/flyer4.webp",   ar:"3/4",   feat:false, year:"2023", client:"Client Project", medium:"Digital" },
    { id:5,  cat:"flyers",   title:"Event Flyer V",        desc:"High-energy flyer with dynamic composition and layered visual elements.",                     img:"images/flyer5.webp",   ar:"3/4",   feat:false, year:"2024", client:"Self-directed",  medium:"Digital" },
    { id:6,  cat:"flyers",   title:"Promo Flyer VI",       desc:"Dark-themed promotional graphic with cinematic atmosphere.",                                  img:"images/flyer6.webp",   ar:"3/4",   feat:false, year:"2024", client:"Client Project", medium:"Digital" },
    { id:7,  cat:"flyers",   title:"Event Flyer VII",      desc:"Minimal yet impactful flyer design using negative space effectively.",                        img:"images/flyer7.webp",   ar:"1/1",   feat:false, year:"2023", client:"Self-directed",  medium:"Digital" },
    { id:8,  cat:"flyers",   title:"Promo Flyer VIII",     desc:"Split-layout flyer combining photographic and illustrated elements.",                         img:"images/flyer8.webp",   ar:"3/4",   feat:false, year:"2023", client:"Client Project", medium:"Digital" },
    { id:9,  cat:"flyers",   title:"Event Flyer X",        desc:"Neon-accent flyer for a night event — bold, atmospheric, and striking.",                      img:"images/flyer10.webp",  ar:"3/4",   feat:false, year:"2024", client:"Self-directed",  medium:"Digital" },
    { id:10, cat:"flyers",   title:"Event Flyer XI",       desc:"Textured background flyer with hand-crafted typographic hierarchy.",                          img:"images/flyer11.webp",  ar:"3/4",   feat:false, year:"2023", client:"Client Project", medium:"Digital" },
    { id:11, cat:"flyers",   title:"Event Flyer XII",      desc:"Cinematic wide-format flyer merging photography and graphic elements.",                       img:"images/flyer12.webp",  ar:"3/4",   feat:true,  year:"2024", client:"Self-directed",  medium:"Digital" },

    // ── PHOTOS ──────────────────────────────────────────────────────────────
    { id:12, cat:"photos",   title:"Portrait Series I",    desc:"Natural light portrait study — quiet intensity captured in a single frame.",                  img:"images/pic1.webp",     ar:"3/4",   feat:true,  year:"2024", client:"Self-directed",  medium:"35mm Film" },
    { id:13, cat:"photos",   title:"Street Frame II",      desc:"Candid street moment — the decisive instant frozen mid-motion.",                              img:"images/pic2.webp",     ar:"16/9",  feat:false, year:"2023", client:"Documentary",     medium:"Digital" },
    { id:14, cat:"photos",   title:"Green Canopy III",     desc:"Lush forest landscape captured at dawn — soft light through the canopy.",                     img:"images/pic3.webp",     ar:"3/4",   feat:false, year:"2024", client:"Self-directed",  medium:"Digital" },
    { id:15, cat:"photos",   title:"Portrait Study VI",    desc:"Environmental portrait — subject placed within a meaningful context.",                        img:"images/pic6.webp",     ar:"3/4",   feat:false, year:"2024", client:"Dezeen",          medium:"35mm Film" },
    { id:16, cat:"photos",   title:"Golden Frame VII",     desc:"Warm late-afternoon light wrapping a composed portrait session.",                             img:"images/pic7.webp",     ar:"1/1",   feat:false, year:"2023", client:"Self-directed",  medium:"Digital" },
    { id:17, cat:"photos",   title:"Studio Shot VIII",     desc:"Clean studio photography with precise lighting and minimal styling.",                         img:"images/pic8.webp",     ar:"16/9",  feat:false, year:"2024", client:"Client Project", medium:"Studio" },
    { id:18, cat:"photos",   title:"Outdoor Frame IX",     desc:"Outdoor portrait using natural reflectors and soft overcast light.",                          img:"images/pic9.webp",     ar:"16/9",  feat:false, year:"2023", client:"Self-directed",  medium:"Digital" },
    { id:19, cat:"photos",   title:"Editorial Look XI",    desc:"Strong editorial framing — leading lines and deliberate negative space.",                     img:"images/pic11.webp",    ar:"16/9",  feat:false, year:"2024", client:"Noir Journal",    medium:"Digital" },
    { id:20, cat:"photos",   title:"Fine Art XII",         desc:"Fine art photograph exploring light, texture, and minimal composition.",                      img:"images/pic12.webp",    ar:"16/9",  feat:false, year:"2023", client:"Self-directed",  medium:"Digital" },
    { id:21, cat:"photos",   title:"Colour Study XV",      desc:"Richly saturated colour study — subject and environment in dialogue.",                        img:"images/pic15.webp",    ar:"1/1",   feat:false, year:"2023", client:"Self-directed",  medium:"Digital" },
    { id:22, cat:"photos",   title:"Texture Study XVI",    desc:"Macro photography — surfaces abstracted into graphic compositions.",                          img:"images/pic16.webp",    ar:"1/1",   feat:false, year:"2022", client:"Self-directed",  medium:"Macro Lens" },
    { id:23, cat:"photos",   title:"Ambient Light XVIII",  desc:"Available-light portrait captured in a documentary style.",                                   img:"images/pic18.webp",    ar:"1/1",   feat:false, year:"2023", client:"Documentary",     medium:"35mm Film" },
    { id:24, cat:"photos",   title:"Motion Study XIX",     desc:"Controlled motion blur — movement rendered as visual poetry.",                                img:"images/pic19.webp",    ar:"2/3",   feat:false, year:"2024", client:"Self-directed",  medium:"Digital" },
    { id:25, cat:"photos",   title:"Portrait Depth XX",    desc:"Shallow depth-of-field portrait — subject emerging from soft bokeh.",                        img:"images/pic20.webp",    ar:"3/4",   feat:false, year:"2023", client:"The Royal Ballet", medium:"35mm Film" },
    { id:26, cat:"photos",   title:"Prism Study XXI",      desc:"Prism-refracted light creating abstract colour explosions in camera.",                        img:"images/pic21.webp",    ar:"1/1",   feat:false, year:"2023", client:"Self-directed",  medium:"Studio" },

    // ── BRANDING ─────────────────────────────────────────────────────────────
    { id:27, cat:"branding", title:"Apparel Brand I",      desc:"Product photography and brand identity work for a premium apparel label.",                   img:"images/shirt1.webp",   ar:"16/9",  feat:true,  year:"2024", client:"Apparel Client", medium:"Digital" },
    { id:28, cat:"branding", title:"Apparel Brand II",     desc:"Clean lifestyle photography for a minimalist clothing range.",                                img:"images/shirt2.webp",   ar:"16/9",  feat:false, year:"2024", client:"Apparel Client", medium:"Digital" },
    { id:29, cat:"branding", title:"Apparel Brand III",    desc:"Campaign imagery combining texture, colour, and strong art direction.",                       img:"images/shirt3.webp",   ar:"16/9",  feat:false, year:"2023", client:"Apparel Client", medium:"Digital" },
    { id:30, cat:"branding", title:"Apparel Brand IV",     desc:"On-model product shoot — clean, editorial, and commercially driven.",                        img:"images/shirt4.webp",   ar:"16/9",  feat:false, year:"2023", client:"Apparel Client", medium:"Digital" },
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

        const needsHeight = currentLayout === 'editorial' || currentLayout === 'uniform';

        card.innerHTML = `
            ${w.feat ? '<span class="featured-badge">Featured</span>' : ''}
            <img class="card-img" src="${w.img}" alt="${w.title}" loading="lazy"
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

// Layout toggle
document.querySelectorAll('.layout-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.layout-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLayout = btn.dataset.layout;
        renderGallery();
    });
});

renderGallery();


// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lbClose  = document.getElementById('lbClose');

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
        btn.style.background = 'linear-gradient(135deg, #1a6fc4, #2e9fd8)';
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

setTimeout(() => {
    observeRevealTargets();
    handleNavScroll();
}, 200);

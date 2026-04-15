// ========== PRELOADER ==========
const preloader = document.getElementById('preloader');
const mainContent = document.getElementById('mainContent');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const loadingStatus = document.getElementById('loadingStatus');

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
    const progress = (loadedCount / totalImages) * 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.floor(progress) + '%';
    if (progress < 30) loadingStatus.textContent = 'Loading creative assets... 📷';
    else if (progress < 60) loadingStatus.textContent = 'Processing visual stories... 🎬';
    else if (progress < 90) loadingStatus.textContent = 'Almost ready... 🎨';
    else loadingStatus.textContent = 'Ready to inspire! ✨';
}

function preloadImages() {
    imageUrls.forEach((url) => {
        const img = new Image();
        img.onload = () => { loadedCount++; updateProgress(); if (loadedCount === totalImages) finishLoading(); };
        img.onerror = () => { loadedCount++; updateProgress(); if (loadedCount === totalImages) finishLoading(); };
        img.src = url;
    });
}

function finishLoading() {
    setTimeout(() => {
        preloader.classList.add('hide');
        mainContent.classList.add('visible');
        setTimeout(() => { preloader.style.display = 'none'; }, 800);
    }, 500);
}
preloadImages();

// ========== TYPED TEXT ==========
const words = ["Photographer", "Video Editor", "Graphic Designer"];
let wordIndex = 0, charIndex = 0, isDeleting = false;
const typedElement = document.getElementById("typed-text");

function typeEffect() {
    if (!typedElement) return;
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typedElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, isDeleting ? 60 : 120);
}
typeEffect();

// ========== MARQUEE GALLERY DATA ==========
const imageSet = [
    { url: "images/flyer1.jpg", size: "tall", alt: "Portrait study" },
    { url: "images/shirt2.jpg", size: "landscape", alt: "Editorial fashion" },
    { url: "images/pic3.jpg", size: "tall", alt: "Urban fashion" },
    { url: "images/flyer2.jpg", size: "wide", alt: "Landscape view" },
    { url: "images/flyer3.jpg", size: "tall", alt: "Editorial portrait" },
    { url: "images/pic1.jpg", size: "tall", alt: "Artistic portrait" },
    { url: "images/pic4.jpg", size: "wide", alt: "Mountain range" },
    { url: "images/pic2.jpg", size: "wide", alt: "Cinematic wide shot" },
    { url: "images/shirt1.jpg", size: "landscape", alt: "Creative composition" },
    { url: "images/pic6.jpg", size: "square", alt: "Art direction" },
    { url: "images/pic7.jpg", size: "square", alt: "Design composition" },
    { url: "images/pic8.jpg", size: "wide", alt: "Portrait photography" },
    { url: "images/shirt3.jpg", size: "landscape", alt: "Fashion portrait" },
    { url: "images/pic9.jpg", size: "wide", alt: "Studio portrait" },
    { url: "images/shirt4.png", size: "landscape", alt: "Cityscape" },
    { url: "images/pic10.jpg", size: "landscape", alt: "Architecture" },
    { url: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1100&h=800&fit=crop", size: "landscape", alt: "Street photography" }
];

function buildMarqueeItems(images) {
    let items = '';
    for (let i = 0; i < 3; i++) {
        images.forEach(img => {
            items += `<div class="marquee-item item-${img.size}"><img src="${img.url}" alt="${img.alt}" loading="lazy"></div>`;
        });
    }
    return items;
}

const half = Math.ceil(imageSet.length / 2);
const track1 = document.getElementById('marqueeTrack1');
const track2 = document.getElementById('marqueeTrack2');
if (track1) track1.innerHTML = buildMarqueeItems(imageSet.slice(0, half));
if (track2) track2.innerHTML = buildMarqueeItems(imageSet.slice(half));

// ========== SCROLL REVEAL ==========
function isElementInViewport(el, offset = 100) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight - offset && rect.bottom >= offset;
}

function revealCustomSections() {
    document.querySelectorAll('.service-card-custom').forEach((card, idx) => {
        if (!card.classList.contains('revealed-custom') && isElementInViewport(card)) {
            card.classList.add('revealed-custom');
            card.style.transitionDelay = `${idx * 0.05}s`;
        }
    });
    document.querySelectorAll('.tool-card-custom').forEach((card, idx) => {
        if (!card.classList.contains('revealed-custom') && isElementInViewport(card)) {
            card.classList.add('revealed-custom');
            card.style.transitionDelay = `${idx * 0.03}s`;
        }
    });
    document.querySelectorAll('.marquee-item').forEach((item, idx) => {
        if (!item.classList.contains('revealed') && isElementInViewport(item, 150)) {
            item.classList.add('revealed');
            item.style.transitionDelay = `${Math.min(idx * 0.02, 0.3)}s`;
        }
    });
}

document.querySelectorAll('.service-card-custom, .tool-card-custom').forEach(el => {
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease, all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
});
document.querySelectorAll('.marquee-item').forEach(el => {
    el.style.transition = 'opacity 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s cubic-bezier(0.2, 0.9, 0.4, 1.1)';
});

// ========== NAVBAR SCROLL EFFECTS ==========
const mainNavbar = document.getElementById('mainNavbar');
const navLinksCustom = document.querySelectorAll('.nav-link-custom');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        mainNavbar.classList.add('scrolled');
    } else {
        mainNavbar.classList.remove('scrolled');
    }
    
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksCustom.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === current) {
            link.classList.add('active');
        }
    });
    
    revealCustomSections();
});

// ========== PHOTOGRAPHY GALLERY ==========
const UNSPLASH = "https://images.unsplash.com/photo-";

const works = [
    { id:1, cat:"portrait", title:"Solitude in Light", desc:"A study of natural window light and the quiet moments between thoughts.", img:"1531746020798-e6953c6e8e04?w=800&q=80", ar:"3/4", feat:true, year:"2024", client:"Self-directed", medium:"35mm Film" },
    { id:2, cat:"landscape", title:"Horizon Drift", desc:"Minimalist coastal photography captured at the edge of dusk.", img:"1506905925346-21bda4d32df4?w=800&q=80", ar:"16/9", feat:false, year:"2023", client:"GEO Magazine", medium:"Digital" },
    { id:3, cat:"editorial", title:"Autumn Editorial", desc:"Fashion editorial for a sustainable clothing brand, shot in the Scottish Highlands.", img:"1441986300917-64674bd600d8?w=800&q=80", ar:"2/3", feat:false, year:"2024", client:"Vestiture Co.", medium:"Medium Format" },
    { id:4, cat:"branding", title:"Mara Studio Identity", desc:"Visual identity system and product photography for a ceramics studio.", img:"1493106641515-5b34c38c7d11?w=800&q=80", ar:"1/1", feat:true, year:"2023", client:"Mara Studio", medium:"Digital" },
    { id:5, cat:"abstract", title:"Chromatic Dissolve", desc:"Long exposure light painting exploring movement and impermanence.", img:"1541701494587-cb58502866ab?w=800&q=80", ar:"4/3", feat:false, year:"2022", client:"Self-directed", medium:"Digital" },
    { id:6, cat:"portrait", title:"The Architect", desc:"Portrait series documenting contemporary architects in their creative spaces.", img:"1507003211169-0a1dd7228f2d?w=800&q=80", ar:"3/4", feat:false, year:"2024", client:"Dezeen", medium:"35mm Film" },
    { id:7, cat:"landscape", title:"Alpine Silence", desc:"Winter highlands at first light — a two-day solo expedition in Norway.", img:"1464822759023-fed622ff2c3b?w=800&q=80", ar:"16/9", feat:false, year:"2023", client:"National Geographic", medium:"Digital" },
    { id:8, cat:"editorial", title:"Monochrome Moods", desc:"A ten-look editorial exploring shadow, form, and the absence of color.", img:"1515886657613-9f3515b0c78f?w=800&q=80", ar:"2/3", feat:false, year:"2024", client:"Noir Journal", medium:"Digital" },
    { id:9, cat:"branding", title:"Lumière Parfums", desc:"Campaign imagery and brand photography for an indie fragrance house.", img:"1563170351-be9072a9d55e?w=800&q=80", ar:"1/1", feat:true, year:"2024", client:"Lumière", medium:"Medium Format" },
    { id:10, cat:"abstract", title:"Texture Études", desc:"Macro studies of natural surfaces — bark, stone, water — abstracted beyond recognition.", img:"1558618666-fcd25c85cd64?w=800&q=80", ar:"1/1", feat:false, year:"2022", client:"Self-directed", medium:"Macro Lens" },
    { id:11, cat:"portrait", title:"Dancer at Rest", desc:"Off-stage moments with the Royal Ballet ensemble between rehearsals.", img:"1518611012118-696072aa579a?w=800&q=80", ar:"3/4", feat:false, year:"2023", client:"The Royal Ballet", medium:"35mm Film" },
    { id:12, cat:"landscape", title:"Desert Passage", desc:"Three weeks traversing the Sahara — light, dust, and endless geometry.", img:"1509316785289-025f5b846b35?w=800&q=80", ar:"16/9", feat:false, year:"2022", client:"Self-directed", medium:"Digital" },
    { id:13, cat:"editorial", title:"The New Formal", desc:"Menswear editorial reimagining tailoring for an unstructured generation.", img:"1490481651871-ab68de25d43d?w=800&q=80", ar:"2/3", feat:false, year:"2024", client:"Manifold Mag", medium:"Digital" },
    { id:14, cat:"branding", title:"Arborist Collective", desc:"Brand campaign for an urban tree-planting nonprofit — rooted in community.", img:"1448375240586-882707db888b?w=800&q=80", ar:"4/3", feat:false, year:"2023", client:"Arborist Co.", medium:"Digital" },
    { id:15, cat:"abstract", title:"Refraction Study IV", desc:"Prisms, light, and color as compositional elements in a studio series.", img:"1508739773434-c26b3d09e071?w=800&q=80", ar:"1/1", feat:false, year:"2023", client:"Self-directed", medium:"Studio" },
    { id:16, cat:"portrait", title:"Still Waters", desc:"Environmental portraits of fishermen along the Kerala backwaters at dawn.", img:"1534528741775-53994a69daeb?w=800&q=80", ar:"3/4", feat:false, year:"2022", client:"Documentary", medium:"35mm Film" },
];

let currentFilter = "all";
let currentLayout = "masonry";
let lightboxIndex = 0;
let filtered = [...works];

function getEditorialSpans(i) {
    const patterns = [
        "col-span:7 row-span:4", "col-span:5 row-span:4",
        "col-span:4 row-span:3", "col-span:4 row-span:3", "col-span:4 row-span:3",
        "col-span:6 row-span:4", "col-span:6 row-span:4",
        "col-span:3 row-span:3", "col-span:5 row-span:3", "col-span:4 row-span:3",
        "col-span:5 row-span:4", "col-span:7 row-span:4",
        "col-span:4 row-span:3", "col-span:4 row-span:3", "col-span:4 row-span:3",
        "col-span:6 row-span:4", "col-span:6 row-span:4",
    ];
    const p = patterns[i % patterns.length].split(" ");
    return { col: parseInt(p[0].split(":")[1]), row: parseInt(p[1].split(":")[1]) };
}

function renderGallery() {
    const grid = document.getElementById("photoGrid");
    if (!grid) return;
    grid.innerHTML = "";
    grid.className = `grid-${currentLayout}`;

    filtered.forEach((w, i) => {
        const card = document.createElement("div");
        card.className = "gallery-card";
        card.style.animationDelay = `${i * 0.04}s`;

        if (currentLayout === "editorial") {
            const s = getEditorialSpans(i);
            card.style.gridColumn = `span ${s.col}`;
            card.style.gridRow = `span ${s.row}`;
        }

        const imgSrc = `${UNSPLASH}${w.img}`;

        card.innerHTML = `
            ${w.feat ? '<span class="featured-badge">Featured</span>' : ''}
            <img class="card-img" src="${imgSrc}" alt="${w.title}" loading="lazy" style="aspect-ratio:${w.ar}; ${currentLayout==='editorial'||currentLayout==='uniform' ? 'height:100%;' : ''}">
            <div class="card-overlay-gallery">
                <span class="card-tag">${w.cat}</span>
                <div class="card-title-gallery">${w.title}</div>
                <div class="card-meta">${w.year} · ${w.client}</div>
            </div>
        `;

        card.addEventListener("click", () => openLightbox(i));
        grid.appendChild(card);
    });
}

function openLightbox(idx) {
    lightboxIndex = idx;
    const w = filtered[idx];
    document.getElementById("lb-img").src = `${UNSPLASH}${w.img}`;
    document.getElementById("lb-cat").textContent = w.cat;
    document.getElementById("lb-title").textContent = w.title;
    document.getElementById("lb-desc").textContent = w.desc;
    document.getElementById("lb-specs").innerHTML = `
        <div class="lb-spec"><span class="lb-spec-key">Year</span><span class="lb-spec-val">${w.year}</span></div>
        <div class="lb-spec"><span class="lb-spec-key">Client</span><span class="lb-spec-val">${w.client}</span></div>
        <div class="lb-spec"><span class="lb-spec-key">Medium</span><span class="lb-spec-val">${w.medium}</span></div>
    `;
    document.getElementById("lightbox").classList.add("open");
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("open");
}

// Gallery event listeners
document.getElementById("lb-close")?.addEventListener("click", closeLightbox);
document.getElementById("lb-prev")?.addEventListener("click", (e) => {
    e.stopPropagation();
    lightboxIndex = (lightboxIndex - 1 + filtered.length) % filtered.length;
    openLightbox(lightboxIndex);
});
document.getElementById("lb-next")?.addEventListener("click", (e) => {
    e.stopPropagation();
    lightboxIndex = (lightboxIndex + 1) % filtered.length;
    openLightbox(lightboxIndex);
});

document.getElementById("lightbox")?.addEventListener("click", function(e) {
    if (e.target === this) closeLightbox();
});

document.addEventListener("keydown", (e) => {
    const lb = document.getElementById("lightbox");
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") { lightboxIndex = (lightboxIndex + 1) % filtered.length; openLightbox(lightboxIndex); }
    if (e.key === "ArrowLeft") { lightboxIndex = (lightboxIndex - 1 + filtered.length) % filtered.length; openLightbox(lightboxIndex); }
});

document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        filtered = currentFilter === "all" ? [...works] : works.filter(w => w.cat === currentFilter);
        const g = document.getElementById("galleryContainer");
        if (g) {
            g.style.opacity = "0";
            setTimeout(() => { renderGallery(); g.style.opacity = "1"; }, 250);
        }
    });
});

document.querySelectorAll(".layout-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".layout-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentLayout = btn.dataset.layout;
        renderGallery();
    });
});

renderGallery();

// ========== MOBILE MENU TOGGLE ==========
const mobileMenuBtn = document.querySelector('.mobile-menu-custom');
const navLinksContainer = document.querySelector('.nav-links-custom');

mobileMenuBtn?.addEventListener('click', () => {
    if (navLinksContainer.style.display === 'flex') {
        navLinksContainer.style.display = 'none';
    } else {
        navLinksContainer.style.display = 'flex';
        navLinksContainer.style.flexDirection = 'column';
        navLinksContainer.style.position = 'absolute';
        navLinksContainer.style.top = '70px';
        navLinksContainer.style.right = '5%';
        navLinksContainer.style.backgroundColor = '#0a0a0a';
        navLinksContainer.style.padding = '1rem';
        navLinksContainer.style.borderRadius = '16px';
        navLinksContainer.style.border = '1px solid #333';
    }
});

navLinksCustom.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navLinksContainer.style.display = 'none';
        }
    });
});

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ========== ABOUT IMAGE SLIDER ==========
const slides = document.querySelectorAll('.about-premium .slide-img');
const dots = document.querySelectorAll('.about-premium .dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (dots[i]) dots[i].classList.remove('active');
    });
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
}

function nextSlide() { showSlide(currentSlide + 1); }
function startSlider() { slideInterval = setInterval(nextSlide, 3000); }
function stopSlider() { clearInterval(slideInterval); }

if (dots.length > 0) {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlider();
            showSlide(index);
            startSlider();
        });
    });
}

const sliderContainer = document.querySelector('.about-premium .about-image-slider');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopSlider);
    sliderContainer.addEventListener('mouseleave', startSlider);
    startSlider();
}

// ========== CUSTOM CURSOR ==========
const customCursor = document.getElementById('customCursor');
const customCursorRing = document.getElementById('customCursorRing');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

if (customCursor && customCursorRing) {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        customCursor.style.left = mouseX + 'px';
        customCursor.style.top = mouseY + 'px';
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        customCursorRing.style.left = ringX + 'px';
        customCursorRing.style.top = ringY + 'px';
        requestAnimationFrame(animateRing);
    }
    animateRing();

    const hoverElements = document.querySelectorAll('a, button, .service-card-custom, .tool-card-custom, .hero-cta, .filter-btn, .layout-btn, .gallery-card, .brand-item-premium');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => customCursorRing.classList.add('expanded'));
        el.addEventListener('mouseleave', () => customCursorRing.classList.remove('expanded'));
    });
}

// Initial triggers
setTimeout(() => {
    window.dispatchEvent(new Event('scroll'));
    revealCustomSections();
}, 100);
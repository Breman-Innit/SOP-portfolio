
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

    // ========== GALLERY DATA ==========
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

    // ========== SCROLL REVEAL FOR SERVICE CARDS & TOOL CARDS ==========
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
        const sections = document.querySelectorAll('section[id], .spread-section[id]');
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

    // ========== SPREAD CARDS POSITIONS ==========
    const POSITIONS = [
        { id:'card-0', tx:-0.36, ty:-0.36, rot:-8  },
        { id:'card-1', tx: 0,   ty:-0.44, rot: 2  },
        { id:'card-2', tx: 0.36, ty:-0.36, rot: 7  },
        { id:'card-3', tx:-0.44, ty: 0,   rot:-5  },
        { id:'card-4', tx: 0.44, ty: 0,   rot: 4  },
        { id:'card-5', tx:-0.36, ty: 0.36, rot: 6  },
        { id:'card-6', tx: 0,   ty: 0.44, rot:-3  },
        { id:'card-7', tx: 0.36, ty: 0.36, rot:-9  },
    ];

    let isSpread = false;
    let tickingSpread = false;

    function applySpread() {
        if (isSpread) return;
        isSpread = true;
        const size = document.getElementById('stage').getBoundingClientRect().width;
        POSITIONS.forEach((pos, i) => {
            const el = document.getElementById(pos.id);
            if (el) {
                el.style.setProperty('--tx', (pos.tx * size) + 'px');
                el.style.setProperty('--ty', (pos.ty * size) + 'px');
                el.style.setProperty('--tr', pos.rot + 'deg');
                el.style.transitionDelay = (i * 0.06) + 's';
                el.classList.remove('stacked');
                el.classList.add('spread');
            }
        });
    }

    function applyStack() {
        if (!isSpread) return;
        isSpread = false;
        POSITIONS.forEach((pos, i) => {
            const el = document.getElementById(pos.id);
            if (el) {
                el.style.transitionDelay = (i * 0.04) + 's';
                el.classList.remove('spread');
                el.classList.add('stacked');
            }
        });
    }

    function checkSpreadScroll() {
        const spreadSection = document.getElementById('spread-section');
        if (!spreadSection) return;
        const rect = spreadSection.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = rect.top + rect.height / 2;
        const inZone = center > vh * 0.15 && center < vh * 0.85;
        inZone ? applySpread() : applyStack();
    }

    window.addEventListener('scroll', () => {
        if (!tickingSpread) {
            requestAnimationFrame(() => { checkSpreadScroll(); tickingSpread = false; });
            tickingSpread = true;
        }
    });
    window.addEventListener('resize', () => { if (isSpread) { isSpread = false; applySpread(); } });
    checkSpreadScroll();

    // ========== CARD CLICK EXPANSION ==========
    const overlay = document.getElementById('card-overlay');
    const expImg = document.getElementById('exp-img');
    const expTag = document.getElementById('exp-tag');
    const expTitle = document.getElementById('exp-title');
    const expDesc = document.getElementById('exp-desc');
    const expYear = document.getElementById('exp-year');
    const expMedium = document.getElementById('exp-medium');

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('spread')) return;
            const img = card.querySelector('img');
            expImg.src = img.src;
            expImg.alt = img.alt;
            expTag.textContent = card.dataset.tag;
            expTitle.textContent = card.dataset.title;
            expDesc.textContent = card.dataset.desc;
            expYear.textContent = card.dataset.year;
            expMedium.textContent = card.dataset.medium;
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeOverlay() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.getElementById('card-close')?.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) closeOverlay(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOverlay(); });

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

    // Initial triggers
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
        revealCustomSections();
    }, 100);

    // ========== ABOUT SECTION IMAGE SLIDER ==========
const slides = document.querySelectorAll('.slide-img');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });
    
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 3000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

// Add click handlers to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        stopSlider();
        showSlide(index);
        startSlider();
    });
});

// Pause on hover
const sliderContainer = document.querySelector('.about-image-slider');
sliderContainer.addEventListener('mouseenter', stopSlider);
sliderContainer.addEventListener('mouseleave', startSlider);

// Start the slider
startSlider();
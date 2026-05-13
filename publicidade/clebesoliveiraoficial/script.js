/**
 * Clebes Oliveira - Quase Originais
 * Static Website - Vanilla JavaScript
 */

// ============================================
// DATA
// ============================================

const events = [
    {
        id: 1,
        title: 'Quase Originais',
        date: '15 de maio',
        time: '22h30',
        location: 'Clube Barbixas de Comédia',
        city: 'São Paulo',
        price: 'R$ 30-35',
        image: './assets/evento1.jpg'
    },
    {
        id: 2,
        title: 'Quase Originais - Turnê',
        date: '22 de maio',
        time: '21h00',
        location: 'Teatro Municipal',
        city: 'Rio de Janeiro',
        price: 'R$ 40-50',
        image: './assets/evento2.jpeg'
    },
    {
        id: 3,
        title: 'Quase Originais - Belo Horizonte',
        date: '29 de maio',
        time: '20h30',
        location: 'Sala de Shows',
        city: 'Belo Horizonte',
        price: 'R$ 35-45',
        image: './assets/evento3.jpeg'
    }
];

const galleryItems = [
    {
        id: 1,
        type: 'Post',
        title: 'Clebes Oliveira',
        image: './assets/instagram1.jpg'
    },
    {
        id: 2,
        type: 'Post',
        title: 'Leopicardias em Destaque',
        image: './assets/instagram2.jpg'
    },
    {
        id: 3,
        type: 'Post',
        title: 'Evento Quase Originais',
        image: './assets/instagram3.jpg'
    },
    {
        id: 4,
        type: 'Post',
        title: 'Bastidores',
        image: './assets/instagram4.jpg'
    },
    {
        id: 5,
        type: 'Post',
        title: 'Leopicardias na mídia',
        image: './assets/instagram5.jpg'
    }
];

// ============================================
// CAROUSEL STATE
// ============================================

let currentEventIndex = 0;

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
    initGallery();
    initScrollAnimations();
    initSmoothScroll();
});

// ============================================
// CAROUSEL FUNCTIONS
// ============================================

function initCarousel() {
    renderEventCards();
    renderCarouselIndicators();
    attachCarouselListeners();
}

function renderEventCards() {
    const carouselTrack = document.getElementById('carouselTrack');
    carouselTrack.innerHTML = '';
    
    events.forEach((event, index) => {
        const card = createEventCard(event);
        carouselTrack.appendChild(card);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="event-image" onerror="this.src='./assets/placeholder.jpg'">
        <div class="event-content">
            <h3 class="event-title">${event.title}</h3>
            <div class="event-details">
                <div class="event-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>${event.date}</span>
                </div>
                <div class="event-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>${event.time}</span>
                </div>
                <div class="event-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>${event.location}, ${event.city}</span>
                </div>
                <div class="event-detail">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                    <span>${event.price}</span>
                </div>
            </div>
            <a href="https://bileto.sympla.com.br/event/119019/d/378029/s/2517584" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                Comprar Ingresso
            </a>
        </div>
    `;
    
    return card;
}

function renderCarouselIndicators() {
    const indicators = document.getElementById('carouselIndicators');
    indicators.innerHTML = '';
    
    events.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
        indicator.setAttribute('data-index', index);
        indicator.addEventListener('click', () => goToEvent(index));
        indicators.appendChild(indicator);
    });
}

function attachCarouselListeners() {
    document.getElementById('prevEvent').addEventListener('click', previousEvent);
    document.getElementById('nextEvent').addEventListener('click', nextEvent);
}

function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    const offset = -currentEventIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
    
    // Update indicators
    document.querySelectorAll('.carousel-indicator').forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentEventIndex);
    });
}

function nextEvent() {
    currentEventIndex = (currentEventIndex + 1) % events.length;
    updateCarousel();
}

function previousEvent() {
    currentEventIndex = (currentEventIndex - 1 + events.length) % events.length;
    updateCarousel();
}

function goToEvent(index) {
    currentEventIndex = index;
    updateCarousel();
}

// ============================================
// GALLERY FUNCTIONS
// ============================================

function initGallery() {
    renderGalleryItems();
}

function renderGalleryItems() {
    const gallery = document.getElementById('galleryGrid');
    gallery.innerHTML = '';
    
    galleryItems.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        gallery.appendChild(galleryItem);
    });
}

function createGalleryItem(item, index) {
    const div = document.createElement('div');
    div.className = 'gallery-item fade-in';
    div.style.animationDelay = `${index * 0.1}s`;
    
    const typeEmoji = item.type === 'reel' ? '🎬' : '📸';
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" onerror="this.src='./assets/placeholder.jpg'">
        <div class="gallery-overlay">
            <div>
                <div class="gallery-label">${typeEmoji} ${item.type.toUpperCase()}</div>
                <div class="gallery-title">${item.title}</div>
            </div>
        </div>
    `;
    
    return div;
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
    
    // Observe contact cards
    document.querySelectorAll('.contact-card').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Add scroll event listener for header effects if needed
window.addEventListener('scroll', function() {
    // Add any scroll-based effects here
    // e.g., header shadow, parallax, etc.
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function() {
    // Handle any resize-specific logic
});

// Keyboard navigation for carousel
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') {
        previousEvent();
    } else if (e.key === 'ArrowRight') {
        nextEvent();
    }
});

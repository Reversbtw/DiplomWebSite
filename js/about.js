// About page gallery images
const aboutGalleryImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791"
];

// Initialize Swiper for about page gallery
const aboutGallerySwiper = new Swiper('.photo-gallery .swiper', {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    speed: 1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Initialize gallery
function initAboutGallery() {
    const galleryWrapper = document.querySelector('#aboutGallerySlider');
    galleryWrapper.innerHTML = aboutGalleryImages
        .map(img => `
            <div class="swiper-slide">
                <img src="${img}" alt="TRAVEL FINDER Gallery">
            </div>
        `).join('');
    aboutGallerySwiper.update();
}

// Language switcher functionality
const langSwitch = document.querySelector('.lang-switch');
const langMenu = document.querySelector('.lang-menu');
const langOptions = document.querySelectorAll('.lang-option');
const currentLangText = document.querySelector('.current-lang');

langSwitch.addEventListener('click', () => {
    langMenu.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!langSwitch.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove('show');
    }
});

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        currentLangText.textContent = lang.toUpperCase();
        
        // Update active state
        langOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // Update translations
        updateTranslations(lang);
        
        langMenu.classList.remove('show');
    });
});

// Translations
const translations = {
    ru: {
        aboutTitle: 'О компании TRAVEL FINDER',
        aboutSubtitle: 'Ваш надежный партнер в мире путешествий с 2020 года',
        mission: 'Наша миссия',
        missionText: 'TRAVEL FINDER - это инновационная платформа для поиска и бронирования отелей по всему миру. Мы стремимся сделать путешествия доступными и комфортными для каждого.',
        whyUs: 'Почему выбирают нас',
        features: {
            hotels: {
                title: 'Большой выбор отелей',
                text: 'Более 100,000 отелей по всему миру'
            },
            prices: {
                title: 'Лучшие цены',
                text: 'Гарантия лучшей цены на рынке'
            },
            support: {
                title: '24/7 поддержка',
                text: 'Круглосуточная помощь клиентам'
            },
            security: {
                title: 'Безопасное бронирование',
                text: 'Защита данных и платежей'
            }
        },
        stats: {
            hotels: 'Отелей',
            clients: 'Клиентов',
            countries: 'Стран',
            support: 'Поддержка'
        },
        gallery: 'Галерея'
    },
    en: {
        aboutTitle: 'About TRAVEL FINDER',
        aboutSubtitle: 'Your reliable travel partner since 2020',
        mission: 'Our Mission',
        missionText: 'TRAVEL FINDER is an innovative platform for finding and booking hotels worldwide. We strive to make travel accessible and comfortable for everyone.',
        whyUs: 'Why Choose Us',
        features: {
            hotels: {
                title: 'Wide Hotel Selection',
                text: 'Over 100,000 hotels worldwide'
            },
            prices: {
                title: 'Best Prices',
                text: 'Best price guarantee in the market'
            },
            support: {
                title: '24/7 Support',
                text: 'Round-the-clock customer assistance'
            },
            security: {
                title: 'Secure Booking',
                text: 'Data and payment protection'
            }
        },
        stats: {
            hotels: 'Hotels',
            clients: 'Clients',
            countries: 'Countries',
            support: 'Support'
        },
        gallery: 'Gallery'
    }
};

// Update translations
function updateTranslations(lang) {
    document.querySelector('.hero h1').textContent = translations[lang].aboutTitle;
    document.querySelector('.hero-description').textContent = translations[lang].aboutSubtitle;
    
    document.querySelector('.about-text h2:first-of-type').textContent = translations[lang].mission;
    document.querySelector('.about-text p').textContent = translations[lang].missionText;
    document.querySelector('.about-text h2:last-of-type').textContent = translations[lang].whyUs;
    
    const features = document.querySelectorAll('.feature-item');
    features[0].querySelector('h3').textContent = translations[lang].features.hotels.title;
    features[0].querySelector('p').textContent = translations[lang].features.hotels.text;
    features[1].querySelector('h3').textContent = translations[lang].features.prices.title;
    features[1].querySelector('p').textContent = translations[lang].features.prices.text;
    features[2].querySelector('h3').textContent = translations[lang].features.support.title;
    features[2].querySelector('p').textContent = translations[lang].features.support.text;
    features[3].querySelector('h3').textContent = translations[lang].features.security.title;
    features[3].querySelector('p').textContent = translations[lang].features.security.text;
    
    document.querySelector('.photo-gallery h2').textContent = translations[lang].gallery;
    
    const statLabels = document.querySelectorAll('.stat-label');
    statLabels[0].textContent = translations[lang].stats.hotels;
    statLabels[1].textContent = translations[lang].stats.clients;
    statLabels[2].textContent = translations[lang].stats.countries;
    statLabels[3].textContent = translations[lang].stats.support;
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    initAboutGallery();
}); 
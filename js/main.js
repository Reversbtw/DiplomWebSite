// Initialize Swiper for featured hotels
const featuredSwiper = new Swiper('.featured-hotels .swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "coverflow",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

// Initialize Swiper for hotel modal gallery
const hotelSwiper = new Swiper('.hotel-swiper', {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    speed: 800,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Photo Gallery
const galleryImages = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    "https://images.unsplash.com/photo-1445019980597-93fa8acb246c",
    "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791"
];

// Initialize Swiper for photo gallery
const gallerySwiper = new Swiper('.photo-gallery .swiper', {
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

// DOM Elements
const authModal = document.getElementById('authModal');
const hotelModal = document.getElementById('hotelModal');
const authBtn = document.getElementById('authBtn');
const closeButtons = document.querySelectorAll('.close');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const tabBtns = document.querySelectorAll('.tab-btn');
const countryFilter = document.getElementById('countryFilter');
const cityFilter = document.getElementById('cityFilter');
const sortPrice = document.getElementById('sortPrice');
const hotelsGrid = document.getElementById('hotelsGrid');
const featuredHotels = document.getElementById('featuredHotels');
const locationSearch = document.getElementById('locationSearch');
const langSwitch = document.querySelector('.lang-switch');
const langMenu = document.querySelector('.lang-menu');
const langOptions = document.querySelectorAll('.lang-option');
const currentLangText = document.querySelector('.current-lang');

// State
let currentLanguage = 'ru';
let isAuthenticated = false;
let currentUser = null;

// Language translations
const translations = {
    ru: {
        // Navigation
        hotels: 'Отели',
        about: 'О нас',
        contacts: 'Контакты',
        login: 'Войти',
        register: 'Регистрация',
        logout: 'Выйти',

        // Hero section
        findHotel: 'Найдите идеальный отель для вашего путешествия',
        location: 'Страна или город',
        checkIn: 'Заезд',
        checkOut: 'Выезд',
        searchBtn: 'Найти',

        // Price range
        price: 'Цена',
        priceRanges: {
            all: 'Цена',
            low: 'До 5000 ₽',
            medium: '5000-15000 ₽',
            high: '15000-30000 ₽',
            luxury: 'От 30000 ₽'
        },

        // Filters
        allCountries: 'Все страны',
        allCities: 'Все города',
        priceSort: 'Сортировка по цене',
        ascending: 'По возрастанию',
        descending: 'По убыванию',

        // Hotel cards
        perNight: '₽ за ночь',
        rating: 'Рейтинг',
        book: 'Забронировать',

        // Hotel details
        amenities: 'Удобства',
        description: 'Описание',
        location: 'Расположение',
        reviews: 'Отзывы',
        bookNow: 'Забронировать сейчас',

        //Fhorogallary
        photogalary: 'Фотогалерея',
        
        // Booking form
        guestCount: 'Количество гостей',
        guests: {
            one: '1 гость',
            two: '2 гостя',
            three: '3 гостя',
            four: '4 гостя'
        },
        bookingSuccess: 'Бронирование успешно! Мы свяжемся с вами для подтверждения.',
        selectDates: 'Пожалуйста, выберите даты заезда и выезда',

        // Authentication
        email: 'Email',
        password: 'Пароль',
        name: 'Имя',
        confirmPassword: 'Подтвердите пароль',
        loginBtn: 'Войти',
        registerBtn: 'Зарегистрироваться',

        // Footer
        companyDescription: 'Ваш надежный помощник в поиске идеального отеля',
        contactInfo: 'Контактная информация',
        phone: '+7 (999) 123-45-67',
        email: 'info@travelfinder.ru',
        address: 'Москва, ул. Примерная, 123',
        socialMedia: 'Социальные сети',
        copyright: '© 2024 TRAVEL FINDER. Все права защищены.'
    },
    en: {
        // Navigation
        hotels: 'Hotels',
        about: 'About',
        contacts: 'Contacts',
        login: 'Login',
        register: 'Register',
        logout: 'Logout',

        // Hero section
        findHotel: 'Find your perfect hotel for your journey',
        location: 'Country or City',
        checkIn: 'Check-in',
        checkOut: 'Check-out',
        searchBtn: 'Search',

        // Price range
        price: 'Price',
        priceRanges: {
            all: 'Price',
            low: 'Up to ₽5,000',
            medium: '₽5,000-15,000',
            high: '₽15,000-30,000',
            luxury: 'Over ₽30,000'
        },
        
        //Fhorogallary
        photogalary: 'Photogallary',

        // Filters
        allCountries: 'All Countries',
        allCities: 'All Cities',
        priceSort: 'Sort by Price',
        ascending: 'Low to High',
        descending: 'High to Low',

        // Hotel cards
        perNight: '₽ per night',
        rating: 'Rating',
        book: 'Book Now',

        // Hotel details
        amenities: 'Amenities',
        description: 'Description',
        location: 'Location',
        reviews: 'Reviews',
        bookNow: 'Book Now',
        
        // Booking form
        guestCount: 'Number of Guests',
        guests: {
            one: '1 guest',
            two: '2 guests',
            three: '3 guests',
            four: '4 guests'
        },
        bookingSuccess: 'Booking successful! We will contact you for confirmation.',
        selectDates: 'Please select check-in and check-out dates',

        // Authentication
        email: 'Email',
        password: 'Password',
        name: 'Name',
        confirmPassword: 'Confirm Password',
        loginBtn: 'Login',
        registerBtn: 'Register',

        // Footer
        companyDescription: 'Your reliable assistant in finding the perfect hotel',
        contactInfo: 'Contact Information',
        phone: '+7 (999) 123-45-67',
        email: 'info@travelfinder.com',
        address: 'Moscow, Sample Street, 123',
        socialMedia: 'Social Media',
        copyright: '© 2024 TRAVEL FINDER. All rights reserved.'
    }
};

// Authentication functions
function toggleAuthModal() {
    const modal = document.getElementById('authModal');

    if (modal.style.display === 'block') {
        modal.style.display = 'none';
    } else {
        modal.style.display = 'flex';
    }
}

async function checkAuth() {
    try {
        const response = await fetch('/auth/check.php');
        const data = await response.json();
        if (data.authenticated) {
            isAuthenticated = true;
            currentUser = data.user;
            updateAuthButton();
        }
    } catch (error) {
        console.error('Auth check failed:', error);
    }
}

async function handleAuth(e) {
    e.preventDefault();
    const form = e.target;
    const isLogin = form.id === 'loginForm';
    const url = isLogin ? '/auth/login.php' : '/auth/register.php';
    
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (result.error) {
            alert(result.error);
            return;
        }

        if (result.success) {
            isAuthenticated = true;
            currentUser = result.user;
            updateAuthButton();
            document.getElementById('authModal').style.display = 'none';
        }
    } catch (error) {
        console.error('Auth request failed:', error);
        alert('Authentication failed. Please try again.');
    }
}

function updateAuthButton() {
    if (isAuthenticated && currentUser) {
        authBtn.textContent = currentUser.name;
        authBtn.onclick = logout;
    } else {
        authBtn.textContent = translations[currentLanguage].login;
        authBtn.onclick = toggleAuthModal;
    }
}

async function logout() {
    try {
        await fetch('/auth/logout.php');
        isAuthenticated = false;
        currentUser = null;
        updateAuthButton();
    } catch (error) {
        console.error('Logout failed:', error);
    }
}

// Hotel display functions
function displayFeaturedHotels() {
    const topHotels = [...hotels]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    featuredHotels.innerHTML = topHotels
        .map(hotel => createHotelSlide(hotel))
        .join('');

    featuredSwiper.update();
}

function createHotelSlide(hotel) {
    return `
        <div class="swiper-slide" onclick="window.location.href='hotel.html?id=${hotel.id}'">
            <img src="${hotel.images[0]}" alt="${hotel.name}">
            <div class="hotel-card-content">
                <h3>${hotel.name}</h3>
                <p>${hotel.city}, ${hotel.country}</p>
                <div class="price">${hotel.price} ${translations[currentLanguage].perNight}</div>
                <div class="rating">★ ${hotel.rating}</div>
            </div>
        </div>
    `;
}

function displayHotels(filteredHotels = hotels) {
    hotelsGrid.innerHTML = '';
    
    filteredHotels.forEach((hotel, index) => {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        hotelCard.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        hotelCard.style.opacity = '0';
        hotelCard.innerHTML = createHotelCardContent(hotel);
        hotelCard.onclick = () => window.location.href = `hotel.html?id=${hotel.id}`;
        hotelsGrid.appendChild(hotelCard);
    });
}

function createHotelCardContent(hotel) {
    return `
        <img src="${hotel.images[0]}" alt="${hotel.name}">
        <div class="hotel-card-content">
            <h3>${hotel.name}</h3>
            <p>${hotel.city}, ${hotel.country}</p>
            <div class="price">${hotel.price} ${translations[currentLanguage].perNight}</div>
            <div class="rating">★ ${hotel.rating}</div>
        </div>
    `;
}

function openHotelModal(hotelId) {
    const hotel = hotels.find(h => h.id === hotelId);
    if (!hotel) return;

    const modalContent = hotelModal.querySelector('.hotel-info');
    const galleryWrapper = hotelModal.querySelector('.swiper-wrapper');

    galleryWrapper.innerHTML = hotel.images
        .map(img => `
            <div class="swiper-slide">
                <img src="${img}" alt="${hotel.name}">
            </div>
        `).join('');

    modalContent.innerHTML = `
        <h2>${hotel.name}</h2>
        <p>${hotel.description}</p>
        <div class="hotel-details">
            <p><strong>${translations[currentLanguage].rating}:</strong> ★ ${hotel.rating}</p>
            <p><strong>${translations[currentLanguage].price}:</strong> ${hotel.price} ${translations[currentLanguage].perNight}</p>
            <p><strong>${translations[currentLanguage].amenities}:</strong></p>
            <ul class="amenities-list">
                ${hotel.amenities.map(amenity => `
                    <li class="amenity-item">
                        <i class="fas fa-check"></i>
                        ${amenity}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;

    hotelModal.style.display = 'block';
    hotelSwiper.update();
}

// Filter and sort functions
function populateFilters() {
    const countries = [...new Set(hotels.map(hotel => hotel.country))];
    const cities = [...new Set(hotels.map(hotel => hotel.city))];

    countryFilter.innerHTML = `
        <option value="">${translations[currentLanguage].allCountries}</option>
        ${countries.map(country => `<option value="${country}">${country}</option>`).join('')}
    `;

    cityFilter.innerHTML = `
        <option value="">${translations[currentLanguage].allCities}</option>
        ${cities.map(city => `<option value="${city}">${city}</option>`).join('')}
    `;

    sortPrice.innerHTML = `
        <option value="">${translations[currentLanguage].priceSort}</option>
        <option value="asc">${translations[currentLanguage].ascending}</option>
        <option value="desc">${translations[currentLanguage].descending}</option>
    `;
}

function filterByPrice(hotels) {
    const priceRange = document.getElementById('priceRange').value;
    if (!priceRange) return hotels;

    return hotels.filter(hotel => {
        const price = hotel.price;
        switch (priceRange) {
            case '0-5000':
                return price <= 5000;
            case '5000-15000':
                return price > 5000 && price <= 15000;
            case '15000-30000':
                return price > 15000 && price <= 30000;
            case '30000+':
                return price > 30000;
            default:
                return true;
        }
    });
}

function filterAndSortHotels() {
    let filtered = [...hotels];

    // Apply country filter
    if (countryFilter.value) {
        filtered = filtered.filter(hotel => hotel.country === countryFilter.value);
    }

    // Apply city filter
    if (cityFilter.value) {
        filtered = filtered.filter(hotel => hotel.city === cityFilter.value);
    }

    // Apply price range filter
    filtered = filterByPrice(filtered);

    // Apply search filter
    if (locationSearch.value) {
        const searchTerm = locationSearch.value.toLowerCase();
        filtered = filtered.filter(hotel => 
            hotel.name.toLowerCase().includes(searchTerm) ||
            hotel.city.toLowerCase().includes(searchTerm) ||
            hotel.country.toLowerCase().includes(searchTerm)
        );
    }

    // Apply price sorting
    if (sortPrice.value) {
        filtered.sort((a, b) => {
            return sortPrice.value === 'asc' ? a.price - b.price : b.price - a.price;
        });
    }

    displayHotels(filtered);
}

// Language switching
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    langSwitch.textContent = currentLanguage === 'ru' ? 'EN' : 'RU';
    updateTranslations();
}

function updateTranslations() {
    // Navigation
    document.querySelectorAll('.nav__list a').forEach((link, index) => {
        const keys = ['hotels', 'about', 'contacts'];
        link.textContent = translations[currentLanguage][keys[index]];
    });

    // Hero section
    document.querySelector('.hero h1').textContent = translations[currentLanguage].findHotel;
    document.querySelector('.search-form button').textContent = translations[currentLanguage].searchBtn;
    locationSearch.placeholder = translations[currentLanguage].location;
    document.getElementById('checkIn').placeholder = translations[currentLanguage].checkIn;
    document.getElementById('checkOut').placeholder = translations[currentLanguage].checkOut;

    // Price range
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        const options = priceRange.options;
        options[0].textContent = translations[currentLanguage].priceRanges.all;
        options[1].textContent = translations[currentLanguage].priceRanges.low;
        options[2].textContent = translations[currentLanguage].priceRanges.medium;
        options[3].textContent = translations[currentLanguage].priceRanges.high;
        options[4].textContent = translations[currentLanguage].priceRanges.luxury;
    }

    // Filters
    document.getElementById('countryFilter').querySelector('option').textContent = translations[currentLanguage].allCountries;
    document.getElementById('cityFilter').querySelector('option').textContent = translations[currentLanguage].allCities;
    const sortPrice = document.getElementById('sortPrice');
    if (sortPrice) {
        const options = sortPrice.options;
        options[0].textContent = translations[currentLanguage].priceSort;
        options[1].textContent = translations[currentLanguage].ascending;
        options[2].textContent = translations[currentLanguage].descending;
    }

    // Auth button
    document.getElementById('authBtn').textContent = isAuthenticated ? 
        translations[currentLanguage].logout : 
        translations[currentLanguage].login;

    // Auth modal
    document.querySelectorAll('.tab-btn').forEach(btn => {
        const tab = btn.dataset.tab;
        btn.textContent = translations[currentLanguage][tab];
    });

    // Update all input placeholders
    document.querySelectorAll('input[type="email"]').forEach(input => {
        input.placeholder = translations[currentLanguage].email;
    });
    document.querySelectorAll('input[type="password"]').forEach((input, index) => {
        input.placeholder = index === 1 ? 
            translations[currentLanguage].confirmPassword : 
            translations[currentLanguage].password;
    });

    // Footer
    document.querySelector('.footer__column p').textContent = translations[currentLanguage].companyDescription;
    document.querySelector('.footer__column h4').textContent = translations[currentLanguage].contactInfo;
    document.querySelector('.footer__bottom p').textContent = translations[currentLanguage].copyright;

    // Refresh hotel displays to update price text and other translations
    if (typeof displayHotels === 'function') {
        displayHotels();
    }
}

// Event Listeners
authBtn.addEventListener('click', toggleAuthModal);
loginForm.addEventListener('submit', handleAuth);
registerForm.addEventListener('submit', handleAuth);
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none';
    });
});

tabBtns.forEach(button => {
    button.addEventListener('click', () => {
        const tab = button.dataset.tab;
        document.querySelector('.tab-btn.active').classList.remove('active');
        button.classList.add('active');
        document.querySelector('.auth-forms form.active').classList.remove('active');
        document.getElementById(`${tab}Form`).classList.add('active');
    });
});

[countryFilter, cityFilter, sortPrice].forEach(filter => {
    filter.addEventListener('change', filterAndSortHotels);
});

locationSearch.addEventListener('input', filterAndSortHotels);
langSwitch.addEventListener('click', toggleLanguage);

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});

function initPhotoGallery() {
    const galleryWrapper = document.querySelector('#gallerySlider');
    galleryWrapper.innerHTML = galleryImages
        .map(img => `
            <div class="swiper-slide">
                <img src="${img}" alt="Hotel Photo">
            </div>
        `).join('');
    gallerySwiper.update();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    populateFilters();
    initPhotoGallery();
    displayHotels();
    updateAuthButton();
});

// Language Switcher
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
        if (currentLanguage !== lang) {
            currentLanguage = lang;
            currentLangText.textContent = lang.toUpperCase();
            
            // Update active state
            langOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            
            // Update translations
            updateTranslations();
        }
        langMenu.classList.remove('show');
    });
});

// Price range filter
function filterByPrice(hotels) {
    const priceRange = document.getElementById('priceRange').value;
    if (!priceRange) return hotels;

    return hotels.filter(hotel => {
        const price = hotel.price;
        switch (priceRange) {
            case '0-5000':
                return price <= 5000;
            case '5000-15000':
                return price > 5000 && price <= 15000;
            case '15000-30000':
                return price > 15000 && price <= 30000;
            case '30000+':
                return price > 30000;
            default:
                return true;
        }
    });
}

// Update filter and sort functions to include price range
function filterAndSortHotels() {
    let filtered = [...hotels];

    // Apply country filter
    if (countryFilter.value) {
        filtered = filtered.filter(hotel => hotel.country === countryFilter.value);
    }

    // Apply city filter
    if (cityFilter.value) {
        filtered = filtered.filter(hotel => hotel.city === cityFilter.value);
    }

    // Apply price range filter
    filtered = filterByPrice(filtered);

    // Apply search filter
    if (locationSearch.value) {
        const searchTerm = locationSearch.value.toLowerCase();
        filtered = filtered.filter(hotel => 
            hotel.name.toLowerCase().includes(searchTerm) ||
            hotel.city.toLowerCase().includes(searchTerm) ||
            hotel.country.toLowerCase().includes(searchTerm)
        );
    }

    // Apply price sorting
    if (sortPrice.value) {
        filtered.sort((a, b) => {
            return sortPrice.value === 'asc' ? a.price - b.price : b.price - a.price;
        });
    }

    displayHotels(filtered);
}

// Add price range to filter event listeners
document.getElementById('priceRange').addEventListener('change', filterAndSortHotels); 
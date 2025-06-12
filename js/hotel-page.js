// Initialize Swiper for hotel page gallery
const hotelPageSwiper = new Swiper('.hotel-page-swiper', {
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

// Get hotel ID from URL
const urlParams = new URLSearchParams(window.location.search);
const hotelId = parseInt(urlParams.get('id'));

// Function to load hotel data
function loadHotelData() {
    const hotel = hotels.find(h => h.id === hotelId);
    if (!hotel) {
        window.location.href = 'index.html';
        return;
    }

    // Update page title
    document.title = `${hotel.name} | TRAVEL FINDER`;

    // Load gallery images
    const galleryWrapper = document.querySelector('.hotel-page-swiper .swiper-wrapper');
    galleryWrapper.innerHTML = hotel.images
        .map(img => `
            <div class="swiper-slide">
                <img src="${img}" alt="${hotel.name}">
            </div>
        `).join('');

    // Update hotel information
    document.querySelector('.hotel-name').textContent = hotel.name;
    document.querySelector('.hotel-location span').textContent = `${hotel.city}, ${hotel.country}`;
    document.querySelector('.price-value').textContent = `${hotel.price} ₽`;
    document.querySelector('.hotel-description').textContent = hotel.description;

    // Update amenities
    const amenitiesList = document.querySelector('.amenities-list');
    const amenityIcons = {
        'Спа': 'spa',
        'Ресторан': 'utensils',
        'Фитнес-центр': 'dumbbell',
        'Бассейн': 'swimming-pool',
        'Бар на крыше': 'glass-martini-alt',
        'Конференц-залы': 'handshake',
        'Лыжная школа': 'skiing',
        'Бизнес-центр': 'briefcase',
        'Пляж': 'umbrella-beach',
        'Гольф': 'golf-ball',
        'Аквапарк': 'water',
        'Вертолетная площадка': 'helicopter',
        'Марина': 'anchor',
        'Чайная комната': 'coffee',
        'Бутик': 'shopping-bag',
        'Теннисный корт': 'table-tennis',
        'Винный парк': 'wine-glass-alt',
        'Медицинский центр': 'clinic-medical',
        'Хаммам': 'hot-tub',
        'Смотровая площадка': 'binoculars'
    };

    amenitiesList.innerHTML = hotel.amenities
        .map(amenity => `
            <div class="amenity-item">
                <i class="fas fa-${amenityIcons[amenity] || 'check'}"></i>
                ${amenity}
            </div>
        `).join('');

    // Update Swiper
    hotelPageSwiper.update();
}

// Initialize booking form
function initBookingForm() {
    const checkInInput = document.getElementById('check-in');
    const checkOutInput = document.getElementById('check-out');
    const guestsSelect = document.getElementById('guests');
    const bookBtn = document.querySelector('.book-btn');

    // Set minimum dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    checkInInput.min = today.toISOString().split('T')[0];
    checkOutInput.min = tomorrow.toISOString().split('T')[0];

    // Handle check-in date change
    checkInInput.addEventListener('change', () => {
        const checkInDate = new Date(checkInInput.value);
        const minCheckOutDate = new Date(checkInDate);
        minCheckOutDate.setDate(minCheckOutDate.getDate() + 1);
        checkOutInput.min = minCheckOutDate.toISOString().split('T')[0];
        
        if (checkOutInput.value && new Date(checkOutInput.value) <= checkInDate) {
            checkOutInput.value = minCheckOutDate.toISOString().split('T')[0];
        }
    });

    // Handle booking
    bookBtn.addEventListener('click', () => {
        if (!checkInInput.value || !checkOutInput.value) {
            alert('Пожалуйста, выберите даты заезда и выезда');
            return;
        }

        const bookingData = {
            hotelId,
            checkIn: checkInInput.value,
            checkOut: checkOutInput.value,
            guests: guestsSelect.value
        };

        // Here you would typically send this data to your backend
        console.log('Booking data:', bookingData);
        alert('Бронирование успешно! Мы свяжемся с вами для подтверждения.');
    });
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    if (!hotelId) {
        window.location.href = 'index.html';
        return;
    }

    loadHotelData();
    initBookingForm();
}); 
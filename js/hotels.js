const hotels = [
    {
        id: 1,
        name: "Гранд Отель Европа",
        country: "Россия",
        city: "Санкт-Петербург",
        price: 15000,
        rating: 4.8,
        description: "Исторический пятизвездочный отель в центре Санкт-Петербурга с видом на Невский проспект.",
        images: [
            "https://umagazine.ru/upload/iblock/a48/a48df361f009b2c303c357f74743dfc0.jpg",
            "https://i.pinimg.com/originals/7b/95/88/7b9588f066bbe9291f309a0fda85f366.jpg",
            "https://s0.rbk.ru/v6_top_pics/media/img/5/79/756612445142795.jpg"
        ],
        amenities: ["Спа", "Ресторан", "Фитнес-центр", "Бассейн"]
    },
    {
        id: 2,
        name: "Ritz-Carlton Moscow",
        country: "Россия",
        city: "Москва",
        price: 25000,
        rating: 4.9,
        description: "Роскошный отель в сердце Москвы с видом на Красную площадь.",
        images: [
            "https://realitypod.com/wp-content/uploads/2013/03/66.jpg",
            "https://aer-group.ru/assets/images/resources/283/03-ritz.jpg",
            "https://static.tildacdn.com/tild3430-6339-4838-b736-346535346235/5d8v6pt4e6i8ztz9m6yg.jpg"
        ],
        amenities: ["Спа", "Ресторан", "Бар на крыше", "Конференц-залы"]
    },
    {
        id: 3,
        name: "Сочи Марриотт Красная Поляна",
        country: "Россия",
        city: "Сочи",
        price: 12000,
        rating: 4.7,
        description: "Горнолыжный курорт с прямым доступом к склонам и спа-центром.",
        images: [
            "https://opuscontract.ru/upload/iblock/60d/0y3keu1dzhm1stz83y1tef969lzymszh/proekty_s_opuscontract.ru_hotel_mariott_sochi_krasnaya_polyana_009.jpg",
            "https://www.multitour.ru/files/imgs/hotel_500492_ed2c4f48c38f759930380e7f68c18867.jpg",
            "https://sochimarriott.com/wp-content/uploads/2021/09/aermc-presidential-suite-8384-hor-wide-1-1024x576.jpg"
        ],
        amenities: ["Спа", "Ресторан", "Лыжная школа", "Бассейн"]
    },
    {
        id: 4,
        name: "Hilton Garden Inn",
        country: "Россия",
        city: "Новосибирск",
        price: 8000,
        rating: 4.5,
        description: "Современный бизнес-отель в центре Новосибирска.",
        images: [
            "https://slk.su/wp-content/uploads/c41c0afc0d1e3ccc4228ecf35cb34848.jpg",
            "https://static.tildacdn.com/tild3263-3936-4033-a231-373739353230/IMG_3090.jpg",
            "https://avatars.mds.yandex.net/i?id=1224c80a503015ccdf03610c472a409a_l-9182420-images-thumbs&n=13"
        ],
        amenities: ["Бизнес-центр", "Ресторан", "Фитнес-центр"]
    },
    {
        id: 5,
        name: "Hyatt Regency",
        country: "Россия",
        city: "Екатеринбург",
        price: 10000,
        rating: 4.6,
        description: "Элегантный отель в деловом центре Екатеринбурга.",
        images: [
            "https://n1s2.hsmedia.ru/86/32/f0/8632f0604686a3cc3c2e7dffbaf79326/1920x1440_0xac120003_18865290221601381483.jpg",
            "https://a.travelcdn.mts.ru/property-photos/1633728227/2347900126/be0a5fc5ceb34f0136cec697aab05df2d3f865a2.jpeg",
            "https://avatars.mds.yandex.net/i?id=94d0bc7c5660fc4a8f21b683d692b52f_l-10815658-images-thumbs&n=13"
        ],
        amenities: ["Спа", "Ресторан", "Конференц-залы"]
    },
    {
        id: 6,
        name: "Four Seasons Istanbul",
        country: "Турция",
        city: "Стамбул",
        price: 18000,
        rating: 4.8,
        description: "Исторический отель с видом на Босфор.",
        images: [
            "https://i.pinimg.com/originals/f9/b6/34/f9b6348403ba5744a3df02cb36a33ddc.jpg",
            "https://i0.wp.com/www.lesclefsdor.org/wp-content/uploads/2023/01/FS-Sultanahmet-6-scaled.jpg?fit=2560%2C1706&ssl=1",
            "https://images.squarespace-cdn.com/content/v1/5e8c25dca9fc750c8a4e7255/1589450610176-GSEGRD12ROGEYOT425Y3/Two-Bedroom+Bosphorus+Palace+Suite_living+room.jpg"
        ],
        amenities: ["Спа", "Ресторан", "Бассейн", "Хаммам"]
    },
    {
        id: 7,
        name: "Rixos Premium Belek",
        country: "Турция",
        city: "Белек",
        price: 20000,
        rating: 4.9,
        description: "Роскошный пляжный курорт с собственным гольф-полем.",
        images: [
            "https://grandtour-nsk.ru/upload/iblock/f3d/yeusun1ml80psv5xbm9jdiu6yzb280kt/rixos_premium_003.jpg",
            "https://img.poehalisnami.uz/static/hotelroom/hotelroom_20255/orig/hotelroom20255_637840314568318475.jpg",
            "https://www.kone.com.tr/Images/RixosPremiumBelek_Pool03_property_banner_tcm115-11662.jpg"
        ],
        amenities: ["Спа", "Пляж", "Гольф", "Аквапарк"]
    },
    {
        id: 8,
        name: "Burj Al Arab",
        country: "ОАЭ",
        city: "Дубай",
        price: 95000,
        rating: 5.0,
        description: "Самый роскошный отель в мире в форме паруса.",
        images: [
            "https://blogs.forbes.ru/wp-content/uploads/2022/04/shutterstock_1431750602-2560.jpeg",
            "https://burj-al-arab-jumeirah.dubaihotelsoffers.com/data/Photos/OriginalPhoto/14721/1472106/1472106466.JPEG",
            "https://design.pibig.info/uploads/posts/2023-03/1679932851_design-pibig-info-p-burdzh-al-arab-interer-dizain-pinterest-73.jpg"
        ],
        amenities: ["Спа", "Вертолетная площадка", "Подводный ресторан"]
    },
    {
        id: 9,
        name: "Emirates Palace",
        country: "ОАЭ",
        city: "Абу-Даби",
        price: 75000,
        rating: 4.9,
        description: "Дворцовый отель с собственным пляжем и мариной.",
        images: [
            "https://www.fivestaralliance.com/files/fivestaralliance.com/field/image/nodes/2022/47211/MO_abu-dhabi-emirates-palace-fountains-night.jpeg",
            "https://www.elegant-travel.de/wp-content/uploads/Elegant-Travel-Luxusreisen-Hotel-Emirates-Palace-Abu-Dhabi-Restaurant-Draussen.webp",
            "https://avatars.mds.yandex.net/get-altay/901763/2a0000018714d6478a098738c6447f0ac9dc/orig"
        ],
        amenities: ["Спа", "Пляж", "Марина", "Рестораны"]
    },
    {
        id: 10,
        name: "The Peninsula",
        country: "Китай",
        city: "Гонконг",
        price: 45000,
        rating: 4.8,
        description: "Легендарный отель с видом на гавань Виктория.",
        images: [
            "https://mediapool.bmwgroup.com/cache/P9/201507/P90190118/P90190118-bmw-i8-joins-fleet-of-the-peninsula-hotel-shanghai-07-2015-2249px.jpg",
            "https://globalnewyorker-aws.s3.amazonaws.com/uploads/place/155/4c51afcf-3afd-420e-9ecb-0d103abb0fd5.jpg",
            "https://i0.wp.com/www.thesuitelife.com.hk/wp-content/uploads/2018/05/Peninsula-Shanghai-Grande-Deluxe-River-Suite.jpg?w=2000&ssl=1"
        ],
        amenities: ["Спа", "Вертолетная площадка", "Rolls-Royce трансфер"]
    },
    {
        id: 11,
        name: "Waldorf Astoria",
        country: "США",
        city: "Нью-Йорк",
        price: 55000,
        rating: 4.7,
        description: "Исторический отель на Парк-авеню.",
        images: [
            "https://images.squarespace-cdn.com/content/v1/56e36f751d07c0743d1e142f/1458663750972-XFT2ZAT1PA610KBQGL1N/The+Waldorf-Astoria+Art+Deco+Entrance?format=2500w",
            "https://www.waldorfastorianewyork.com/content/uploads/2024/11/WANY-Hotel-Park-Avenue-Lobby-003-1-1.jpg",
            "https://lp-cms-production.s3.amazonaws.com/public/2023-09/Franklin-Suite-Waldorf-Astoria-DC.jpeg"
        ],
        amenities: ["Спа", "Ресторан", "Бальный зал"]
    },
    {
        id: 12,
        name: "The Ritz London",
        country: "Великобритания",
        city: "Лондон",
        price: 65000,
        rating: 4.8,
        description: "Символ роскоши в сердце Лондона.",
        images: [
            "https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/02/21/18/ritzlondon.jpg",
            "https://images.squarespace-cdn.com/content/v1/5e10d487e563784fa5e4f652/1649073653096-62KHZHG7EXIPS20QUJAH/The+Ritz+Restaurant+%282%29+copy.jpg?format=2500w",
            "https://i.pinimg.com/originals/19/14/fa/1914fa116e9a9a1f6b148120ee1501c9.jpg"
        ],
        amenities: ["Спа", "Чайная комната", "Мишленовский ресторан"]
    },
    {
        id: 13,
        name: "Park Hyatt Paris-Vendôme",
        country: "Франция",
        city: "Париж",
        price: 70000,
        rating: 4.9,
        description: "Дворцовый отель в двух шагах от Вандомской площади.",
        images: [
            "https://passport-cdn.kiwicollection.com/blog/drive/uploads/2017/08/Park-Hyatt-Paris-Vendome-Facade-Feat.jpg",
            "https://www.travelplusstyle.com/wp-content/gallery/park-hyatt-paris-vendome/park-hyatt-paris-vendme-print-10.jpg",
            "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/05/30/1055/Hyatt-Regency-Paris-Etoile-P549-Standard-Full-View-Eiffel-Tower.jpg/Hyatt-Regency-Paris-Etoile-P549-Standard-Full-View-Eiffel-Tower.16x9.jpg?imwidth=2560"
        ],
        amenities: ["Спа", "Ресторан", "Бутик"]
    },
    {
        id: 14,
        name: "Belmond Copacabana Palace",
        country: "Бразилия",
        city: "Рио-де-Жанейро",
        price: 40000,
        rating: 4.7,
        description: "Исторический отель на пляже Копакабана.",
        images: [
            "https://www.impulsonegocios.com/wp-content/uploads/2020/04/copacabana-palace-2.jpg",
            "https://www.kayak.com.co/rimg/himg/9e/40/39/ice-173128076-70754024_3XL-377444.jpg?width=2160&height=1215&crop=true",
            "https://images.unsplash.com/photo-1590490360182-c33d57733427"
        ],
        amenities: ["Спа", "Пляж", "Теннисный корт"]
    },
    {
        id: 15,
        name: "Atlantis The Royal",
        country: "ОАЭ",
        city: "Дубай",
        price: 85000,
        rating: 5.0,
        description: "Новейший ультра-роскошный курорт в Дубае.",
        images: [
            "https://www.designreisen.de/assets/destinations/_processed_/6/7/csm_atlantistheroyal-product-hero-twilight1_481ae91357.jpg",
            "https://assets.kerzner.com/api/public/content/f0105cc1454a483f88b711a69c334cd3?v=06233869&t=w2880",
            "https://assets.kerzner.com/api/public/content/15a197352a9d40c4bb851c3275e84a77?v=3f634e42&t=w2880"
        ],
        amenities: ["Спа", "Аквапарк", "Рестораны знаменитых шеф-поваров"]
    },
    {
        id: 16,
        name: "Lotte Hotel",
        country: "Россия",
        city: "Владивосток",
        price: 9000,
        rating: 4.5,
        description: "Современный отель с видом на Золотой Рог.",
        images: [
            "https://avatars.mds.yandex.net/get-altay/4303674/2a000001776bbf2cb388496ffc1b18242390/orig",
            "https://a.travelcdn.mts.ru/property-photos/1633728227/2347900126/29dbf8b3250e716eec1d7b523393bef26dca7c9d.jpeg",
            "https://uploads2.stells.info/storage/jpg/6/5a/65a6a60c0169c0dc9b68d7c2bc80985c.jpg"
        ],
        amenities: ["Спа", "Ресторан", "Фитнес-центр"]
    },
    {
        id: 17,
        name: "Mriya Resort & Spa",
        country: "Россия",
        city: "Ялта",
        price: 18000,
        rating: 4.8,
        description: "Роскошный курорт на берегу Черного моря.",
        images: [
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/2ccc2870907527.5bb35b71e55d7.jpg",
            "https://mriya-resort-gintur.com/wp-content/uploads/2017/04/Mriya-Resort-SPA-23.jpg",
            "https://static.tildacdn.pro/tild6462-6331-4537-b339-303532376530/508f150ca3ef0406cde9.jpg"
        ],
        amenities: ["Спа", "Пляж", "Винный парк", "Медицинский центр"]
    },
    {
        id: 18,
        name: "Kazan Palace by Tasigo",
        country: "Россия",
        city: "Казань",
        price: 11000,
        rating: 4.6,
        description: "Исторический отель в отреставрированном особняке.",
        images: [
            "https://s01.cdn-pegast.net/get/3a/15/b1/f428fb2494361c0e5658be048bfd04defa0fe6d74335306a427b997084/671b4fba4e200.jpg",
            "https://blog.ostrovok.ru/wp-content/uploads/2024/12/5%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F-8.jpg",
            "https://vashotel-a.akamaihd.net/0000001536524272/e8553efcc7310a2d2e9c451085dd122f.jpg"
        ],
        amenities: ["Спа", "Ресторан", "Хаммам"]
    },
    {
        id: 19,
        name: "Radisson Royal Hotel",
        country: "Россия",
        city: "Москва",
        price: 16000,
        rating: 4.7,
        description: "Одна из сталинских высоток с панорамным видом на город.",
        images: [
            "http://static.wixstatic.com/media/c4e726_37a20c544227421689b2b9505bd8f260~mv2_d_3000_1877_s_2.jpg",
            "https://thefair.website.yandexcloud.net/images/participant/1277/portfolio/97950807-2c3c-434a-a5d6-a466ef1be258.webp",
            "https://russpass.ru/hotel/_next/image?url=https%3A%2F%2Fcms.russpass.ru%2Fv1%2Ffile%2F66164c5985b6071115766935&w=2048&q=75"
        ],
        amenities: ["Спа", "Ресторан", "Бассейн", "Смотровая площадка"]
    },
    {
        id: 20,
        name: "Swissotel Resort Сочи Камелия",
        country: "Россия",
        city: "Сочи",
        price: 14000,
        rating: 4.6,
        description: "Курортный отель с собственным пляжем и парком.",
        images: [
            "https://reghotel.com/wp-content/uploads/lushie-spa-oteli-rossii-swissotel.jpg",
            "https://s0.rbk.ru/v6_top_pics/media/img/2/55/756195976641552.jpg",
            "https://avatars.mds.yandex.net/i?id=bdcc6a4683e520bf6a1f40029052128a_l-3694967-images-thumbs&n=13"
        ],
        amenities: ["Спа", "Пляж", "Бассейн", "Теннисный корт"]
    },
     {
        id: 21,
        name: "The Villa Casa Casuarina",
        country: "США",
        city: "Майами",
        price: 55000,
        rating: 4.7,
        description: "Курортный отель с собственным пляжем и парком.",
        images: [
            "https://archello.s3.eu-central-1.amazonaws.com/images/2019/07/05/KE-CasaCasuarina-HighResolution-Miami-Photography-8.1562334326.9103.jpg",
            "https://imagery.hoteltonight.com/production/attachments/files/2119310/original_normalized.jpg",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/c7/21/19/garden-room.jpg"
        ],
        amenities: ["Спа", "Пляж", "Бассейн", "Теннисный корт"]
    }
]; 
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import styles bundle
import 'swiper/css/bundle';

// swiper element
const swiperEl = document.querySelector('swiper-container');

// swiper parameters
const swiperParams = {
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 26
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 32
        },
    },
    on: {
        init() {
            // ...
        },
    },
};

// now we need to assign all parameters to Swiper element
Object.assign(swiperEl, swiperParams);


// and now initialize it
swiperEl.initialize();

console.log(`Made js script `);

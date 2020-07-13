// import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const listingategories = new Swiper(
  '.o-listing-hero__slider .o-categories-slider__wrapper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    wrapperClass: 'o-categories-slider__row',
    slideClass: 'o-categories-slider__item',
    slideActiveClass: 'o-categories-slider__item--active',
    loop: true
  })


const FeaturedSlider = new Swiper('.o-featured__slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  wrapperClass: 'o-featured__slider-row',
  slideClass: 'o-featured__slider-item',
  slideActiveClass: 'o-featured__slider-item--active',
  loop: true
})


const categoriePostSlider = new Swiper('.o-categorie-post__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  wrapperClass: 'o-categorie-post__slider-row',
  slideClass: 'o-categorie-post__slider-item',
  slideActiveClass: 'o-categorie-post__slider-item--active',
  navigation: {
    nextEl: '.o-categorie-post__slider-arrow--next',
    prevEl: '.o-categorie-post__slider-arrow--prev',
    disabledClass: 'o-categorie-post__slider-arrow--disabled',
  },
})

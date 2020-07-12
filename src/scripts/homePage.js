// import Swiper JS
import Swiper from 'swiper';

const listingategories = new Swiper('.o-listing-hero__slider .o-categories-slider__wrapper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  wrapperClass: 'o-categories-slider__row',
  slideClass: 'o-categories-slider__item',
  slideActiveClass: 'o-categories-slider__item--active',
  loop: true
})

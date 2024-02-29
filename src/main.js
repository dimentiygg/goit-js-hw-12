import { getDataApi } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const secondLoader = document.querySelector('.second-loader');
const buttonLoadMore = document.querySelector('.load-more-button');
const gallery = document.querySelector('.gallery');
let currentPage;
let formValue;
let counter;

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
  event.preventDefault();
  buttonLoadMore.style.display = 'none';

  formValue = form.inputForm.value.trim();

  gallery.innerHTML = '';

  if (form.inputForm.value !== '') {
    loader.style.display = 'block';
    currentPage = 1;
    getDataApi(currentPage, formValue)
      .then(images => {
        if (images.hits.length === 0) {
          iziToast.error({
            title: 'Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }
        createMarkup(images.hits);

        counter = 15;
        buttonLoadMore.style.display = 'block';
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    iziToast.error({
      title: 'Error',
      message: 'field cannot be empty',
    });
  }
}

buttonLoadMore.addEventListener('click', LoadMore);

function LoadMore() {
  secondLoader.style.display = 'block';
  currentPage++;
  counter += 15;
  getDataApi(currentPage, formValue).then(images => {
    createMarkup(images.hits);
    const domRect =
      gallery.children[gallery.children.length - 14].getBoundingClientRect();

    window.scrollBy({
      top: domRect.y,
      left: domRect.x,
      behavior: 'smooth',
    });

    secondLoader.style.display = 'none';
    if (counter >= images.totalHits) {
      buttonLoadMore.style.display = 'none';
      iziToast.info({
        message:
          'We are sorry, but you have reached the end of search results.',
      });
    }
  });
}

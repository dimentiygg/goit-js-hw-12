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
let searchWord;

form.addEventListener('submit', onSubmit);
async function onSubmit(event) {
  event.preventDefault();
  buttonLoadMore.style.display = 'none';

  formValue = form.inputForm.value.trim();
  searchWord = formValue;
  gallery.innerHTML = '';

  if (formValue === '') {
    iziToast.error({
      title: 'Error',
      message: 'field cannot be empty',
    });
    return;
  }
  loader.style.display = 'block';
  currentPage = 1;
  try {
    const response = await getDataApi(currentPage, searchWord);
    if (response.hits.length === 0) {
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      loader.style.display = 'none';
      createMarkup(response.hits);
      counter = 15;
      buttonLoadMore.style.display = 'block';
    }
  } catch (error) {
    console.error(error);
  }
}

buttonLoadMore.addEventListener('click', loadMore);

async function loadMore() {
  secondLoader.style.display = 'block';
  currentPage++;
  counter += 15;
  try {
    const response = await getDataApi(currentPage, formValue);
    createMarkup(response.hits);

    if (response.totalHits >= 14) {
      const domRect =
        gallery.children[gallery.children.length - 14].getBoundingClientRect();
      window.scrollBy({
        top: domRect.y,
        left: domRect.x,
        behavior: 'smooth',
      });
    }

    secondLoader.style.display = 'none';
    if (counter >= response.totalHits) {
      buttonLoadMore.style.display = 'none';
      iziToast.info({
        message:
          'We are sorry, but you have reached the end of search results.',
      });
    }
  } catch (error) {
    console.error(error);
  }
}

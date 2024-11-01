'use strict';

import { fetchImages } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import icon from './img/error.svg';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.getElementById('loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let searchValue = event.currentTarget.elements.search.value.trim();

  if (!searchValue) {
    return;
  }
  gallery.innerHTML = '';

  loader.classList.remove('hidden');

  fetchImages(searchValue)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          backgroundColor: '#ef4040',
          position: 'topRight',
          titleColor: '#fff',
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          messageColor: '#fff',
          messageSize: '16',
          iconColor: '#fff',
          iconUrl: icon,
          timeout: 3000,
          maxWidth: 432,
        });
      } else {
        createMarkup(data);
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      loader.classList.add('hidden');
    });

  event.currentTarget.elements.search.value = '';
}

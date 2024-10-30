'use strict';

import { fetchImages } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let searchValue = event.currentTarget.elements.search.value.trim();

  if (!searchValue) {
    return;
  }
  fetchImages(searchValue)
    .then(data => {
      if (data.total === 0) {
        iziToast.error({
          title: 'Error',
          message: 'Illegal operation',
        });
      } else {
        console.log(data);
      }
    })
    .catch(data => {
      console.log(error);
    });
}

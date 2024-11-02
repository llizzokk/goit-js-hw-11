'use strict';

export function fetchImages(searchValue) {
  const API_KEY = '46805132-7b6e04e5dd5e788bcfb9e4740';
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

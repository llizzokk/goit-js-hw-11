'use strict';

export function createMarkup(obj) {
  const gallery = document.querySelector('.gallery');

  const html = obj.hits.map(hit => {
    return `<li class="gallery-item">
    <a class="gallery-link" href=${hit.largeImageURL} data-source=${hit.largeImageURL}>
        <div class='image-container'>
        
          <img
            class="gallery-image"
            src=${hit.webformatURL}
            alt=${hit.tags}
          />
       
         </div>
        <ul class='states-list'>
        <li class='states'>
        <p class='text states-title'>Likes</p>
        <p class='text states-number'>${hit.likes}</p>
        </li>
        <li class='states'>
        <p class='text states-title'>Views</p>
        <p class='text states-number'>${hit.views}</p>
        </li>
        <li class='states'>
        <p class='text states-title'>Comments</p>
        <p class='text states-number'>${hit.comments}</p>
        </li>
        <li class='states'>
        <p class='text states-title'>Downloads</p>
        <p class='text states-number'>${hit.downloads}</p>
        </li>
        </ul>
         </a>
      </li>
      `;
  });

  gallery.innerHTML = html.join('');
}

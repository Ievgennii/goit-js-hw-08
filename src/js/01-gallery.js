// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGaleryEl = document.querySelector('.gallery');

// console.log(divGaleryEl);

const addImagesGalery = createImagesGalery(galleryItems);
ulGaleryEl.innerHTML = addImagesGalery;


function createImagesGalery(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"          
          alt="" title=${description}""
        />
      </a>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', { captionDelay: 250 });
import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGaleryEl = document.querySelector('.gallery');

// console.log(divGaleryEl);

const addImagesGalery = createImagesGalery(galleryItems);
divGaleryEl.innerHTML = addImagesGalery;

divGaleryEl.addEventListener('click', onClickImage);


function createImagesGalery(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
    )
    .join('');
}

function onClickImage(evt) {
  evt.preventDefault();
  // console.log(evt);
  // console.log(evt.target.nodeName);

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
// console.log(instance);
  instance.show();

  window.addEventListener('keydown', (evt) => {if (evt.code === "Escape") {
    
    instance.close();
  }});
  
}
import { galleryItems } from './gallery-items.js';
// Change code below this line
let pictures = document.querySelector(".gallery");
let picturesMarkup = createPicturesMarkup(galleryItems);
pictures.insertAdjacentHTML("beforeend", picturesMarkup);


function createPicturesMarkup(galleryItems){
  return galleryItems.map(({ preview, original, description }) => {
      return `
      <a
        class="gallery__link"
        href = '${original}'
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="Image ${description}"
          title="beautiful picture"
        />
      </a>
    `;
    })
    .join("");
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250
});







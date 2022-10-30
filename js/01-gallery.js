import { galleryItems } from "./gallery-items.js";
// Change code below this line
let pictures = document.querySelector(".gallery");
let picturesMarkup = createPicturesMarkup(galleryItems);
pictures.insertAdjacentHTML("beforeend", picturesMarkup);
pictures.addEventListener('click', onClickPicture);


function createPicturesMarkup(galleryItems){
  return galleryItems.map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a
        class="gallery__link"
        href = '${original}'
      >
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
   </div>
    `;
    })
    .join("");
}
function onClickPicture(event) {
  if (!event.target.classList('gallery__image')) {
    return;
  };
}


console.log(galleryItems);







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

// Реалізація делегування на div.gallery і отримання url великого зображення
function onClickPicture(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  let src = event.target.getAttribute('data-source');
  instance.show(() => { 
    instance.element().querySelector('img').src = src;
  });
  
}

const instance = basicLightbox.create(`
    <div class="modal">
       <img
          class="gallery__image"
          src=""
          alt=""
        />
        <a>Close</a>
    </div>
`, {
    onShow: (instance) => {
        instance.element().querySelector('.modal').onclick = instance.close
    }
})











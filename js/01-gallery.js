import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkUp = createGalleryMarkUp(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkUp);

function createGalleryMarkUp (images){
    return images.map((item)=>
`
<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
`
    ).join("");
    
}
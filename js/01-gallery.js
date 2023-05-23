import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from 'basiclightbox';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const createMarkUpEl = createMarkUp(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", createMarkUpEl)

function createMarkUp(images){
  return images.map((item)=>
  `
  <li class="gallery__item">
  <a class="gallery__link" href="${item.original}" onclick="event.preventDefault()">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
  `
  ).join("")
}

galleryEl.addEventListener("click", createBasicLB);

function createBasicLB(event){
  console.log(event.target.dataset.source)
  const instance = basicLightbox.create(`
  <img src="${event.target.dataset.source}" width="80" height ="600">`)
instance.show()
}

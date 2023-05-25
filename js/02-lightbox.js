import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const createMarkUpEl = createMarkUp(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", createMarkUpEl)

function createMarkUp(images){
    return images.map((item)=>
    `
    <li class="gallery__item">
   <a class="gallery__link" href="${item.preview}" onclick = "event.preventDefault()">
      <img class="gallery__image" src="${item.original}" alt="${item.description}" />
   </a>
    </li>
    `).join("")
}

galleryEl.addEventListener("click", createSimpleLB);

function createSimpleLB(event) {
  console.log(event.target.dataset.source);
  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {
    captionSelector: "img";
    captionsData: 'alt';
    captionDelay: '250';
    captionPosition:'bottom';
  });
}
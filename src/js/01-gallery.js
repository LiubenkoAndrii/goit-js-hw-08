import { galleryItems } from "./gallery-items.js";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line

// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
          </a>
        </li>
      `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionDelay: 250,
  captionType: "attr",
  captionsData: "alt",
});

console.log(galleryItems);

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery= document.querySelector(".gallery");

let markup =galleryItems.map(({preview, original, description}) =>`
<li class="gallery__item">
<a class="gallery__link" href=${original}>
    <img src = "${preview}" 
    class=" gallery__image" 
    alt ="${description}"  />
</a>
</li>`).join("");
gallery.insertAdjacentHTML("beforeend",markup);

const newGallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
console.log(galleryItems);

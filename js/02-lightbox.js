import { galleryItems } from './gallery-items.js';

console.log(galleryItems);


const container = document.querySelector('.gallery');
container.classList.add('gallery__item');
const gallaryMarkup = createGallery(galleryItems); 
container.insertAdjacentHTML('beforeend', gallaryMarkup);

function createGallery (images) {
    return images.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" 
        src="${preview}" 
        alt="${description}"/>
        </a>
        `;
    }).join(""); 
};

 new SimpleLightbox('.gallery a', 
 {captionDelay: 250, captionPosition: 'bottom', captionsData: 'alt'});

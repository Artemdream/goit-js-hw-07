import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const container = document.querySelector('.gallery');
const gallaryMarkup = createGallery(galleryItems); 


container.insertAdjacentHTML('beforeend', gallaryMarkup)

container.addEventListener('click', onClick);

function createGallery (images) {
    return images.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
           />
          </a>
        </div> 
        `;
    }).join(""); 
} 

function onClick(e) {
    e.preventDefault()
    if (e.target.nodeName !== 'IMG') {
        return
     };

    const instance = basicLightbox.create(`
    <img
    src="${e.target.dataset.source}"
    />
    `);  

    instance.show()
};
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

galleryItems.forEach(item => {
  const galleryItem = document.createElement('li');
  galleryItem.insertAdjacentHTML(
    'afterbegin',
    `<a class="gallery__item" href="${item.original}" onclick="return(false)"> <img class="gallery__image" src="${item.preview}" data-source = "${item.original}" alt="${item.description}"/></a>`
  );
  gallery.append(galleryItem);
});

const modalBox = new SimpleLightbox('.gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
});

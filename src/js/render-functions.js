import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
});
const gallery = document.querySelector('.gallery');

export function createMarkup(images) {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
    	<a class="gallery-link" href="${largeImageURL}">
    		<img
    			class="gallery-image"
    			src="${webformatURL}"
    			alt="${tags}"
    			/>
    	</a>
        <div class="stats-box">
      <ul class="img-stats">
         <li>
            <p>Likes</p>
            <p>${likes}</p>
          </li>
          <li>
            <p>Views</p>
            <p>${views}</p>
          </li>
          <li>
            <p>Comments</p>
            <p>${comments}</p>
          </li>
          <li>
            <p>Downloads</p>
            <p>${downloads}</p>
          </li>
      </ul>
    </div>
    </li>
    `
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

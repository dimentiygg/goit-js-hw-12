import axios from 'axios';

const form = document.querySelector('.search-form');

export async function getDataApi(currentPage, formValue) {
  if (formValue !== '') {
    const searchWord = formValue;
    axios.defaults.baseURL =
      'https://pixabay.com/api/?key=42472719-86e9d77d864a652d5db1b513d';
    try {
      const response = await axios.get('', {
        params: {
          q: searchWord,
          image_type: 'photo',
          orientation: 'horizontal',
          safesearch: true,
          per_page: 15,
          page: currentPage,
        },
      });
      form.reset();
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

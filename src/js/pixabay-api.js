import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?key=42472719-86e9d77d864a652d5db1b513d';

export async function getDataApi(currentPage, searchWord) {
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
  return response.data;
}

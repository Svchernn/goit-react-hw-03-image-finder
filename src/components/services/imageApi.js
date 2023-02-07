import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: '32171401-514b83b6102b11560a1fef5f9',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const searchImage = async (q, page = 1) => {
  const data = await instance.get('', {
    params: {
      q,
      page,
    },
  });
  return data;
};

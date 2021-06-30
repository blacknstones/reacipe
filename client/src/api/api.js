import axios from 'axios';

const getRecipesByQuery = query => {
    return axios.get('/api/recipes', {
        params: query,
      }).then(res => res.data);
}


export { getRecipesByQuery };
import axios from 'axios';

const getRecipesByQuery = async (query) => {

  try {
    const result = await axios.get('/api/recipes', {
       params: query,
     });
     return result.data;

  } catch (error) {
    return {error};
  }
}

const getRecipeById = async (id) => {
  try {
    const result = await axios.get('/api/recipes/' + id);
    return result.data;
  } catch(error) {
    return {error};
  }
}

const getNextPage = async (url) => {
  console.log('sending next request: ', url);
  try {
    const result = await axios.get('/api/recipes/next', {
      params: {
        url
      }
    });
    return result.data;

  } catch(error) {
    return {error};
  }
}

/* const addToFavorites = async (recipe) = {

} */


export { getRecipesByQuery, getRecipeById, getNextPage };
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

const getFavorites = async () => {
  try {
    const result = await axios.get('/api/favorites');
    console.log('getting favorites', result);
    return result;

  } catch(error) {
    return {error}; 
  }
}

const addToFavorites = async (recipe) => {
  try {
    const response = await axios.post('/api/favorites', recipe);
    console.log('adding to favorites', response);

  } catch(error) {
    console.log(error);
  }
}

const removeFromFavorites = async (id) => {
  try {
    const response = await axios.delete('/api/favorites/' + id);
    console.log('deleting favorites', response);
  } catch(error) {
    console.log(error);
  }
}


export { getRecipesByQuery, getRecipeById, getNextPage, getFavorites, addToFavorites, removeFromFavorites };
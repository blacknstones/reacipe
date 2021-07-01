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


export { getRecipesByQuery };
import axios from 'axios';
import dotenv from 'dotenv';
import querystring from 'querystring';

dotenv.config();

const baseUrl = `https://www.edamam.com/api/recipes/v2`;
const baseParams = {
  app_id: process.env.APP_ID,
  app_key: process.env.API_KEY,
  type: 'public',
};

const parseQuery = url => {
  const parsedUrl = url.split('?');
  return querystring.parse(parsedUrl[1]);
};

const getRecipesByQuery = async (request, response) => {
  const rawUrl = request.url;
  const newQuery = parseQuery(rawUrl);

  try {
    const result = await axios.get(baseUrl, {
      params: { ...baseParams, ...newQuery },
    });

    response.send({
      recipes: result.data.hits,
      next: result.data._links.next.href,
    });
  } catch (err) {
    response.status(404).send('error!!');
  }
};

const getRecipeById = async (request, response) => {
  const { id } = request.params;

  try {
    const result = await axios.get(`${baseUrl}/${id}`, {
      params: baseParams
    });
    response.send(result.data);
    
  } catch(err) {
    response.status(404).send('error!!');
  }
};

const getNextPage = async (request, response) => {
  const rawUrl = request.url;
  const nextUrl = parseQuery(rawUrl).url;

  try {
    const result = await axios.get(nextUrl);
    
    response.send({
      recipes: result.data.hits,
      next: result.data._links.next.href,
    })
  } catch (err) {
    response.status(404).send('error!!');
  }
}

export { getRecipesByQuery, getRecipeById, getNextPage };

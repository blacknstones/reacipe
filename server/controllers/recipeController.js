import axios from 'axios';
import dotenv from 'dotenv';
import querystring from 'querystring';

dotenv.config();

const baseUrl = `https://www.edamam.com/api/recipes/`;
const baseParams = {
    app_id: process.env.APP_ID,
    app_key: process.env.API_KEY,
    type: 'public'
}

const parseQuery = url => {
    const parsedUrl = url.split('?');
    return querystring.parse(parsedUrl[1]);
}

const getRecipesByQuery = async (request, response) => {
    const rawUrl = request.url;
    const newQuery = parseQuery(rawUrl);

    try {
 const result = await axios.get(baseUrl, {
        params: {...baseParams, ...newQuery}
    });
    
    response.send(
        {
            from: result.data.from,
            to: result.data.to,
            count: result.data.count,
            recipes: result.data.hits, 
            next: result.data._links.next.href
        }
        );      
    }
    
   
}

const getRecipeById = (request, response) => {
    const {id} = request.params;
    console.log(id);
    // axios.get(baseUrl)
}

export {getRecipesByQuery, getRecipeById};
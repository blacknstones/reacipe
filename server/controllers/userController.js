import { default as fsWithCallbacks } from 'fs';
const fs = fsWithCallbacks.promises;

const getFavorites = async (request, response) => {
  console.log('user is getting favorites');
  try {
    const result = await fs.readFile('./db/favorites.json');
    const favorites = JSON.parse(result);
    response.json({favorites});
  } catch (error) {
    response.status(404).send('not found');
  }
};

const addFavorite = async (request, response) => {
    console.log('user is posting to favorites');
    try {
        const favorite = request.body;
        const dbData = await fs.readFile('./db/favorites.json');
        const favorites = JSON.parse(dbData);
        if(favorites.find(el => el.id === favorite.id)) {
            response.json({favorites});
        } else {
            favorites.push(favorite);
        await fs.writeFile('./db/favorites.json', JSON.stringify(favorites));
        response.json({ favorites });
        }
        

    } catch(error) {
        console.log(error);
        response.status(404).send('error');
    }
}

const deleteFavorite = async (request, response) => {
    console.log('user is deleting a favorite');
    try {
        const id = request.url;
        console.log(id);



    } catch(error) {
        console.log(error);
    }
}

export { getFavorites, addFavorite, deleteFavorite };

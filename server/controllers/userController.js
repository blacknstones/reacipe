import { default as fsWithCallbacks } from 'fs';
const fs = fsWithCallbacks.promises;

const getFavorites = async (request, response) => {
  console.log('user is getting favorites');
  try {
    const dbData = await fs.readFile('./server/db/favorites.json');
    const favorites = JSON.parse(dbData);
    response.json({ favorites });
  } catch (error) {
    response.status(404).send('not found');
  }
};

const addFavorite = async (request, response) => {
  console.log('user is posting to favorites');
  try {
    const favorite = request.body;
    const dbData = await fs.readFile('./server/db/favorites.json');
    const favorites = JSON.parse(dbData);
    if (favorites.find(el => el.id === favorite.id)) {
      response.json({ favorites });
    } else {
      favorites.push(favorite);
      await fs.writeFile('./server/db/favorites.json', JSON.stringify(favorites));
      response.json({ favorites });
    }
  } catch (error) {
    console.log(error);
    response.status(404).send('error');
  }
};

const deleteFavorite = async (request, response) => {
  console.log('user is deleting a favorite');
  const id = request.params.id;
  console.log(id);
  try {
    const dbData = await fs.readFile('./server/db/favorites.json');
    const favorites = JSON.parse(dbData);
    if (favorites.find(el => el.id === id)) {
      const newFavorites = favorites.filter(el => el.id !== id);
      await fs.writeFile('./server/db/favorites.json', JSON.stringify(newFavorites));
      response.json({newFavorites});
    }
  } catch (error) {
    console.log(error);
  }
};

export { getFavorites, addFavorite, deleteFavorite };

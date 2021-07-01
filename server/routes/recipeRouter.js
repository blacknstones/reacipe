import { Router } from 'express';
import { getRecipesByQuery, getRecipeById, getNextPage } from '../controllers/recipeController.js';

const recipeRouter = Router();

recipeRouter.get('/api/recipes', getRecipesByQuery);

recipeRouter.get('/api/recipes/next', getNextPage);

recipeRouter.get('/api/recipes/:id', getRecipeById);


export default recipeRouter;
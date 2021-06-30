import { Router } from 'express';
import { getRecipesByQuery, getRecipeById } from '../controllers/recipeController.js';

const recipeRouter = Router();

recipeRouter.get('/api/recipes', getRecipesByQuery);

recipeRouter.get('/api/recipes/:id', getRecipeById);


export default recipeRouter;
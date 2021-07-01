import { Router } from 'express';
import { addFavorite, getFavorites, deleteFavorite } from '../controllers/userController.js';

const userRouter = Router();

userRouter.get('/api/favorites', getFavorites);
userRouter.post('/api/favorites', addFavorite);
userRouter.delete('/api/favorites/:id', deleteFavorite);

export default userRouter;
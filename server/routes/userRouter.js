import { Router } from 'express';

const userRouter = Router();

userRouter.get('api/favorites', getFavorites);

export default userRouter;
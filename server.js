import express from 'express';
import dotenv from 'dotenv';
import recipeRouter from './server/routes/recipeRouter.js';
import userRouter from './server/routes/userRouter.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(recipeRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})

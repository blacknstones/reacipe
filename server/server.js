import express from 'express';
import dotenv from 'dotenv';
import recipeRouter from './routes/recipeRouter.js';
import userRouter from './routes/userRouter';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(recipeRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})
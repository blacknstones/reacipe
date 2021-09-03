import express from 'express';
import dotenv from 'dotenv';
import recipeRouter from './routes/recipeRouter.js';
import userRouter from './routes/userRouter.js';
import path from 'path';
const __dirname = path.resolve();

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build'));
});

app.use(recipeRouter);
app.use(userRouter);

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})

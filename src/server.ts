import express from 'express';
import routes from './routes';
import cors from 'cors';

const dotenv = require('dotenv');

const app = express();

dotenv.config()
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import initDB from './database.js';
import initRoutes from './Routers/routes.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static('public'));
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

app.use(express.static(path.join(__dirname, 'public')));

initDB();
initRoutes(app);

const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});

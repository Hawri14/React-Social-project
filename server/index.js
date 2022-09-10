import express from 'express';
import bodyParser from 'body-parser';
import mongoose, { mongo } from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
//this is the database cluster we are using from mongoDB atlas
const CONNECTION_URL = 'mongodb+srv://React1:React1123@cluster0.xp5f6te.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;
//connect the server to localhost 5000 and make it listen to the port
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));


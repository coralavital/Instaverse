import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from './routes/stories.js';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(bodyParser.json( { limit: '32mb', extended: true }));
app.use(bodyParser.urlencoded( { limit: '32mb', extended: true }));
app.use(cors());

app.use('/stories', storyRoutes);
app.use('/user', userRoutes);

const MONGOURI = process.env.MONGO_URI;
const PORT = process.env.PORT;


const connectDB = async () => {
    try {
        await mongoose.connect(MONGOURI);
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    } catch (err) {
        console.error("Connection to MongoDB failed", err.message);
    }
}

connectDB();

mongoose.connection.on('open', () => console.log("Connection to database has been established successfully"));
mongoose.connection.on('error', (err) => console.log(err));



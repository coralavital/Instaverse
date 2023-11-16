import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from './routes/stories.js';

const app = express();

app.use(bodyParser.json( { limit: '32mb', extended: true }));
app.use(bodyParser.urlencoded( { limit: '32mb', extended: true }));
app.use(cors());
app.use('/stories', storyRoutes);

const MONGOURI = "mongodb+srv://instaverse:1902@cluster0.ss7wxuf.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5001;

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


